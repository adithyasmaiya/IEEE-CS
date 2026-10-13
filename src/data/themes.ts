import type { ThemeItem } from '../types';

export const THEMES_LIST: ThemeItem[] = [
  {
    id: 'theme-01',
    number: '01',
    title: 'Distributed Infrastructure & Resilient Systems',
    isPlaceholderTitle: true,
    description: 'Draft problem space exploring autonomous peer-to-peer computing, edge intelligence, and low-latency fault-tolerant communications. Teams engineer robust software architectures capable of operating under degraded networking or resource constraints.',
    trackTag: 'Track 01 · Draft Specification [TBA]',
    svgShape: 'concentric',
    systemFocus: 'Decentralized consensus, edge networks, memory-efficient daemon services, verifiable telemetry.',
    details: [
      'Focuses on systems architecture rather than surface-level wrappers.',
      'Prototypes must demonstrate real network partition handling or offline-first synchronization.',
      'Hardware simulations and kernel/userspace boundary experiments encouraged.'
    ],
    criteriaPlaceholder: 'Evaluation: System throughput, fault recovery time, protocol efficiency [OFFICIAL CRITERIA TBA]'
  },
  {
    id: 'theme-02',
    number: '02',
    title: 'Applied Intelligence & Autonomous Agents',
    isPlaceholderTitle: true,
    description: 'Draft problem space at the convergence of deterministic code and probabilistic models. Teams build goal-driven agent architectures, semantic memory retrieval pipelines, and constrained execution environments that solve specialized engineering challenges.',
    trackTag: 'Track 02 · Draft Specification [TBA]',
    svgShape: 'flow',
    systemFocus: 'Autonomous reasoning loops, multi-agent arbitration, low-latency vector quantization, deterministic tool usage.',
    details: [
      'Emphasis on verifiable agent outputs and deterministic sandbox execution.',
      'Evaluated on latency, model token efficiency, and reliability under adversarial inputs.',
      'No simple prompt wrappers; builds must solve complex stateful workflows.'
    ],
    criteriaPlaceholder: 'Evaluation: Tool-use precision, sandbox safety, inference optimization [OFFICIAL CRITERIA TBA]'
  },
  {
    id: 'theme-03',
    number: '03',
    title: 'Hardware Interfaces, Embedded & Cyber-Physical',
    isPlaceholderTitle: true,
    description: 'Draft problem space connecting software pipelines to physical sensors, microcontrollers, and real-time operational systems. Teams bridge low-level firmware, signal telemetry, and spatial computing to actuate real-world machines.',
    trackTag: 'Track 03 · Draft Specification [TBA]',
    svgShape: 'triangle',
    systemFocus: 'RTOS microkernels, SPI/I2C sensor streams, FPGA acceleration, digital signal processing.',
    details: [
      'Integrates microcontrollers or simulated physical hardware loops.',
      'Prioritizes deterministic timing, energy consumption, and hardware safety bounds.',
      'Mentors with lab equipment and logic analyzers available on site during the build.'
    ],
    criteriaPlaceholder: 'Evaluation: Hardware timing jitter, power consumption profile, fail-safe mechanics [OFFICIAL CRITERIA TBA]'
  },
  {
    id: 'theme-04',
    number: '04',
    title: 'Open Innovation / Wildcard Engineering',
    isPlaceholderTitle: true,
    description: 'An open problem space for unorthodox intersections: developer tooling, programming language theory, novel cryptographic primitives, or accessible assistive technologies. Teams define their own constraints and defend their technical novelty.',
    trackTag: 'Track 04 · Wildcard Track [TBA]',
    svgShape: 'squares',
    systemFocus: 'Compiler optimization, zero-knowledge proofs, spatial acoustics, unconventional user interfaces.',
    details: [
      'Open to cross-disciplinary projects that defy standard category boundaries.',
      'Requires explicit justification of technological novelty and engineering depth.',
      'Judged directly on the running prototype and demonstration of core principles.'
    ],
    criteriaPlaceholder: 'Evaluation: Technological novelty, completeness of execution, reproducible demo [OFFICIAL CRITERIA TBA]'
  }
];

export const THEMES_NOTE = {
  officialStatus: 'Draft specifications shown above. Official problem briefs remain [PENDING ANNOUNCEMENT].',
  prizeStatus: 'Track bounties, sponsor challenges, and category awards remain [PRIZE DETAILS TBA].'
};
