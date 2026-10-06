// ── External Dependencies & Registrations
import DOMPurify from 'dompurify';

// ── DPUse Framework
import { loadTool } from '@dpuse/dpuse-shared';
import type { ComponentReferenceConfig, LocalisedReference, PresentationConfig, PresenterConfig, PresenterInterface, ToolConfig } from '@dpuse/dpuse-shared';

// ── DPUse Tools
import type { Tool as D3Tool } from '@dpuse/dpuse-tool-d3-visualiser';
import type { Tool as MicromarkTool } from '@dpuse/dpuse-tool-micromark-markdown-parser';

// ── Data
import config from '~/config.json';
import configPresentations from '~/configPresentations.json';
import { barChartSampleData, chordDiagramSampleData, sankeyDiagramSampleData } from '@/sampleData/d3SampleData';

// ── Presenters ───────────────────────────────────────────────────────────────────────────────────────────────────────

export class Presenter implements PresenterInterface {
    readonly config: PresenterConfig;
    colorModeId: string;
    readonly toolConfigs;

    d3Tool?: D3Tool;
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
        this.micromarkTool ??= await loadTool<MicromarkTool>(this.toolConfigs, 'micromark-markdown-parser');
        const html = await this.micromarkTool.render(processedMarkdown, { directives: true, tables: true });
        renderTo.innerHTML = DOMPurify.sanitize(html);
        // colorModeId is passed explicitly (rather than relying on the tool's own state) because micromarkTool is
        // lazily created above: any setColorMode() call received before this instance existed never reached it, so
        // its internal state could still be the 'light' default even if this.colorModeId is 'dark'.
        await this.micromarkTool.highlight(renderTo, this.colorModeId);

        // Render the sample chart for this presentation.
        this.d3Tool ??= await loadTool<D3Tool>(this.toolConfigs, 'd3-visualiser');

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
            case 'd3/barChartTanStack':
                await this.d3Tool.renderTanStackCharts(barChartSampleData, renderTo);
                break;
        }
    }
}
