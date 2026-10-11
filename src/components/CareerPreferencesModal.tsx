import React, { useState } from 'react';
import { useStudy } from '../context/StudyContext';
import { TargetCareer, SkillLevel, LearningGoal, CourseCategory } from '../types';
import { COURSE_CATEGORIES } from '../data/coursesData';
import { X, Check, Target, Compass, Award, BookOpen } from 'lucide-react';

const AVAILABLE_CAREERS: TargetCareer[] = [
  'Full Stack Developer',
  'Python Full Stack Developer',
  'UI/UX Designer',
  'Data Scientist',
  'Data Analyst',
  'AI/ML Engineer',
  'Digital Marketing Specialist',
  'Cloud Engineer',
  'Cybersecurity Analyst',
  'Software Developer'
];

const SKILL_LEVELS: SkillLevel[] = ['Beginner', 'Intermediate', 'Advanced'];

const LEARNING_GOALS: LearningGoal[] = [
  'Land a Full-Time Job',
  'Secure an Internship',
  'Career Transition / Upskilling',
  'College Exams & Academics',
  'Industry Certification',
  'Build Real-World Portfolio'
];

export const CareerPreferencesModal: React.FC = () => {
  const { preferences, updatePreferences, generateCareerTasks, isPreferencesModalOpen, setIsPreferencesModalOpen } = useStudy();

  const [selectedCareer, setSelectedCareer] = useState<TargetCareer>(preferences.targetCareer);
  const [selectedSkillLevel, setSelectedSkillLevel] = useState<SkillLevel>(preferences.skillLevel);
  const [selectedInterests, setSelectedInterests] = useState<string[]>(preferences.interests);
  const [selectedGoals, setSelectedGoals] = useState<LearningGoal[]>(preferences.learningGoals);
  const [autoGenerateTasks, setAutoGenerateTasks] = useState<boolean>(true);

  if (!isPreferencesModalOpen) return null;

  const toggleInterest = (category: string) => {
    setSelectedInterests(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const toggleGoal = (goal: LearningGoal) => {
    setSelectedGoals(prev =>
      prev.includes(goal) ? prev.filter(g => g !== goal) : [...prev, goal]
    );
  };

  const handleSave = () => {
    const careerChanged = selectedCareer !== preferences.targetCareer;
    updatePreferences({
      targetCareer: selectedCareer,
      skillLevel: selectedSkillLevel,
      interests: selectedInterests,
      learningGoals: selectedGoals
    });

    if (autoGenerateTasks && careerChanged) {
      generateCareerTasks(selectedCareer);
    }

    setIsPreferencesModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-indigo-100 text-indigo-700 rounded-lg">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Career Personalization & Goals</h2>
              <p className="text-xs text-slate-500">
                Tailor course recommendations, priority tasks, and deadline schedules to your ambitions.
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsPreferencesModalOpen(false)}
            className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="px-6 py-5 max-h-[72vh] overflow-y-auto space-y-6">
          {/* 1. Target Career Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Target Career Path
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {AVAILABLE_CAREERS.map(career => {
                const isSelected = selectedCareer === career;
                return (
                  <button
                    key={career}
                    type="button"
                    onClick={() => setSelectedCareer(career)}
                    className={`flex items-center justify-between p-3 rounded-xl border text-left text-sm font-medium transition-all ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-50/80 text-indigo-950 font-semibold ring-1 ring-indigo-600'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                    }`}
                  >
                    <span>{career}</span>
                    {isSelected && <Check className="w-4 h-4 text-indigo-600 shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Current Skill Level */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Current Skill Level
            </label>
            <div className="grid grid-cols-3 gap-2">
              {SKILL_LEVELS.map(level => {
                const isSelected = selectedSkillLevel === level;
                return (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setSelectedSkillLevel(level)}
                    className={`py-2.5 px-3 rounded-xl border text-center text-xs font-semibold transition-all ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-600 text-white'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                    }`}
                  >
                    {level}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Areas of Interest */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Key Interests & Domains
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {COURSE_CATEGORIES.map(category => {
                const isSelected = selectedInterests.includes(category);
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => toggleInterest(category)}
                    className={`flex items-center justify-between p-2.5 rounded-xl border text-left text-xs font-medium transition-all ${
                      isSelected
                        ? 'border-indigo-500 bg-indigo-50 text-indigo-900 font-semibold'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-600'
                    }`}
                  >
                    <span>{category}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Primary Learning Goals */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Primary Learning Goals
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {LEARNING_GOALS.map(goal => {
                const isSelected = selectedGoals.includes(goal);
                return (
                  <button
                    key={goal}
                    type="button"
                    onClick={() => toggleGoal(goal)}
                    className={`flex items-center justify-between p-2.5 rounded-xl border text-left text-xs font-medium transition-all ${
                      isSelected
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-600'
                    }`}
                  >
                    <span>{goal}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Auto-recommend toggle */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-900 block">
                Suggest Priority Tasks for this Career
              </span>
              <span className="text-[11px] text-slate-500 block">
                Automatically inject milestone exercises (preserves your existing tasks).
              </span>
            </div>
            <input
              type="checkbox"
              id="autoGen"
              checked={autoGenerateTasks}
              onChange={e => setAutoGenerateTasks(e.target.checked)}
              className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => setIsPreferencesModalOpen(false)}
            className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200/70 rounded-xl transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-5 py-2 text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-xs transition-colors"
          >
            Save & Update Recommendations
          </button>
        </div>
      </div>
    </div>
  );
};
