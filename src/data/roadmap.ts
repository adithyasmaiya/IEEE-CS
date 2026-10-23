import type { RoadmapMilestone, RoadmapCheckpoint } from '../types';

export const ROADMAP_MILESTONES: RoadmapMilestone[] = [
  {
    number: '01',
    phase: 'Phase · Applications',
    title: 'Admissions Open',
    description: 'Teams of 2–4 submit their credentials, track preferences, and project proposals.',
    date: 'Oct 20, 2026',
    isPlaceholderDate: false,
    isActive: true
  },
  {
    number: '02',
    phase: 'Phase · Shortlisting',
    title: 'Cohort Announcement',
    description: 'Shortlisted teams announced; problem track deep-dives & mentor matching initiated.',
    date: 'Nov 05, 2026',
    isPlaceholderDate: false
  },
  {
    number: '03',
    phase: 'Phase · 24h Sprint',
    title: 'Hacking Kickoff',
    description: '24-hour sprint begins on-site at PES University. Hardware labs open & mentor rounds run.',
    date: 'Nov 14, 2026 · 09:00 AM',
    isPlaceholderDate: false
  },
  {
    number: '04',
    phase: 'Phase · Git Freeze',
    title: 'Code & Prototype Lock',
    description: 'Final commit hashes locked, repositories archived, and live demo sandboxes verified.',
    date: 'Nov 15, 2026 · 09:00 AM',
    isPlaceholderDate: false
  },
  {
    number: '05',
    phase: 'Phase · Stage Demos',
    title: 'Jury Evaluation & Awards',
    description: 'Finalist teams present live prototypes before industry judges, followed by the grand felicitation.',
    date: 'Nov 15, 2026 · 11:30 AM',
    isPlaceholderDate: false
  }
];

export const ROADMAP_STATUS = {
  note: 'Official 24-hour hackathon schedule verified by IEEE Computer Society PES University organizing committee.',
  statusText: 'SCHEDULE CONFIRMED'
};

export const ROADMAP_CHECKPOINTS: RoadmapCheckpoint[] = [
  {
    label: 'Checkpoint 01',
    title: 'Architecture Review',
    description: 'Teams review system diagrams, proposed technology stacks, and hardware/software interfaces with domain mentors.'
  },
  {
    label: 'Checkpoint 02',
    title: 'Mid-Build Sanity',
    description: 'A fast sanity check on working code, resolving roadblocks, boundary stress points, and telemetry integration.'
  },
  {
    label: 'Checkpoint 03',
    title: 'Code Freeze & Demo',
    description: 'Repositories lock and teams prepare live prototype demonstrations for technical judges and peers.'
  }
];
