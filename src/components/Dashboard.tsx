import React from 'react';
import { useStudy } from '../context/StudyContext';
import { ALL_COURSES, getCourseById } from '../data/coursesData';
import { formatDateTime, formatRelativeCountdown, isDateOverdue, isDateWithinDays } from '../utils/dateUtils';
import {
  Compass,
  CheckSquare,
  Clock,
  Calendar,
  Flame,
  ArrowRight,
  BookOpen,
  SlidersHorizontal,
  Plus,
  ShieldCheck,
  AlertTriangle,
  Circle,
  CheckCircle2,
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface DashboardProps {
  onNavigate: (tab: 'dashboard' | 'learning-hub' | 'tasks' | 'exams') => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const {
    preferences,
    userProgress,
    tasks,
    toggleTaskStatus,
    examsDeadlines,
    activeCareerRoadmap,
    openCourseDetail,
    setIsPreferencesModalOpen,
    setIsStudyTimerOpen
  } = useStudy();

  // 1. Task calculations
  const totalTasksCount = tasks.length;
  const completedTasksCount = tasks.filter(t => t.status === 'Completed').length;
  const pendingTasksCount = totalTasksCount - completedTasksCount;
  const taskCompletionRate = totalTasksCount > 0 ? Math.round((completedTasksCount / totalTasksCount) * 100) : 0;

  const overdueTasks = tasks.filter(t => t.status !== 'Completed' && isDateOverdue(t.dueDateTime));
  const dueSoonTasks = tasks.filter(
    t => t.status !== 'Completed' && isDateWithinDays(t.dueDateTime, 2) && !isDateOverdue(t.dueDateTime)
  );
  const highPriorityTasks = tasks.filter(t => t.priority === 'High' && t.status !== 'Completed');

  // 2. Exam calculations
  const upcomingExams = examsDeadlines
    .filter(e => e.status !== 'Completed')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 4);

  // 3. Career Roadmaps progress
  const primaryCourses = activeCareerRoadmap.primaryCourseIds
    .map(id => getCourseById(id))
    .filter(Boolean) as typeof ALL_COURSES;

  let totalPrimaryModules = 0;
  let completedPrimaryModules = 0;

  primaryCourses.forEach(c => {
    totalPrimaryModules += c.modules.length;
    completedPrimaryModules += c.modules.filter(m =>
      userProgress.completedModuleIds.includes(m.id)
    ).length;
  });

  const careerProgressPercent = totalPrimaryModules > 0
    ? Math.round((completedPrimaryModules / totalPrimaryModules) * 100)
    : 0;

  // 4. Recommended next learning activity: find first incomplete module in primary courses
  let nextRecommendedCourse = primaryCourses[0] || ALL_COURSES[0];
  let nextRecommendedModule = nextRecommendedCourse.modules[0];
  let isModuleInProgress = false;

  for (const c of primaryCourses) {
    const incompleteMod = c.modules.find(m => !userProgress.completedModuleIds.includes(m.id));
    if (incompleteMod) {
      nextRecommendedCourse = c;
      nextRecommendedModule = incompleteMod;
      isModuleInProgress = c.modules.some(m => userProgress.completedModuleIds.includes(m.id));
      break;
    }
  }

  // Calculate recommendation course progress
  const recCourseTotalMods = nextRecommendedCourse.modules.length;
  const recCourseCompletedMods = nextRecommendedCourse.modules.filter(m =>
    userProgress.completedModuleIds.includes(m.id)
  ).length;
  const recCoursePercent = recCourseTotalMods > 0
    ? Math.round((recCourseCompletedMods / recCourseTotalMods) * 100)
    : 0;

  // Study time daily goal calculation (e.g. weekly hours / 6 days converted to mins)
  const dailyTargetMinutes = Math.max(30, Math.round((preferences.weeklyHoursTarget * 60) / 6));
  const dailyStudyProgressPct = Math.min(100, Math.round((userProgress.studyMinutesToday / dailyTargetMinutes) * 100));

  return (
    <div className="space-y-6">
      {/* OVERDUE ALERT BANNER */}
      {overdueTasks.length > 0 && (
        <div className="p-3.5 sm:p-4 rounded-xl bg-rose-50/90 border border-rose-200/80 flex items-center justify-between gap-3 text-rose-950">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-rose-900">
                {overdueTasks.length} Overdue Task{overdueTasks.length > 1 ? 's' : ''} Need Attention
              </div>
              <p className="text-xs text-rose-700/90 truncate">
                &ldquo;{overdueTasks[0].title}&rdquo; is past its due date. Complete it to stay on track.
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('tasks')}
            className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-lg shrink-0 transition-colors shadow-xs"
          >
            Review Tasks
          </button>
        </div>
      )}

      {/* 1. DASHBOARD OVERVIEW: 5 COMPACT UNIFORM SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
        {/* Card 1: Curriculum Progress */}
        <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col justify-between h-[148px]">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
              <span className="font-semibold text-slate-600 text-xs">Curriculum</span>
              <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Compass className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-bold font-mono text-slate-900 tracking-tight">
                {careerProgressPercent}%
              </span>
              <span className="text-[11px] text-slate-500 font-medium">completed</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1 truncate">
              {completedPrimaryModules} of {totalPrimaryModules} modules done
            </p>
          </div>

          <div className="w-full">
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                style={{ width: `${careerProgressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Card 2: Priority Tasks */}
        <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col justify-between h-[148px]">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
              <span className="font-semibold text-slate-600 text-xs">Priority Tasks</span>
              <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                <CheckSquare className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-bold font-mono text-slate-900 tracking-tight">
                {pendingTasksCount}
              </span>
              <span className="text-[11px] font-semibold text-rose-600">
                {highPriorityTasks.length} high
              </span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1 truncate">
              {dueSoonTasks.length > 0 ? `${dueSoonTasks.length} due within 48h` : `${completedTasksCount} completed total`}
            </p>
          </div>

          <div className="w-full">
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-500 rounded-full transition-all duration-300"
                style={{ width: `${taskCompletionRate}%` }}
              />
            </div>
          </div>
        </div>

        {/* Card 3: Study Streak */}
        <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col justify-between h-[148px]">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
              <span className="font-semibold text-slate-600 text-xs">Study Streak</span>
              <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center">
                <Flame className="w-4 h-4 fill-amber-500" />
              </div>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-bold font-mono text-slate-900 tracking-tight">
                {userProgress.studyStreakDays}
              </span>
              <span className="text-[11px] text-amber-700 font-medium">Days active</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1 truncate">
              Daily habit sustained
            </p>
          </div>

          <div className="w-full flex items-center gap-1">
            {[1, 2, 3, 4, 5, 6, 7].map((day, idx) => {
              const isActive = idx < Math.min(7, userProgress.studyStreakDays);
              return (
                <div
                  key={day}
                  title={`Day ${day}`}
                  className={`h-1.5 flex-1 rounded-full ${
                    isActive ? 'bg-amber-500' : 'bg-slate-100'
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* Card 4: Study Time Today */}
        <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col justify-between h-[148px]">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
              <span className="font-semibold text-slate-600 text-xs">Study Time</span>
              <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-bold font-mono text-slate-900 tracking-tight">
                {userProgress.studyMinutesToday}m
              </span>
              <span className="text-[11px] text-slate-500 font-medium">/ {dailyTargetMinutes}m goal</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1 truncate">
              Target: {preferences.weeklyHoursTarget} hrs / week
            </p>
          </div>

          <div className="w-full">
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                style={{ width: `${dailyStudyProgressPct}%` }}
              />
            </div>
          </div>
        </div>

        {/* Card 5: Upcoming Milestones */}
        <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col justify-between h-[148px]">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
              <span className="font-semibold text-slate-600 text-xs">Next Milestone</span>
              <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
                <Calendar className="w-4 h-4" />
              </div>
            </div>
            {upcomingExams[0] ? (
              <>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-bold font-mono text-slate-900 tracking-tight truncate">
                    {formatRelativeCountdown(upcomingExams[0].date).label}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 mt-1 truncate font-medium">
                  {upcomingExams[0].title}
                </p>
              </>
            ) : (
              <>
                <div className="text-2xl font-bold font-mono text-slate-900 tracking-tight">
                  Clear
                </div>
                <p className="text-[11px] text-slate-500 mt-1">No deadlines due</p>
              </>
            )}
          </div>

          <div className="pt-1.5 border-t border-slate-100/90 flex items-center justify-between text-[11px] text-slate-500">
            <span className="truncate">{upcomingExams[0]?.category || 'Schedule'}</span>
            <button
              onClick={() => onNavigate('exams')}
              className="font-semibold text-indigo-600 hover:text-indigo-800 transition-colors shrink-0"
            >
              View
            </button>
          </div>
        </div>
      </div>

      {/* 2. RECOMMENDED LEARNING ACTIVITY CARD */}
      <div className="bg-white rounded-xl p-5 border border-indigo-100/90 shadow-[0_1px_3px_rgba(0,0,0,0.03)] relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="max-w-3xl min-w-0">
            {/* Kicker Tag */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-indigo-700 mb-2">
              <span className="inline-flex items-center gap-1.5 bg-indigo-50/90 px-2.5 py-0.5 rounded-md border border-indigo-100/80 text-indigo-800">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span>Recommended for {preferences.targetCareer}</span>
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-500 font-medium truncate">
                {nextRecommendedCourse.title}
              </span>
            </div>

            {/* Module Title */}
            <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 mb-1.5">
              {nextRecommendedModule.title}
            </h2>

            {/* Overview / Brief Description */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3 line-clamp-2">
              {nextRecommendedModule.overview}
            </p>

            {/* Metadata & Progress */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1 font-mono text-slate-700 font-medium">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {nextRecommendedModule.estimatedMinutes} mins
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium text-[11px]">
                {nextRecommendedModule.level}
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-600 truncate max-w-xs sm:max-w-sm">
                Project Exercise: {nextRecommendedModule.handsOnExercise.title}
              </span>
            </div>

            {/* Course Progress Bar */}
            <div className="mt-3.5 max-w-md">
              <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                <span>Course completion: {recCourseCompletedMods} of {recCourseTotalMods} modules</span>
                <span className="font-mono font-semibold text-slate-700">{recCoursePercent}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                  style={{ width: `${recCoursePercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-row lg:flex-col gap-2.5 shrink-0 self-start lg:self-center">
            <button
              onClick={() => openCourseDetail(nextRecommendedCourse.id)}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              <span>{isModuleInProgress ? 'Continue Learning' : 'Start Learning'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigate('learning-hub')}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200/80 text-slate-700 text-xs font-medium rounded-lg transition-colors text-center"
            >
              Browse Catalog
            </button>
          </div>
        </div>
      </div>

      {/* 3. TWO-COLUMN SPLIT: PRIORITY TASKS + UPCOMING ASSESSMENTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SECTION: TODAY'S PRIORITY TASKS */}
        <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3.5">
              <div className="flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-indigo-600" />
                <h3 className="text-sm font-bold text-slate-900">Priority Study Tasks</h3>
              </div>
              <button
                onClick={() => onNavigate('tasks')}
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                View all ({tasks.length})
              </button>
            </div>

            <div className="space-y-2">
              {tasks
                .filter(t => t.status !== 'Completed')
                .slice(0, 4)
                .map(task => {
                  const countdown = formatRelativeCountdown(task.dueDateTime);
                  const isHigh = task.priority === 'High';
                  const isMedium = task.priority === 'Medium';

                  return (
                    <div
                      key={task.id}
                      className="p-3 rounded-lg border border-slate-200/70 bg-slate-50/40 hover:bg-white hover:border-slate-300 transition-all flex items-start justify-between gap-3 group"
                    >
                      <div className="flex items-start gap-2.5 min-w-0">
                        <button
                          onClick={() => toggleTaskStatus(task.id)}
                          className="mt-0.5 text-slate-400 hover:text-emerald-600 transition-colors shrink-0"
                          title="Mark complete"
                        >
                          <Circle className="w-4 h-4 text-slate-300 hover:text-slate-500" />
                        </button>
                        <div className="min-w-0">
                          <h4 className="text-xs font-semibold text-slate-900 truncate leading-tight">
                            {task.title}
                          </h4>
                          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-1">
                            {/* Restrained priority indicator */}
                            <span
                              className={`flex items-center gap-1 font-semibold ${
                                isHigh ? 'text-rose-600' : isMedium ? 'text-amber-600' : 'text-slate-500'
                              }`}
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${
                                  isHigh ? 'bg-rose-500' : isMedium ? 'bg-amber-500' : 'bg-slate-400'
                                }`}
                              />
                              {task.priority}
                            </span>
                            <span aria-hidden="true" className="text-slate-300">·</span>
                            <span className="truncate">{task.relatedTechOrCareer}</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span
                          className={`text-[11px] font-mono font-medium ${
                            countdown.isOverdue ? 'text-rose-600 font-bold' : 'text-slate-500'
                          }`}
                        >
                          {countdown.label}
                        </span>
                      </div>
                    </div>
                  );
                })}

              {tasks.filter(t => t.status !== 'Completed').length === 0 && (
                <div className="py-8 text-center text-xs text-slate-400">
                  <CheckCircle2 className="w-6 h-6 mx-auto text-emerald-500 mb-1.5" />
                  All priority tasks are completed.
                </div>
              )}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 mt-3">
            <span>Manage study tasks and deadlines</span>
            <button
              onClick={() => onNavigate('tasks')}
              className="font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" /> Add Task
            </button>
          </div>
        </div>

        {/* SECTION: UPCOMING ASSESSMENTS & DEADLINES */}
        <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3.5">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-rose-600" />
                <h3 className="text-sm font-bold text-slate-900">Upcoming Assessments & Deadlines</h3>
              </div>
              <button
                onClick={() => onNavigate('exams')}
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                View all ({examsDeadlines.length})
              </button>
            </div>

            <div className="space-y-2">
              {upcomingExams.map(exam => {
                const countdown = formatRelativeCountdown(exam.date);
                const isCertification = exam.category === 'Certification Exam' || exam.category === 'College Exam';
                const isProject = exam.category.includes('Project') || exam.category.includes('Portfolio') || exam.category.includes('Coding Challenge');

                return (
                  <div
                    key={exam.id}
                    className="p-3 rounded-lg border border-slate-200/70 bg-slate-50/40 hover:bg-white hover:border-slate-300 transition-all flex items-start justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                        {exam.isOfficial ? (
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/70 flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3 text-emerald-600" /> Verified Official
                          </span>
                        ) : isProject ? (
                          <span className="text-[10px] font-semibold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200/60">
                            Project Submission
                          </span>
                        ) : (
                          <span className="text-[10px] font-medium text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">
                            Practice Assessment
                          </span>
                        )}
                        <span className="text-[10px] text-slate-400 font-mono">
                          {exam.category}
                        </span>
                      </div>
                      <h4 className="text-xs font-semibold text-slate-900 truncate leading-tight">
                        {exam.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 truncate">
                        {exam.relatedTechnology}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="font-mono text-xs font-medium text-slate-700">
                        {formatDateTime(exam.date).split(',')[0]}
                      </div>
                      <div
                        className={`text-[11px] font-mono font-bold mt-0.5 ${
                          countdown.isOverdue ? 'text-rose-600' : 'text-indigo-600'
                        }`}
                      >
                        {countdown.label}
                      </div>
                    </div>
                  </div>
                );
              })}

              {upcomingExams.length === 0 && (
                <div className="py-8 text-center text-xs text-slate-400">
                  <Calendar className="w-6 h-6 mx-auto text-slate-300 mb-1.5" />
                  No upcoming deadlines scheduled.
                </div>
              )}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 mt-3">
            <span>Log a college test or certification date</span>
            <button
              onClick={() => onNavigate('exams')}
              className="font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" /> Log Date
            </button>
          </div>
        </div>
      </div>

      {/* 4. CORE CAREER ROADMAP CURRICULUM */}
      <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3.5 border-b border-slate-100 mb-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              {preferences.targetCareer} Foundation Courses
            </h3>
            <p className="text-xs text-slate-500">
              Core curriculum recommended for your active career pathway.
            </p>
          </div>
          <button
            onClick={() => onNavigate('learning-hub')}
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 transition-colors"
          >
            <span>Explore All 52 Courses</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {primaryCourses.map(course => {
            const total = course.modules.length;
            const completed = course.modules.filter(m =>
              userProgress.completedModuleIds.includes(m.id)
            ).length;
            const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

            return (
              <div
                key={course.id}
                onClick={() => openCourseDetail(course.id)}
                className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/30 hover:bg-white hover:border-slate-300 transition-all cursor-pointer flex flex-col justify-between group h-[170px]"
              >
                <div>
                  <div className="text-[11px] text-slate-500 font-medium mb-1">
                    {course.skillLevel} · {course.totalDurationHours} hrs
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2 leading-snug mb-1.5">
                    {course.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2">
                    {course.summary}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="text-slate-500">
                      {completed}/{total} modules
                    </span>
                    <span className="font-mono font-semibold text-slate-700">{pct}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        pct === 100 ? 'bg-emerald-500' : 'bg-indigo-600'
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
