export interface NavItem {
  label: string;
  href: string;
  index: string;
}

export interface FactItem {
  label: string;
  value: string;
  isPlaceholder?: boolean;
}

export interface ManifestoPillar {
  index: string;
  title: string;
  description: string;
}

export type ThemeSvgShape = 'concentric' | 'flow' | 'triangle' | 'squares';

export interface ThemeItem {
  id: string;
  number: string;
  title: string;
  isPlaceholderTitle: boolean;
  description: string;
  trackTag: string;
  svgShape: ThemeSvgShape;
  focusAreas?: string[];
}

export interface RoadmapMilestone {
  number: string;
  phase: string;
  title: string;
  description: string;
  date: string;
  isPlaceholderDate: boolean;
  isActive?: boolean;
  details?: string[];
}

export interface FaqItem {
  id: string;
  index: string;
  question: string;
  answerText: string;
  placeholderDetail?: string;
  defaultOpen?: boolean;
  category?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  placeholderText?: string;
}

export interface EventConfig {
  name: string;
  edition: string;
  organizer: string;
  university: string;
  city: string;
  coordinates: string;
  tagline: string;
  manifesto: {
    paragraphs: string[];
    pillars: ManifestoPillar[];
  };
  registration: {
    googleFormsUrl: string;
    isOpen: boolean;
    openDateText: string;
    buttonText: string;
    unavailableText: string;
    unavailableBadgeText: string;
    feeText?: string;
    instructions?: string[];
  };
  eventDetails: {
    dateText: string;
    venueText: string;
    formatText: string;
    registrationOpensText: string;
    eligibilityText?: string;
    teamSizeText?: string;
  };
  socialLinks: SocialLink[];
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  metadata: {
    siteTitle: string;
    siteDescription: string;
    siteUrl: string;
    ogImage: string;
    themeColor: string;
  };
}
