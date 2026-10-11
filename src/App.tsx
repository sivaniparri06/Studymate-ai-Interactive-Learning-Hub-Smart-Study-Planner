/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { StudyProvider } from './context/StudyContext';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { LearningHub } from './components/LearningHub';
import { TaskPlanner } from './components/TaskPlanner';
import { ExamsDeadlines } from './components/ExamsDeadlines';
import { CourseDetailModal } from './components/CourseDetailModal';
import { CareerPreferencesModal } from './components/CareerPreferencesModal';
import { StudyTimerModal } from './components/StudyTimerModal';
import { GraduationCap, Sparkles, BookOpen, CheckSquare, Calendar, ShieldCheck } from 'lucide-react';

function MainApp() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'learning-hub' | 'tasks' | 'exams'>('dashboard');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Top Application Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main View Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'dashboard' && <Dashboard onNavigate={setActiveTab} />}
        {activeTab === 'learning-hub' && <LearningHub />}
        {activeTab === 'tasks' && <TaskPlanner />}
        {activeTab === 'exams' && <ExamsDeadlines />}
      </main>

      {/* Modals */}
      <CourseDetailModal />
      <CareerPreferencesModal />
      <StudyTimerModal />

      {/* Quiet Footer */}
      <footer className="bg-white border-t border-slate-200/80 py-8 text-xs text-slate-500 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
              S
            </div>
            <span className="font-semibold text-slate-800">StudyMate AI</span>
            <span aria-hidden="true">·</span>
            <span>Interactive Learning Hub & Smart Planner</span>
          </div>

          <div className="flex items-center gap-4 text-slate-500">
            <button onClick={() => setActiveTab('dashboard')} className="hover:text-slate-900 transition-colors">
              Dashboard
            </button>
            <span aria-hidden="true">·</span>
            <button onClick={() => setActiveTab('learning-hub')} className="hover:text-slate-900 transition-colors">
              52 Curricula
            </button>
            <span aria-hidden="true">·</span>
            <button onClick={() => setActiveTab('tasks')} className="hover:text-slate-900 transition-colors">
              Priority Tasks
            </button>
            <span aria-hidden="true">·</span>
            <button onClick={() => setActiveTab('exams')} className="hover:text-slate-900 transition-colors">
              Exams & Deadlines
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <StudyProvider>
      <MainApp />
    </StudyProvider>
  );
}
