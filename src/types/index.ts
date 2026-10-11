export type CourseCategory =
  | 'Software Development'
  | 'Data and Artificial Intelligence'
  | 'UI/UX and Design'
  | 'Digital Marketing'
  | 'Cloud and Emerging Technologies'
  | 'Career and Professional Skills';

export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export type TargetCareer =
  | 'Full Stack Developer'
  | 'Python Full Stack Developer'
  | 'UI/UX Designer'
  | 'Data Scientist'
  | 'Data Analyst'
  | 'AI/ML Engineer'
  | 'Digital Marketing Specialist'
  | 'Cloud Engineer'
  | 'Cybersecurity Analyst'
  | 'Software Developer';

export type LearningGoal =
  | 'Land a Full-Time Job'
  | 'Secure an Internship'
  | 'Career Transition / Upskilling'
  | 'College Exams & Academics'
  | 'Industry Certification'
  | 'Build Real-World Portfolio';

export interface UserPreferences {
  targetCareer: TargetCareer;
  skillLevel: SkillLevel;
  interests: string[];
  learningGoals: LearningGoal[];
  weeklyHoursTarget: number;
}

export interface LearningResource {
  title: string;
  type: 'doc' | 'guide' | 'video' | 'cheatsheet';
  url: string;
}

export interface Module {
  id: string;
  title: string;
  level: SkillLevel;
  estimatedMinutes: number;
  overview: string;
  topics: string[];
  stepByStepExplanation: string;
  handsOnExercise: {
    title: string;
    instructions: string;
    taskSnippet?: string;
    solutionTip?: string;
  };
  practicalProject?: {
    title: string;
    objective: string;
    deliverable: string;
  };
  learningResources: LearningResource[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface CourseQuiz {
  id: string;
  title: string;
  description: string;
  passingScore: number;
  questions: QuizQuestion[];
}

export interface Course {
  id: string;
  title: string;
  category: CourseCategory;
  summary: string;
  skillLevel: SkillLevel;
  totalDurationHours: number;
  learningObjectives: string[];
  modules: Module[];
  quiz: CourseQuiz;
  relatedCareers: string[];
  tags: string[];
}

export type TaskPriority = 'High' | 'Medium' | 'Low';
export type TaskStatus = 'Not Started' | 'In Progress' | 'Completed';

export interface Task {
  id: string;
  title: string;
  description: string;
  relatedTechOrCareer: string;
  priority: TaskPriority;
  dueDateTime: string; // YYYY-MM-DDTHH:mm
  estimatedTime: string;
  status: TaskStatus;
  notes?: string;
  learningResources?: string[];
  isRecommended?: boolean;
  completedAt?: string;
  createdAt: string;
}

export type ExamCategory =
  | 'Course Quiz'
  | 'Module Assessment'
  | 'Practice Test & Mock Interview'
  | 'Coding Challenge & Submission'
  | 'UI/UX Portfolio Deadline'
  | 'Marketing Project Deadline'
  | 'Certification Exam'
  | 'College Exam'
  | 'Job Application & Interview';

export type ExamStatus = 'Upcoming' | 'In Progress' | 'Completed' | 'Overdue';

export interface ExamDeadline {
  id: string;
  title: string;
  relatedTechnology: string;
  date: string; // YYYY-MM-DDTHH:mm
  category: ExamCategory;
  isOfficial: boolean; // Distinction between official schedules and user practice
  status: ExamStatus;
  notes?: string;
  locationOrPlatform?: string;
  createdAt: string;
}

export interface UserProgress {
  completedModuleIds: string[];
  completedCourseIds: string[];
  quizScores: Record<string, number>;
  studyMinutesToday: number;
  studyStreakDays: number;
  lastStudyDate: string;
}
