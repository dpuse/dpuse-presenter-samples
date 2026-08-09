// ── DPUse Framework
import type { ComponentReferenceConfig } from '@dpuse/dpuse-shared/component';
import type { LocalisedReference } from '@dpuse/dpuse-shared/locale';
import type { PresentationConfig } from '@dpuse/dpuse-shared/component/presentation';
import type { ToolConfig } from '@dpuse/dpuse-shared/component/module/tool';
import type { PresenterConfig, PresenterInterface } from '@dpuse/dpuse-shared/component/module/presenter';

// ── DPUse Tools
import type { D3Tool as D3ToolType } from '@dpuse/dpuse-tool-d3-visualiser';
import type { MicromarkTool } from '@dpuse/dpuse-tool-micromark-markdown-parser';

// ── Data
import config from '~/config.json';
import configPresentations from '~/configPresentations.json';
import { barChartSampleData, chordDiagramSampleData, sankeyDiagramSampleData } from '@/sampleData/d3SampleData';

// ── Presenters ───────────────────────────────────────────────────────────────────────────────────────────────────────

export default class SamplesPresenter implements PresenterInterface {
    readonly config: PresenterConfig;
    colorModeId: string;
    readonly toolConfigs;

    d3Tool?: D3ToolType;
    micromarkTool?: MicromarkTool;

    constructor(toolConfigs: ToolConfig[], colorModeId: string) {
        this.config = config as PresenterConfig;
        this.toolConfigs = toolConfigs;
        this.colorModeId = colorModeId;
    }

    // ── Actions ──────────────────────────────────────────────────────────────────────────────────────────────────────

    list(): ComponentReferenceConfig[] {
        return this.config.presentations;
    }

    async render(presentationReference: LocalisedReference<ComponentReferenceConfig>, renderTo: HTMLElement): Promise<void> {
        // Use presentation path to retrieve presentation.
        const presentationPath = presentationReference.path as keyof typeof configPresentations;
        const presentationLabel = presentationReference.label;

        const presentation = configPresentations[presentationPath] as PresentationConfig;

        // Substitute values for label placeholders in content.
        const processedMarkdown = presentation.content.replaceAll('{{label}}', () => presentationLabel);

        // Render markdown to HTML.
        this.micromarkTool = await this.loadMicromarkTool();
        const html = await this.micromarkTool.render(processedMarkdown, { directives: true, tables: true });
        renderTo.innerHTML = html;
        // colorModeId is passed explicitly (rather than relying on the tool's own state) because micromarkTool is
        // lazily created above: any setColorMode() call received before this instance existed never reached it, so
        // its internal state could still be the 'light' default even if this.colorModeId is 'dark'.
        await this.micromarkTool.highlight(renderTo, this.colorModeId);

        // Render the sample chart for this presentation.
        this.d3Tool = await this.loadD3Tool();

        const chartContainer = document.createElement('div');
        chartContainer.className = 'h-80 w-full';
        renderTo.append(chartContainer);

        await this.renderSample(presentationPath, chartContainer);
    }

    setColorMode(id: string) {
        this.colorModeId = id;
        // Guarded because micromarkTool may not be loaded yet (it's created lazily in render()); if not loaded,
        // there's nothing rendered yet to update, and the next render() will pick up this.colorModeId anyway.
        if (this.micromarkTool) this.micromarkTool.setColorMode(this.colorModeId);
    }

    // ── Helpers ──────────────────────────────────────────────────────────────────────────────────────────────────────

    private async renderSample(presentationPath: string, renderTo: HTMLElement): Promise<void> {
        if (!this.d3Tool) return;

        switch (presentationPath) {
            case 'd3/chordDiagram':
                await this.d3Tool.renderChordDiagram(chordDiagramSampleData, renderTo);
                break;
            case 'd3/sankeyDiagram':
                await this.d3Tool.renderSankeyDiagram(sankeyDiagramSampleData, renderTo);
                break;
            case 'd3/barChartBillboard':
                await this.d3Tool.renderBillboardJS(barChartSampleData, renderTo);
                break;
            case 'd3/barChartObservablePlot':
                await this.d3Tool.renderObservablePlot('bar', barChartSampleData, renderTo);
                break;
            case 'd3/barChartD3Native':
                await this.d3Tool.renderD3BarChart(barChartSampleData, renderTo);
                break;
            case 'd3/barChartTanStack':
                await this.d3Tool.renderTanStackCharts(barChartSampleData, renderTo);
                break;
        }
    }

    private async loadD3Tool(): Promise<D3ToolType> {
        if (this.d3Tool) return this.d3Tool;

        const toolModuleConfig = this.toolConfigs.find((config) => config.id === 'dpuse-tool-d3-visualiser');
        if (!toolModuleConfig) throw new Error('No D3 tool module configuration.');

        this.ensureD3ToolStylesheetLoaded(toolModuleConfig.version);

        const url = `https://engine-eu.dpuse.app/tools/d3-visualiser_v${toolModuleConfig.version}/dpuse-tool-d3-visualiser.es.js`;
        const module = (await import(/* @vite-ignore */ url)) as { D3Tool: new () => D3ToolType };
        const D3Tool = module.D3Tool;
        return new D3Tool();
    }

    // Billboard.js (used by renderBillboardJS) requires its own stylesheet - unlike the SVG-only renderers, it won't
    // look right without it. Injected as a <link> from the same engine origin the tool's JS already loads from,
    // guarded so a second mount doesn't insert it twice.
    private ensureD3ToolStylesheetLoaded(version: string): void {
        const href = `https://engine-eu.dpuse.app/tools/d3-visualiser_v${version}/dpuse-tool-d3-visualiser.css`;
        if (document.head.querySelector(`link[href="${CSS.escape(href)}"]`)) return;

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.append(link);
    }

    private async loadMicromarkTool(): Promise<MicromarkTool> {
        if (this.micromarkTool) return this.micromarkTool;

        const toolModuleConfig = this.toolConfigs.find((config) => config.id === 'dpuse-tool-micromark-markdown-parser');
        if (!toolModuleConfig) throw new Error('No Micromark tool module configuration.');

        const url = `https://engine-eu.dpuse.app/tools/micromark-markdown-parser_v${toolModuleConfig.version}/dpuse-tool-micromark-markdown-parser.es.js`;
        const module = (await import(/* @vite-ignore */ url)) as { MicromarkTool: new () => MicromarkTool };
        const MicromarkToolConstructor = module.MicromarkTool;
        return new MicromarkToolConstructor();
    }
}
