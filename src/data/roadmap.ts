import type { RoadmapMilestone } from '../types';

export const ROADMAP_MILESTONES: RoadmapMilestone[] = [
  {
    number: '01',
    phase: 'Phase 01 · Announcement',
    title: 'Registration Opens',
    description: 'Portal opens for team formations, track declarations, and participant verification across colleges and universities.',
    date: '[DATE TBA]',
    isPlaceholderDate: true,
    status: 'upcoming',
    deliverables: [
      'Team Lead registrations & member invites',
      'Track interest indication',
      'Confirmation emails dispatched upon review'
    ],
    checkpoint: 'Portal Status: Staged for deployment'
  },
  {
    number: '02',
    phase: 'Phase 02 · Briefing',
    title: 'Problem Statements Released',
    description: 'Detailed technical briefs, sponsor challenge tracks, and hardware constraints are officially unlocked for all admitted teams.',
    date: '[DATE TBA]',
    isPlaceholderDate: true,
    status: 'upcoming',
    deliverables: [
      'Problem statement documentation unlocked',
      'Virtual technical Q&A briefing with jury',
      'Dataset access and API credentials distributed'
    ],
    checkpoint: 'Briefing Stage: Locked until schedule confirmation'
  },
  {
    number: '03',
    phase: 'Phase 03 · Execution',
    title: 'Hacking Window & Checkpoints',
    description: 'Intense on-site building window with scheduled technical reviews, architecture checkpoints, and cross-discipline mentoring.',
    date: '[DATE TBA]',
    isPlaceholderDate: true,
    status: 'upcoming',
    deliverables: [
      'Check-in 1: Architecture review with domain mentors',
      'Check-in 2: Running prototype sanity check',
      'Hardware lab access & testing benches open'
    ],
    checkpoint: 'Venue Stage: PES University Campus [VENUE TBA]'
  },
  {
    number: '04',
    phase: 'Phase 04 · Freeze',
    title: 'Code Freeze & Submission',
    description: 'All code repositories, deployment links, readmes, and architecture diagrams must be locked into the submission portal.',
    date: '[DATE TBA]',
    isPlaceholderDate: true,
    status: 'upcoming',
    deliverables: [
      'Public GitHub / GitLab repository commit timestamp lock',
      'Working demo deployment link verification',
      '3-minute architecture walkthrough video / documentation deck'
    ],
    checkpoint: 'Lock Window: Strict submission deadline'
  },
  {
    number: '05',
    phase: 'Phase 05 · Evaluation',
    title: 'Live Demonstrations & Awards',
    description: 'Top teams present live to industry leaders, IEEE fellows, and PES University faculty, followed by the awards ceremony.',
    date: '[DATE TBA]',
    isPlaceholderDate: true,
    status: 'upcoming',
    deliverables: [
      'In-person live code execution before jury',
      'Technical stress testing and Q&A defense',
      'Valedictory ceremony and prize distribution'
    ],
    checkpoint: 'Auditorium Stage: Open to participants and guests'
  }
];

export const ROADMAP_STATUS = {
  note: 'All milestone dates, check-in windows, and timings are placeholders pending formal release by the IEEE CS PESU organizing board. Dates will be finalized before registrations commence.',
  statusText: '[SCHEDULE TO BE CONFIRMED]'
};
