import type { FaqItem } from '../types';

export const FAQ_LIST: FaqItem[] = [
  // 1. Eligibility
  {
    id: 'faq-eligibility',
    index: 'Q.01',
    category: 'Eligibility',
    question: 'Who is eligible to participate in Confluence 2026?',
    answerText: 'Undergraduate and postgraduate students, researchers, and early engineers from accredited institutions are expected to be eligible. Cross-institutional teams are traditionally welcomed.',
    placeholderDetail: '[OFFICIAL ELIGIBILITY REQUIREMENTS TBA]',
    defaultOpen: true
  },
  // 2. Team Size
  {
    id: 'faq-team-size',
    index: 'Q.02',
    category: 'Eligibility',
    question: 'What is the required team size?',
    answerText: 'Teams must register collectively through the team leader. Individual participants will have access to a team-formation discord / matchmaking channel before the hacking window.',
    placeholderDetail: '[MIN–MAX TEAM SIZE TBA (TYPICALLY 2–4 MEMBERS)]'
  },
  // 3. Registration
  {
    id: 'faq-registration',
    index: 'Q.03',
    category: 'Registration',
    question: 'How and when does registration open?',
    answerText: 'Registration will be hosted through an official portal linked directly from this website. The portal opening date and screening process will be announced across IEEE CS PESU channels.',
    placeholderDetail: '[REGISTRATION PORTAL LINK & ADMISSION TIMELINES TBA]'
  },
  {
    id: 'faq-fees',
    index: 'Q.04',
    category: 'Registration',
    question: 'Is there a registration fee or deposit?',
    answerText: 'Official fee policy, including any subsidized IEEE member rates or refundable attendance deposits, is under final review by the committee.',
    placeholderDetail: '[FEE & DEPOSIT POLICY TBA]'
  },
  // 4. Themes & Problem Statements
  {
    id: 'faq-themes',
    index: 'Q.05',
    category: 'Themes & Tracks',
    question: 'When will the official problem statements be unveiled?',
    answerText: 'Detailed theme briefs and hardware track requirements will be distributed at the start of the event. Participants may prepare foundational toolchains but cannot submit pre-built repositories.',
    placeholderDetail: '[THEME RELEASE SCHEDULE & BRIEFING FORMAT TBA]'
  },
  // 5. Submission Requirements
  {
    id: 'faq-submissions',
    index: 'Q.06',
    category: 'Submissions',
    question: 'What are the required deliverables for final evaluation?',
    answerText: 'Teams must provide access to an open-source Git repository containing all source code created during the hacking window, deployment links where applicable, and participate in a live demonstration.',
    placeholderDetail: '[REPOSITORY COMMIT POLICY & DEMO TIME LIMITS TBA]'
  },
  // 6. Event Format
  {
    id: 'faq-format',
    index: 'Q.07',
    category: 'Format & Logistics',
    question: 'What is the format and duration of the hackathon?',
    answerText: 'Confluence 2026 is planned as an in-person, immersive hackathon hosted on the PES University campus in Bengaluru, featuring continuous mentoring checkpoints, food, and rest zones.',
    placeholderDetail: '[EXACT DURATION (E.G. 24H OR 36H) & CAMPUS VENUE TBA]'
  },
  // 7. Participation Rules & IP
  {
    id: 'faq-rules-ip',
    index: 'Q.08',
    category: 'Rules & IP',
    question: 'Who owns the intellectual property created during the event?',
    answerText: 'All intellectual property developed by participants during Confluence remains 100% owned by the respective team members. Neither PES University nor IEEE CS claims ownership of your projects.',
    placeholderDetail: '[OFFICIAL CODE OF CONDUCT & IP POLICY CLAUSES TBA]'
  },
  {
    id: 'faq-hardware',
    index: 'Q.09',
    category: 'Rules & IP',
    question: 'Can teams bring their own hardware or microcontrollers?',
    answerText: 'Teams competing in cyber-physical or hardware tracks will be permitted to bring approved developer kits, sensors, and components, subject to lab safety guidelines.',
    placeholderDetail: '[PERMITTED HARDWARE LIST & ON-SITE LAB TOOLS TBA]'
  }
];

export const FAQ_CATEGORIES: string[] = [
  'All',
  'Eligibility',
  'Registration',
  'Themes & Tracks',
  'Submissions',
  'Format & Logistics',
  'Rules & IP'
];
