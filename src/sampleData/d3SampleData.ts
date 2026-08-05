// ── DPUse Tools
import type { BarChartData, ChordDiagramData, SankeyDiagramData } from '@dpuse/dpuse-tool-d3-visualiser';

// ── Sample Data ──────────────────────────────────────────────────────────────────────────────────────────────────────

export const chordDiagramSampleData: ChordDiagramData = {
    links: [
        { source: 'design', target: 'engineering', value: 12 },
        { source: 'engineering', target: 'product', value: 9 },
        { source: 'product', target: 'support', value: 6 },
        { source: 'support', target: 'design', value: 4 },
        { source: 'engineering', target: 'support', value: 3 }
    ],
    nodes: [
        { id: 'design', label: 'Design' },
        { id: 'engineering', label: 'Engineering' },
        { id: 'product', label: 'Product' },
        { id: 'support', label: 'Support' }
    ]
};

export const sankeyDiagramSampleData: SankeyDiagramData = {
    links: [
        { source: 'sourcing', target: 'contextualising', value: 8 },
        { source: 'contextualising', target: 'publishing', value: 5 },
        { source: 'contextualising', target: 'archived', value: 3 }
    ],
    nodes: [
        { id: 'sourcing', name: 'Sourcing' },
        { id: 'contextualising', name: 'Contextualising' },
        { id: 'publishing', name: 'Publishing' },
        { id: 'archived', name: 'Archived' }
    ]
};

export const barChartSampleData: BarChartData = {
    categories: ['Q1', 'Q2', 'Q3', 'Q4'],
    series: [
        { name: 'Revenue', values: [30, 200, 100, 400] },
        { name: 'Cost', values: [130, 100, 140, 200] }
    ]
};
