import type { EventConfig, FactItem } from '../types';

export const EVENT_CONFIG: EventConfig = {
  name: 'CONFLUENCE',
  edition: '2026',
  organizer: 'IEEE Computer Society',
  university: 'PES University',
  campus: 'RR Campus & Electronic City Campus',
  city: 'Bengaluru',
  coordinates: '12.9716° N / 77.5946° E',
  tagline: 'Where ideas, disciplines and engineers converge into something that has never existed before.',
  headline: 'Where ideas meet engineering.',
  manifesto: {
    headline: 'Ideas are cheap. Engineering is where they meet the world.',
    subheadline: 'Confluence is built on a simple belief: the most interesting problems live at the junctions between disciplines. Software meets hardware, research meets product, and a good idea meets the discipline required to finish it.',
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
    // Single configurable registration routing
    // When an official Google Form or external link is provided, set googleFormsUrl below.
    // If googleFormsUrl is empty, /register/ displays an honest pending-announcement status board.
    url: '/register/',
    googleFormsUrl: '', // Editable official Google Form URL placeholder e.g. 'https://forms.gle/...'
    isOpen: false,
    openDateText: '[DATE TBA]',
    buttonText: 'Register Now',
    feeText: '[REGISTRATION LINK & FEE DETAILS TBA]',
    instructions: [
      'Application requires team lead details, institutional affiliation, and GitHub/portfolio profiles.',
      'Teams must select a preferred problem track or declare entry into the open innovation category.',
      'Official confirmations and on-site badge credentials will be distributed via IEEE CS PESU communication channels.'
    ]
  },
  eventDetails: {
    dateText: '[DATE TBA]',
    venueText: '[VENUE TBA]',
    formatText: '[FORMAT TBA]',
    eligibilityText: '[ELIGIBILITY REQUIREMENTS TBA]',
    teamSizeText: '[MIN–MAX TEAM SIZE TBA]'
  },
  socialLinks: [
    {
      platform: 'Instagram',
      url: '#',
      handleOrText: '[LINK TBA]',
      isPlaceholder: true
    },
    {
      platform: 'LinkedIn',
      url: '#',
      handleOrText: '[LINK TBA]',
      isPlaceholder: true
    },
    {
      platform: 'GitHub',
      url: '#',
      handleOrText: '[LINK TBA]',
      isPlaceholder: true
    }
  ],
  contact: {
    email: '[EMAIL TBA]',
    phone: '[PHONE TBA]',
    address: '[ADDRESS TBA]'
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
    isPlaceholder: true
  },
  {
    label: 'Venue',
    value: EVENT_CONFIG.eventDetails.venueText,
    isPlaceholder: true
  },
  {
    label: 'Format',
    value: EVENT_CONFIG.eventDetails.formatText,
    isPlaceholder: true
  },
  {
    label: 'Registration',
    value: `[OPENS ${EVENT_CONFIG.registration.openDateText}]`,
    isPlaceholder: true
  }
];
