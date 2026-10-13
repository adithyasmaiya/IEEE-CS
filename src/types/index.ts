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
  details?: string[];
  systemFocus?: string;
  criteriaPlaceholder?: string;
}

export interface RoadmapMilestone {
  number: string;
  phase: string;
  title: string;
  description: string;
  date: string;
  isPlaceholderDate: boolean;
  status: 'completed' | 'active' | 'upcoming';
  isActive?: boolean;
  deliverables?: string[];
  checkpoint?: string;
}

export type FaqCategory =
  | 'General'
  | 'Eligibility'
  | 'Registration'
  | 'Themes & Tracks'
  | 'Submissions'
  | 'Format & Logistics'
  | 'Rules & IP';

export interface FaqItem {
  id: string;
  index: string;
  category: FaqCategory;
  question: string;
  answerText: string;
  placeholderDetail?: string;
  defaultOpen?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  handleOrText: string;
  isPlaceholder: boolean;
}

export interface EventConfig {
  name: string;
  edition: string;
  organizer: string;
  university: string;
  campus: string;
  city: string;
  coordinates: string;
  tagline: string;
  headline: string;
  manifesto: {
    headline: string;
    subheadline: string;
    paragraphs: string[];
    pillars: ManifestoPillar[];
  };
  registration: {
    url: string; // Internal route or external link
    googleFormsUrl?: string; // Centralized Google Forms link when announced
    isOpen: boolean;
    openDateText: string;
    buttonText: string;
    feeText: string;
    instructions: string[];
  };
  eventDetails: {
    dateText: string;
    venueText: string;
    formatText: string;
    eligibilityText: string;
    teamSizeText: string;
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
