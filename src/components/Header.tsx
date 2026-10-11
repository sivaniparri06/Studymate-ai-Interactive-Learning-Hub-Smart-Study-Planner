import React from 'react';
import { useStudy } from '../context/StudyContext';
import {
  Compass,
  Calendar,
  CheckSquare,
  Clock,
  Flame,
  LayoutDashboard,
  ChevronDown,
  GraduationCap
} from 'lucide-react';

interface HeaderProps {
  activeTab: 'dashboard' | 'learning-hub' | 'tasks' | 'exams';
  setActiveTab: (tab: 'dashboard' | 'learning-hub' | 'tasks' | 'exams') => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const { preferences, userProgress, setIsPreferencesModalOpen, setIsStudyTimerOpen } = useStudy();

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('dashboard')}
              className="flex items-center gap-2.5 text-left group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
            >
              <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs group-hover:bg-indigo-700 transition-colors">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="leading-tight">
                <span className="text-base font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                  StudyMate<span className="text-indigo-600"> AI</span>
                </span>
                <span className="hidden sm:block text-[10px] font-medium text-slate-400 tracking-wider uppercase">
                  Learning Hub & Planner
                </span>
              </div>
            </button>
          </div>

          {/* Center Segmented Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-0.5 p-1 bg-slate-100/80 rounded-xl border border-slate-200/60">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-white text-slate-900 shadow-xs ring-1 ring-slate-950/5'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-indigo-600" />
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('learning-hub')}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'learning-hub'
                  ? 'bg-white text-slate-900 shadow-xs ring-1 ring-slate-950/5'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-emerald-600" />
              Learning Hub
            </button>
            <button
              onClick={() => setActiveTab('tasks')}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'tasks'
                  ? 'bg-white text-slate-900 shadow-xs ring-1 ring-slate-950/5'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <CheckSquare className="w-3.5 h-3.5 text-amber-600" />
              Task Planner
            </button>
            <button
              onClick={() => setActiveTab('exams')}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'exams'
                  ? 'bg-white text-slate-900 shadow-xs ring-1 ring-slate-950/5'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <Calendar className="w-3.5 h-3.5 text-rose-600" />
              Exams & Deadlines
            </button>
          </nav>

          {/* Right Action Widgets */}
          <div className="flex items-center gap-2">
            {/* Study Streak */}
            <div
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-amber-50/80 border border-amber-200/60 text-amber-900 text-xs font-semibold"
              title={`${userProgress.studyStreakDays} Day Study Streak`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span className="font-mono tabular-nums">{userProgress.studyStreakDays}d</span>
              <span className="hidden xl:inline text-amber-700/80 font-normal">streak</span>
            </div>

            {/* Focus Study Timer */}
            <button
              onClick={() => setIsStudyTimerOpen(true)}
              title="Focus Study Timer"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100/90 hover:bg-slate-200/80 text-slate-700 text-xs font-medium border border-slate-200/60 transition-colors"
            >
              <Clock className="w-3.5 h-3.5 text-indigo-600" />
              <span className="font-mono tabular-nums">{userProgress.studyMinutesToday}m</span>
              <span className="hidden lg:inline text-slate-400">today</span>
            </button>

            {/* Target Career Dropdown Trigger */}
            <button
              onClick={() => setIsPreferencesModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50/80 hover:bg-indigo-100/80 text-indigo-900 border border-indigo-200/70 text-xs font-medium transition-all group"
              title="Change Career Path & Learning Goals"
            >
              <span className="hidden sm:inline text-indigo-600/80 font-normal">Career:</span>
              <span className="font-semibold text-indigo-900 max-w-[130px] sm:max-w-[160px] truncate">
                {preferences.targetCareer}
              </span>
              <ChevronDown className="w-3 h-3 text-indigo-600 group-hover:translate-y-0.5 transition-transform shrink-0" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Row */}
        <div className="flex md:hidden items-center justify-around py-2 border-t border-slate-100 text-xs">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex flex-col items-center gap-1 py-1 px-2.5 font-medium rounded-lg transition-colors ${
              activeTab === 'dashboard' ? 'text-indigo-600 font-semibold' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span className="text-[11px]">Dashboard</span>
          </button>
          <button
            onClick={() => setActiveTab('learning-hub')}
            className={`flex flex-col items-center gap-1 py-1 px-2.5 font-medium rounded-lg transition-colors ${
              activeTab === 'learning-hub' ? 'text-indigo-600 font-semibold' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span className="text-[11px]">Courses</span>
          </button>
          <button
            onClick={() => setActiveTab('tasks')}
            className={`flex flex-col items-center gap-1 py-1 px-2.5 font-medium rounded-lg transition-colors ${
              activeTab === 'tasks' ? 'text-indigo-600 font-semibold' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <CheckSquare className="w-4 h-4" />
            <span className="text-[11px]">Tasks</span>
          </button>
          <button
            onClick={() => setActiveTab('exams')}
            className={`flex flex-col items-center gap-1 py-1 px-2.5 font-medium rounded-lg transition-colors ${
              activeTab === 'exams' ? 'text-indigo-600 font-semibold' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span className="text-[11px]">Exams</span>
          </button>
        </div>
      </div>
    </header>
  );
};
