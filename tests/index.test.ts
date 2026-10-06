// @vitest-environment jsdom

// ── External Dependencies & Registrations
import { beforeEach, describe, expect, it, vi } from 'vitest';

// ── Local Framework
import { Presenter } from '@/index';

// ── Mocks ────────────────────────────────────────────────────────────────────────────────────────────────────────────

// Tools are loaded at run time from the engine, so the tests supply stand-ins and check how they are used.
const tools = vi.hoisted(() => ({
    d3: {
        renderChordDiagram: vi.fn(),
        renderSankeyDiagram: vi.fn(),
        renderTanStackCharts: vi.fn()
    },
    micromark: { highlight: vi.fn(), render: vi.fn(), setColorMode: vi.fn() }
}));
vi.mock('@dpuse/dpuse-shared', async (importOriginal) => ({
    ...(await importOriginal<object>()),
    loadTool: vi.fn((_toolConfigs: unknown, name: string) => Promise.resolve(name === 'd3-visualiser' ? tools.d3 : tools.micromark))
}));

// ── Tests ────────────────────────────────────────────────────────────────────────────────────────────────────────────

const TOOL_CONFIGS = [{ id: 'dpuse-tool-d3-visualiser', version: '1.2.3' }];

function createPresenter(): Presenter {
    return new Presenter(TOOL_CONFIGS as never, 'dark');
}

function createReference(path: string): never {
    return { label: 'Sample', path } as never;
}

describe('Presenter', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        tools.micromark.render.mockResolvedValue('<h1>Sample</h1><script>alert(1)</script>');
    });

    it('lists the presentations in its config', () => {
        const presenter = createPresenter();

        expect(presenter.list()).toBe(presenter.config.presentations);
        expect(presenter.list().length).toBeGreaterThan(0);
    });

    it('renders the presentation’s markdown safely, highlighted in the current colour mode', async () => {
        const renderTo = document.createElement('div');

        await createPresenter().render(createReference('d3/chordDiagram'), renderTo);

        expect(tools.micromark.render).toHaveBeenCalledWith(expect.any(String), { directives: true, tables: true });
        expect(renderTo.querySelector('h1')?.textContent).toBe('Sample');
        expect(renderTo.querySelector('script')).toBeNull();
        expect(tools.micromark.highlight).toHaveBeenCalledWith(renderTo, 'dark');
    });

    it.each([
        ['d3/barChartTanStack', 'renderTanStackCharts'],
        ['d3/chordDiagram', 'renderChordDiagram'],
        ['d3/sankeyDiagram', 'renderSankeyDiagram']
    ] as const)('renders the %s sample into a chart container', async (path, methodName) => {
        const renderTo = document.createElement('div');

        await createPresenter().render(createReference(path), renderTo);

        const chartContainer = renderTo.querySelector('div.h-80');
        expect(chartContainer).not.toBeNull();
        expect(tools.d3[methodName]).toHaveBeenCalledOnce();
        expect(tools.d3[methodName].mock.lastCall?.at(-1)).toBe(chartContainer);
    });

    it('passes a colour mode change to the markdown tool once it is loaded', async () => {
        const presenter = createPresenter();
        presenter.setColorMode('light');
        expect(tools.micromark.setColorMode).not.toHaveBeenCalled();

        await presenter.render(createReference('d3/chordDiagram'), document.createElement('div'));
        presenter.setColorMode('dark');

        expect(presenter.colorModeId).toBe('dark');
        expect(tools.micromark.setColorMode).toHaveBeenCalledWith('dark');
    });
});
