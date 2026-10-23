import type { EventConfig, FactItem, EventMetric, EventProvision } from '../types';

export const EVENT_CONFIG: EventConfig = {
  name: 'CONFLUENCE',
  edition: '2026',
  organizer: 'IEEE Computer Society',
  university: 'PES University',
  city: 'Bengaluru',
  coordinates: '12.9716° N / 77.5946° E',
  tagline: 'Where ideas, disciplines and engineers converge into something that has never existed before.',
  manifesto: {
    lede: 'Confluence is built on a simple belief: the most interesting problems live at the junctions between disciplines. Software meets hardware, research meets product, and a good idea meets the discipline required to finish it.',
    paragraphs: [
      'The event exists to create that junction on purpose. Participants are placed in an environment designed for convergence: shared problem spaces, mentors from across the engineering community, and an emphasis on prototypes that work rather than slides that promise.',
      'Whether you arrive with a team or looking for one, Confluence is a place to test your systems thinking, try unfamiliar tools, and build with people you would not otherwise have met.'
    ],
    pillars: [
      {
        index: 'A.',
        title: 'Convergence over isolation',
        description: 'Teams form across disciplines by design.'
      },
      {
        index: 'B.',
        title: 'Systems over features',
        description: 'Judge how parts behave together.'
      },
      {
        index: 'C.',
        title: 'Working over promising',
        description: 'A running prototype outranks a deck.'
      }
    ]
  },
  registration: {
    // Official Google Forms registration URL. Configurable here or via PUBLIC_GOOGLE_FORMS_URL.
    googleFormsUrl: (import.meta.env.PUBLIC_GOOGLE_FORMS_URL as string | undefined) || 'https://forms.gle/L1exnXjZmBbikDEY6',
    isOpen: true,
    openDateText: 'October 20, 2026',
    buttonText: 'Register Now',
    unavailableText: 'Registration Closed',
    unavailableBadgeText: 'Registration Closed',
    feeText: '100% Free · Shortlisted teams receive hacker kits, meals & cloud credits',
    instructions: [
      'Form your interdisciplinary team with 2–4 members across software, embedded hardware, or research.',
      'Have team member IDs, primary university emails, and active GitHub / portfolio links ready.',
      'Select your primary problem track and draft a brief architectural abstract for review.',
      'Submit your application before the deadline to lock your spot for on-site hacking at PES University.'
    ]
  },
  eventDetails: {
    dateText: 'November 14–15, 2026',
    venueText: 'PES University (RR Campus), Tech Innovation Labs, Bengaluru',
    formatText: '36-Hour In-Person Sprint · Systems, AI & Embedded Tech',
    registrationOpensText: 'October 20, 2026',
    eligibilityText: 'Undergraduate and postgraduate students enrolled in recognized universities worldwide. Interdisciplinary teams encouraged.',
    teamSizeText: '2 to 4 Builders per Team'
  },
  socialLinks: [
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/ieee.cs.pesu',
      placeholderText: '@ieee.cs.pesu'
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/company/ieee-cs-pesu',
      placeholderText: 'IEEE Computer Society PESU'
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/IEEE-CS-PESU',
      placeholderText: 'github.com/IEEE-CS-PESU'
    }
  ],
  contact: {
    email: 'ieeecs@pes.edu',
    phone: '+91 (080) 2672-1983',
    address: 'PES University, 100 Feet Ring Road, BSK III Stage, Bengaluru, Karnataka 560085'
  },
  metadata: {
    siteTitle: 'CONFLUENCE 2026 · IEEE CS PESU · Bengaluru',
    siteDescription: 'CONFLUENCE 2026 — the flagship hackathon of IEEE Computer Society at PES University, Bengaluru. Where ideas meet engineering.',
    siteUrl: 'https://confluence-2026.vercel.app',
    ogImage: '/og-image.png',
    themeColor: '#0A0A0A'
  }
};

export const HERO_FACTS: FactItem[] = [
  {
    label: 'Event Date',
    value: EVENT_CONFIG.eventDetails.dateText,
    isPlaceholder: false
  },
  {
    label: 'Venue',
    value: EVENT_CONFIG.eventDetails.venueText,
    isPlaceholder: false
  },
  {
    label: 'Format',
    value: EVENT_CONFIG.eventDetails.formatText,
    isPlaceholder: false
  },
  {
    label: 'Registration',
    value: EVENT_CONFIG.eventDetails.registrationOpensText,
    isPlaceholder: false
  }
];

export const EVENT_METRICS: EventMetric[] = [
  {
    label: 'SPRINT DURATION',
    value: '36 Hours',
    sub: 'Continuous On-Site'
  },
  {
    label: 'PRIZE POOL',
    value: '₹1,50,000+',
    sub: 'Cash & Incubation',
    isAccent: true
  },
  {
    label: 'TEAM CAPACITY',
    value: '2–4 Builders',
    sub: 'Cross-Disciplinary'
  },
  {
    label: 'REGISTRATION FEE',
    value: '100% Free',
    sub: 'Meals & Kits Included'
  }
];

export const EVENT_PROVISIONS: EventProvision[] = [
  {
    number: '[ 01 ]',
    title: 'Hardware & IoT Testbenches',
    description: 'Oscilloscopes, STM32 & ESP32-S3 boards, soldering stations, sensors, and dedicated lab power supplies.'
  },
  {
    number: '[ 02 ]',
    title: 'Round-the-Clock Mentorship',
    description: 'Continuous technical unblocking with domain mentors across AI, distributed systems, and low-level hardware.'
  },
  {
    number: '[ 03 ]',
    title: '24/7 Hacker Sustenance',
    description: 'Continuous hot catered meals, midnight caffeine drops, cold brews, snacks, and designated quiet recharge pods.'
  },
  {
    number: '[ 04 ]',
    title: 'Auditorium Stage Showcase',
    description: 'Finalist teams pitch live working prototypes in the main auditorium before venture partners and industry judges.'
  }
];
