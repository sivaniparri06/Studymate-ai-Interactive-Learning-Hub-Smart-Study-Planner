import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  UserPreferences,
  UserProgress,
  Task,
  ExamDeadline,
  TargetCareer,
  Course,
  TaskPriority,
  TaskStatus,
  ExamCategory
} from '../types';
import { DEFAULT_PREFERENCES, INITIAL_USER_PROGRESS, INITIAL_TASKS, INITIAL_EXAMS_DEADLINES } from '../data/seedData';
import { ALL_COURSES, getCourseById } from '../data/coursesData';
import { CAREER_ROADMAPS } from '../data/careerRoadmaps';

interface StudyContextType {
  preferences: UserPreferences;
  setPreferences: React.Dispatch<React.SetStateAction<UserPreferences>>;
  updateTargetCareer: (career: TargetCareer) => void;
  updatePreferences: (newPrefs: Partial<UserPreferences>) => void;

  userProgress: UserProgress;
  toggleModuleCompletion: (moduleId: string, courseId: string) => void;
  recordQuizScore: (quizId: string, score: number) => void;
  logStudyMinutes: (minutes: number) => void;

  tasks: Task[];
  addTask: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  toggleTaskStatus: (id: string) => void;
  changeTaskPriority: (id: string, newPriority: TaskPriority) => void;
  generateCareerTasks: (career?: TargetCareer) => void;

  examsDeadlines: ExamDeadline[];
  addExamDeadline: (exam: Omit<ExamDeadline, 'id' | 'createdAt'>) => void;
  updateExamDeadline: (id: string, updates: Partial<ExamDeadline>) => void;
  deleteExamDeadline: (id: string) => void;
  toggleExamStatus: (id: string) => void;

  activeCourse: Course | null;
  openCourseDetail: (courseId: string) => void;
  closeCourseDetail: () => void;

  isPreferencesModalOpen: boolean;
  setIsPreferencesModalOpen: (open: boolean) => void;

  isStudyTimerOpen: boolean;
  setIsStudyTimerOpen: (open: boolean) => void;

  recommendedCourses: Course[];
  activeCareerRoadmap: typeof CAREER_ROADMAPS[TargetCareer];
}

const StudyContext = createContext<StudyContextType | undefined>(undefined);

const STORAGE_KEYS = {
  PREFS: 'studymate_preferences_v2',
  PROGRESS: 'studymate_progress_v2',
  TASKS: 'studymate_tasks_v2',
  EXAMS: 'studymate_exams_v2'
};

