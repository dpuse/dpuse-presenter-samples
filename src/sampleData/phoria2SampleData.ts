// ── DPUse Tools
import type { NetworkTopologyData, NetworkTopologyNode, NetworkTopologyStatusId } from '@dpuse/dpuse-tool-phoria2-visualiser';

// ── Constants ────────────────────────────────────────────────────────────────────────────────────────────────────────

const SWITCH_COUNT = 6;
const HOSTS_PER_SWITCH = 6;
const RANDOM_MODULUS = 4_294_967_296; // 2 to the power 32, so every step stays an exact whole number.

// ── Sample Data ──────────────────────────────────────────────────────────────────────────────────────────────────────

export const networkTopologySampleData = constructNetworkTopologySampleData();

// ── Helpers ──────────────────────────────────────────────────────────────────────────────────────────────────────────

// A made-up network in three tiers, from phoria2's topology demo: two core routers, a ring of switches, and hosts
// round each switch. A seeded random sequence picks the statuses and loads, so the sample is the same on every render.
function constructNetworkTopologySampleData(): NetworkTopologyData {
    const random = constructRandomSequence(11);
    const nodes: NetworkTopologyNode[] = [];
    const links: NetworkTopologyData['links'] = [];
    const pickStatusId = (): NetworkTopologyStatusId => {
        const value = random();
        if (value < 0.06) return 'down';
        return value < 0.18 ? 'degraded' : 'healthy';
    };
    const pickLoad = (statusId: NetworkTopologyStatusId): number => {
        if (statusId === 'down') return 0;
        return Math.round(20 + random() * (statusId === 'degraded' ? 75 : 55));
    };
    const addNode = (node: Omit<NetworkTopologyNode, 'address'>): string => {
        const tier = { router: 0, switch: 1, server: 2, database: 2 }[node.typeId];
        const index = nodes.length;
        nodes.push({ ...node, address: `10.${String(tier)}.${String(Math.floor(index / 8))}.${String(10 + (index % 8))}` });
        return node.id;
    };

    const coreIds = [-3, 3].map((x, index) =>
        addNode({ id: `core-${String(index + 1)}`, label: `core-${String(index + 1)}`, load: pickLoad('healthy'), position: [x, 6, 0], statusId: 'healthy', typeId: 'router' })
    );
    links.push({ source: coreIds[0] ?? '', target: coreIds[1] ?? '' });

    const switchIds: string[] = [];
    for (let switchIndex = 0; switchIndex < SWITCH_COUNT; switchIndex++) {
        const angle = (switchIndex / SWITCH_COUNT) * Math.PI * 2;
        const switchId = addNode({
            id: `dist-${String(switchIndex + 1)}`,
            label: `dist-${String(switchIndex + 1)}`,
            load: pickLoad('healthy'),
            position: [Math.cos(angle) * 7, 3, Math.sin(angle) * 7],
            statusId: switchIndex === 4 ? 'degraded' : 'healthy',
            typeId: 'switch'
        });
        switchIds.push(switchId);
        for (const coreId of coreIds) links.push({ source: coreId, target: switchId });

        for (let hostIndex = 0; hostIndex < HOSTS_PER_SWITCH; hostIndex++) {
            const hostAngle = angle + (hostIndex - (HOSTS_PER_SWITCH - 1) / 2) * 0.13;
            const statusId = pickStatusId();
            const typeId = hostIndex === 0 ? 'database' : 'server';
            const label = `${typeId === 'database' ? 'db' : 'app'}-${String(switchIndex + 1)}${String.fromCodePoint(97 + hostIndex)}`;
            const position: NetworkTopologyNode['position'] = [Math.cos(hostAngle) * 13, 0, Math.sin(hostAngle) * 13];
            const hostId = addNode({ id: label, label, load: pickLoad(statusId), position, statusId, typeId });
            links.push({ source: switchId, target: hostId });
        }
    }

    // The switches are also linked in a ring.
    for (const [index, switchId] of switchIds.entries()) links.push({ source: switchId, target: switchIds[(index + 1) % switchIds.length] ?? '' });

    return { links, nodes };
}

// A linear congruential generator: crude, but enough to scatter statuses, and the same seed always gives the same
// sequence.
function constructRandomSequence(seed: number): () => number {
    let state = seed;
    return () => {
        state = (state * 1_664_525 + 1_013_904_223) % RANDOM_MODULUS;
        return state / RANDOM_MODULUS;
    };
}
