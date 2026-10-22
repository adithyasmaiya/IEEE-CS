import type { ThemeItem } from '../types';

export const THEMES_LIST: ThemeItem[] = [
  {
    id: 'theme-01',
    number: '01',
    title: 'Autonomous Intelligence & Edge Systems',
    isPlaceholderTitle: false,
    description: 'Design low-latency on-device intelligence, autonomous agent orchestrations, embedded computer vision, and real-time neural inference under strict power constraints.',
    trackTag: 'Track 01 · AI / Embedded Systems',
    svgShape: 'concentric'
  },
  {
    id: 'theme-02',
    number: '02',
    title: 'Distributed Systems & Resilient Infra',
    isPlaceholderTitle: false,
    description: 'Engineer high-throughput peer-to-peer protocols, verifiable zero-knowledge compute nodes, decentralized databases, and mission-critical cloud mesh infrastructure.',
    trackTag: 'Track 02 · Systems / Infrastructure',
    svgShape: 'flow'
  },
  {
    id: 'theme-03',
    number: '03',
    title: 'Human-Machine Convergence & Spatial Tech',
    isPlaceholderTitle: false,
    description: 'Explore the boundary where computing touches human sensation: tactile wearable hardware, assistive bio-interfaces, spatial audio computing, and sensory devices.',
    trackTag: 'Track 03 · Hardware / HCI',
    svgShape: 'triangle'
  },
  {
    id: 'theme-04',
    number: '04',
    title: 'Radical Software Craft & Open Civic Tech',
    isPlaceholderTitle: false,
    description: 'Audacious software engineering solving real civic problems: high-performance compilers, resilient developer devtools, privacy primitives, and public goods.',
    trackTag: 'Track 04 · Open Wildcard',
    svgShape: 'squares'
  }
];

export const THEMES_NOTE = {
  officialStatus: '4 Tracks Live · Comprehensive problem statements & API keys provided at kickoff',
  prizeStatus: '₹1,50,000+ Prize Pool · Cash bounties, seed grants, and IEEE incubation credits'
};
