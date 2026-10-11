import { ExamDeadline, Task, UserPreferences, UserProgress } from '../types';

export const DEFAULT_PREFERENCES: UserPreferences = {
  targetCareer: 'Full Stack Developer',
  skillLevel: 'Intermediate',
  interests: ['Software Development', 'Data and Artificial Intelligence', 'Cloud and Emerging Technologies'],
  learningGoals: ['Land a Full-Time Job', 'Build Real-World Portfolio'],
  weeklyHoursTarget: 15
};

export const INITIAL_USER_PROGRESS: UserProgress = {
  completedModuleIds: ['fswd-mod-1', 'react-mod-1'],
  completedCourseIds: [],
  quizScores: {
    'fswd-quiz': 85
  },
  studyMinutesToday: 45,
  studyStreakDays: 5,
  lastStudyDate: new Date().toISOString().split('T')[0]
};

// Generates ISO date relative to current time
const getRelativeDate = (daysOffset: number, hour: number = 18): string => {
  const d = new Date();
  d.setDate(d.getDate() + daysOffset);
  d.setHours(hour, 0, 0, 0);
  return d.toISOString().slice(0, 16);
};

export const INITIAL_TASKS: Task[] = [
  {
    id: 'task-1',
    title: 'Complete a Full-Stack CRUD Application with React & Express',
    description: 'Build a production-grade full-stack task management module with JWT auth, PostgreSQL migrations, and centralized error handling.',
    relatedTechOrCareer: 'Full Stack Developer',
    priority: 'High',
    dueDateTime: getRelativeDate(1, 19),
    estimatedTime: '2.5 hours',
    status: 'In Progress',
    notes: 'Implement client-side query caching with TanStack Query and validate inputs with Zod.',
    learningResources: ['https://react.dev/', 'https://expressjs.com/'],
    isRecommended: true,
    createdAt: new Date(Date.now() - 86400000).toISOString()
  },
  {
    id: 'task-2',
    title: 'Solve 3 LeetCode Medium Algorithmic Problems',
    description: 'Practice the Two Pointers and Sliding Window patterns: Longest Substring Without Repeating Characters and 3Sum.',
    relatedTechOrCareer: 'Software Developer',
    priority: 'High',
    dueDateTime: getRelativeDate(2, 21),
    estimatedTime: '90 mins',
    status: 'Not Started',
    notes: 'Write time and space complexity annotations at the top of each submission.',
    learningResources: ['https://neetcode.io/'],
    isRecommended: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'task-3',
    title: 'Design Normalized Database Schema & Migrations',
    description: 'Model users, organizations, and audit logs adhering to 3NF relational normalization in PostgreSQL.',
    relatedTechOrCareer: 'Full Stack Developer',
    priority: 'Medium',
    dueDateTime: getRelativeDate(3, 17),
    estimatedTime: '2 hours',
    status: 'Not Started',
    notes: 'Verify foreign key indexes using EXPLAIN ANALYZE.',
    learningResources: ['https://www.postgresql.org/docs/'],
    isRecommended: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'task-4',
    title: 'Complete Docker Multi-Stage Build Exercise',
    description: 'Author a lightweight production Dockerfile separating the Node build compiler stage from the alpine runtime.',
    relatedTechOrCareer: 'Cloud Engineer',
    priority: 'Medium',
    dueDateTime: getRelativeDate(4, 20),
    estimatedTime: '60 mins',
    status: 'Not Started',
    notes: 'Run containers as non-root user `node` for security compliance.',
    learningResources: ['https://docs.docker.com/'],
    isRecommended: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'task-5',
    title: 'Update Portfolio Project Case Study README',
    description: 'Add an animated demonstration GIF, architecture diagram, and live deployment link to the flagship repository.',
    relatedTechOrCareer: 'Career and Professional Skills',
    priority: 'Low',
    dueDateTime: getRelativeDate(6, 18),
    estimatedTime: '45 mins',
    status: 'Completed',
    notes: 'Include Google X-Y-Z accomplishment metrics in the project description.',
    learningResources: ['https://www.makeareadme.com/'],
    isRecommended: false,
    completedAt: new Date().toISOString(),
    createdAt: new Date(Date.now() - 172800000).toISOString()
  }
];

export const INITIAL_EXAMS_DEADLINES: ExamDeadline[] = [
  {
    id: 'exam-1',
    title: 'Full Stack Web Architecture Module Assessment',
    relatedTechnology: 'Full Stack Web Development',
    date: getRelativeDate(2, 14),
    category: 'Module Assessment',
    isOfficial: false, // Internal curriculum assessment
    status: 'Upcoming',
    notes: 'Covers HTTP lifecycle, REST conventions, JWT tokens, and database indexing.',
    locationOrPlatform: 'StudyMate Interactive Testing Platform',
    createdAt: new Date().toISOString()
  },
  {
    id: 'exam-2',
    title: 'Algorithmic Live Coding Mock Interview',
    relatedTechnology: 'Data Structures and Algorithms',
    date: getRelativeDate(4, 18),
    category: 'Practice Test & Mock Interview',
    isOfficial: false,
    status: 'Upcoming',
    notes: '45-minute timed simulation covering graph traversals and sliding window problems.',
    locationOrPlatform: 'Peer Mock Interview on Pramp',
    createdAt: new Date().toISOString()
  },
  {
    id: 'exam-3',
    title: 'E-Commerce Full Stack Project Submission',
    relatedTechnology: 'React.js & Node.js',
    date: getRelativeDate(7, 23),
    category: 'Coding Challenge & Submission',
    isOfficial: false,
    status: 'Upcoming',
    notes: 'Final capstone milestone code review with automated CI test verification.',
    locationOrPlatform: 'GitHub Classroom / Portfolio Milestone',
    createdAt: new Date().toISOString()
  },
  {
    id: 'exam-4',
    title: 'AWS Certified Developer - Associate (DVA-C02)',
    relatedTechnology: 'AWS Fundamentals & Cloud Computing',
    date: getRelativeDate(21, 10),
    category: 'Certification Exam',
    isOfficial: true, // Official user-entered test appointment
    status: 'Upcoming',
    notes: 'Official testing appointment scheduled with Pearson VUE. Voucher registered.',
    locationOrPlatform: 'Pearson VUE Testing Center (Official Schedule)',
    createdAt: new Date().toISOString()
  },
  {
    id: 'exam-5',
    title: 'University Database Systems Midterm Examination',
    relatedTechnology: 'SQL and Database Management',
    date: getRelativeDate(12, 9),
    category: 'College Exam',
    isOfficial: true, // Official college exam date entered by the student
    status: 'Upcoming',
    notes: 'Covers Relational Algebra, Normalization (1NF to BCNF), and ACID transaction concurrency.',
    locationOrPlatform: 'University Academic Hall Room 304',
    createdAt: new Date().toISOString()
  },
  {
    id: 'exam-6',
    title: 'Fintech Senior Frontend Engineer Technical Screen',
    relatedTechnology: 'React.js & TypeScript',
    date: getRelativeDate(5, 15),
    category: 'Job Application & Interview',
    isOfficial: true, // Official job interview scheduled by recruiter
    status: 'Upcoming',
    notes: '60-minute technical interview covering React performance, custom hooks, and state architecture.',
    locationOrPlatform: 'Google Meet (Recruiter Scheduled)',
    createdAt: new Date().toISOString()
  }
];