export const StudyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Preferences
  const [preferences, setPreferences] = useState<UserPreferences>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.PREFS);
      return stored ? JSON.parse(stored) : DEFAULT_PREFERENCES;
    } catch {
      return DEFAULT_PREFERENCES;
    }
  });

  // 2. Progress
  const [userProgress, setUserProgress] = useState<UserProgress>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.PROGRESS);
      return stored ? JSON.parse(stored) : INITIAL_USER_PROGRESS;
    } catch {
      return INITIAL_USER_PROGRESS;
    }
  });

  // 3. Tasks
  const [tasks, setTasks] = useState<Task[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.TASKS);
      return stored ? JSON.parse(stored) : INITIAL_TASKS;
    } catch {
      return INITIAL_TASKS;
    }
  });

  // 4. Exams & Deadlines
  const [examsDeadlines, setExamsDeadlines] = useState<ExamDeadline[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.EXAMS);
      return stored ? JSON.parse(stored) : INITIAL_EXAMS_DEADLINES;
    } catch {
      return INITIAL_EXAMS_DEADLINES;
    }
  });

  // Active course detail
  const [activeCourseId, setActiveCourseId] = useState<string | null>(null);
  const [isPreferencesModalOpen, setIsPreferencesModalOpen] = useState(false);
  const [isStudyTimerOpen, setIsStudyTimerOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PREFS, JSON.stringify(preferences));
    } catch (e) {
      console.error('Failed to save preferences to localStorage', e);
    }
  }, [preferences]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(userProgress));
    } catch (e) {
      console.error('Failed to save progress to localStorage', e);
    }
  }, [userProgress]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
    } catch (e) {
      console.error('Failed to save tasks to localStorage', e);
    }
  }, [tasks]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.EXAMS, JSON.stringify(examsDeadlines));
    } catch (e) {
      console.error('Failed to save exams to localStorage', e);
    }
  }, [examsDeadlines]);

  // Derived Career Roadmap & Recommendations
  const activeCareerRoadmap = CAREER_ROADMAPS[preferences.targetCareer] || CAREER_ROADMAPS['Full Stack Developer'];

  const recommendedCourses = ALL_COURSES.filter(course =>
    activeCareerRoadmap.primaryCourseIds.includes(course.id) ||
    activeCareerRoadmap.secondaryCourseIds.includes(course.id) ||
    course.relatedCareers.includes(preferences.targetCareer)
  );

  // Career update
  const updateTargetCareer = (career: TargetCareer) => {
    setPreferences(prev => ({
      ...prev,
      targetCareer: career
    }));
  };

  const updatePreferences = (newPrefs: Partial<UserPreferences>) => {
    setPreferences(prev => ({
      ...prev,
      ...newPrefs
    }));
  };

  // Module completion toggle
  const toggleModuleCompletion = (moduleId: string, courseId: string) => {
    setUserProgress(prev => {
      const isCompleted = prev.completedModuleIds.includes(moduleId);
      const updatedModuleIds = isCompleted
        ? prev.completedModuleIds.filter(id => id !== moduleId)
        : [...prev.completedModuleIds, moduleId];

      // Check if all modules in course are completed
      const course = getCourseById(courseId);
      let updatedCourseIds = [...prev.completedCourseIds];
      if (course) {
        const allModulesDone = course.modules.every(m => updatedModuleIds.includes(m.id));
        if (allModulesDone && !updatedCourseIds.includes(courseId)) {
          updatedCourseIds.push(courseId);
        } else if (!allModulesDone && updatedCourseIds.includes(courseId)) {
          updatedCourseIds = updatedCourseIds.filter(id => id !== courseId);
        }
      }

      return {
        ...prev,
        completedModuleIds: updatedModuleIds,
        completedCourseIds: updatedCourseIds
      };
    });
  };

  const recordQuizScore = (quizId: string, score: number) => {
    setUserProgress(prev => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [quizId]: score
      }
    }));
  };

  const logStudyMinutes = (minutes: number) => {
    setUserProgress(prev => {
      const today = new Date().toISOString().split('T')[0];
      const isNewDay = prev.lastStudyDate !== today;
      const newStreak = isNewDay ? prev.studyStreakDays + 1 : prev.studyStreakDays;
      const todayMinutes = isNewDay ? minutes : prev.studyMinutesToday + minutes;

      return {
        ...prev,
        studyMinutesToday: todayMinutes,
        studyStreakDays: Math.max(1, newStreak),
        lastStudyDate: today
      };
    });
  };

  // Task Handlers
  const addTask = (newTask: Omit<Task, 'id' | 'createdAt'>) => {
    const task: Task = {
      ...newTask,
      id: `task-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      createdAt: new Date().toISOString()
    };
    setTasks(prev => [task, ...prev]);
  };

  const updateTask = (id: string, updates: Partial<Task>) => {
    setTasks(prev =>
      prev.map(task => {
        if (task.id === id) {
          const isMarkingComplete = updates.status === 'Completed' && task.status !== 'Completed';
          return {
            ...task,
            ...updates,
            completedAt: isMarkingComplete ? new Date().toISOString() : updates.status !== 'Completed' ? undefined : task.completedAt
          };
        }
        return task;
      })
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const toggleTaskStatus = (id: string) => {
    setTasks(prev =>
      prev.map(task => {
        if (task.id === id) {
          const nextStatus: TaskStatus =
            task.status === 'Completed'
              ? 'Not Started'
              : task.status === 'Not Started'
              ? 'In Progress'
              : 'Completed';
          return {
            ...task,
            status: nextStatus,
            completedAt: nextStatus === 'Completed' ? new Date().toISOString() : undefined
          };
        }
        return task;
      })
    );
  };

  const changeTaskPriority = (id: string, newPriority: TaskPriority) => {
    updateTask(id, { priority: newPriority });
  };

  const generateCareerTasks = (career?: TargetCareer) => {
    const target = career || preferences.targetCareer;
    const roadmap = CAREER_ROADMAPS[target];
    if (!roadmap) return;

    const newTasks: Task[] = roadmap.recommendedTasks.map(t => ({
      ...t,
      id: `task-rec-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      status: 'Not Started' as TaskStatus,
      createdAt: new Date().toISOString()
    }));

    setTasks(prev => {
      // Filter out tasks with identical title to prevent exact duplicate spamming
      const existingTitles = new Set(prev.map(p => p.title.toLowerCase()));
      const filtered = newTasks.filter(nt => !existingTitles.has(nt.title.toLowerCase()));
      return [...filtered, ...prev];
    });
  };

  // Exam & Deadline Handlers
  const addExamDeadline = (newExam: Omit<ExamDeadline, 'id' | 'createdAt'>) => {
    const exam: ExamDeadline = {
      ...newExam,
      id: `exam-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      createdAt: new Date().toISOString()
    };
    setExamsDeadlines(prev => [exam, ...prev]);
  };

  const updateExamDeadline = (id: string, updates: Partial<ExamDeadline>) => {
    setExamsDeadlines(prev =>
      prev.map(e => (e.id === id ? { ...e, ...updates } : e))
    );
  };

  const deleteExamDeadline = (id: string) => {
    setExamsDeadlines(prev => prev.filter(e => e.id !== id));
  };

  const toggleExamStatus = (id: string) => {
    setExamsDeadlines(prev =>
      prev.map(e => {
        if (e.id === id) {
          const nextStatus = e.status === 'Completed' ? 'Upcoming' : 'Completed';
          return { ...e, status: nextStatus };
        }
        return e;
      })
    );
  };

  // Active course
  const activeCourse = activeCourseId ? getCourseById(activeCourseId) || null : null;
  const openCourseDetail = (courseId: string) => setActiveCourseId(courseId);
  const closeCourseDetail = () => setActiveCourseId(null);

  return (
    <StudyContext.Provider
      value={{
        preferences,
        setPreferences,
        updateTargetCareer,
        updatePreferences,

        userProgress,
        toggleModuleCompletion,
        recordQuizScore,
        logStudyMinutes,

        tasks,
        addTask,
        updateTask,
        deleteTask,
        toggleTaskStatus,
        changeTaskPriority,
        generateCareerTasks,

        examsDeadlines,
        addExamDeadline,
        updateExamDeadline,
        deleteExamDeadline,
        toggleExamStatus,

        activeCourse,
        openCourseDetail,
        closeCourseDetail,

        isPreferencesModalOpen,
        setIsPreferencesModalOpen,

        isStudyTimerOpen,
        setIsStudyTimerOpen,

        recommendedCourses,
        activeCareerRoadmap
      }}
    >
      {children}
    </StudyContext.Provider>
  );
};

export const useStudy = () => {
  const context = useContext(StudyContext);
  if (!context) {
    throw new Error('useStudy must be used within a StudyProvider');
  }
  return context;
};
