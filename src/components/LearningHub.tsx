import React, { useState, useMemo } from 'react';
import { useStudy } from '../context/StudyContext';
import { ALL_COURSES, COURSE_CATEGORIES } from '../data/coursesData';
import { CourseCategory, SkillLevel } from '../types';
import {
  Search,
  Compass,
  ArrowRight,
  BookOpen,
  Sparkles,
  Clock
} from 'lucide-react';

export const LearningHub: React.FC = () => {
  const { preferences, userProgress, openCourseDetail, activeCareerRoadmap } = useStudy();

  const [selectedCategory, setSelectedCategory] = useState<CourseCategory | 'All'>('All');
  const [selectedSkillLevel, setSelectedSkillLevel] = useState<SkillLevel | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [onlyRecommended, setOnlyRecommended] = useState<boolean>(false);

  // Filtered courses
  const filteredCourses = useMemo(() => {
    return ALL_COURSES.filter(course => {
      // Category filter
      if (selectedCategory !== 'All' && course.category !== selectedCategory) {
        return false;
      }
      // Skill level filter
      if (selectedSkillLevel !== 'All' && course.skillLevel !== selectedSkillLevel) {
        return false;
      }
      // Recommended only filter
      const isRecommended =
        activeCareerRoadmap.primaryCourseIds.includes(course.id) ||
        activeCareerRoadmap.secondaryCourseIds.includes(course.id) ||
        course.relatedCareers.includes(preferences.targetCareer);

      if (onlyRecommended && !isRecommended) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = course.title.toLowerCase().includes(q);
        const matchesSummary = course.summary.toLowerCase().includes(q);
        const matchesTags = course.tags.some(t => t.toLowerCase().includes(q));
        const matchesCategory = course.category.toLowerCase().includes(q);
        if (!matchesTitle && !matchesSummary && !matchesTags && !matchesCategory) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedSkillLevel, searchQuery, onlyRecommended, activeCareerRoadmap, preferences.targetCareer]);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 mb-1">
              <Compass className="w-4 h-4" />
              <span>Interactive Learning Hub</span>
              <span aria-hidden="true">·</span>
              <span>52 Technology & Career Curricula</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              Curriculum & Skill Paths
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mt-0.5">
              Explore step-by-step technical guides, hands-on coding exercises, real projects, and self-assessments.
            </p>
          </div>

          {/* Active Career Goal Badge */}
          <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-indigo-50/70 border border-indigo-100 self-start md:self-auto shrink-0">
            <Sparkles className="w-4 h-4 text-indigo-600 shrink-0" />
            <div className="text-xs">
              <span className="text-slate-500 block text-[11px]">Active Pathway</span>
              <span className="font-bold text-indigo-950 block">{preferences.targetCareer}</span>
            </div>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search 52 courses by title, topic, or technology..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs sm:text-sm rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Skill Level Filter */}
          <div className="flex items-center gap-0.5 p-1 bg-slate-100 rounded-lg border border-slate-200/60 shrink-0">
            {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map(lvl => (
              <button
                key={lvl}
                onClick={() => setSelectedSkillLevel(lvl)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                  selectedSkillLevel === lvl
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>

          {/* Recommended Filter Toggle */}
          <button
            onClick={() => setOnlyRecommended(!onlyRecommended)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0 ${
              onlyRecommended
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 border border-slate-200/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Recommended ({preferences.targetCareer.split(' ')[0]})
          </button>
        </div>
      </div>

      {/* Category Selection Tabs Bar */}
      <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => setSelectedCategory('All')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
            selectedCategory === 'All'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
          }`}
        >
          All Domains (52)
        </button>

        {COURSE_CATEGORIES.map(cat => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
                isSelected
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5">
        {filteredCourses.map(course => {
          const isPrimary = activeCareerRoadmap.primaryCourseIds.includes(course.id);
          const isSecondary = activeCareerRoadmap.secondaryCourseIds.includes(course.id);
          const isRecommended = isPrimary || isSecondary || course.relatedCareers.includes(preferences.targetCareer);

          const totalMods = course.modules.length;
          const completedCount = course.modules.filter(m =>
            userProgress.completedModuleIds.includes(m.id)
          ).length;
          const percent = totalMods > 0 ? Math.round((completedCount / totalMods) * 100) : 0;

          return (
            <div
              key={course.id}
              onClick={() => openCourseDetail(course.id)}
              className="bg-white rounded-xl border border-slate-200/80 p-4.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:border-indigo-300 hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between group h-[260px]"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <span className="truncate max-w-[150px]">{course.category}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span>{course.skillLevel}</span>
                  </div>
                  {isRecommended && (
                    <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-100 flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5 text-indigo-600" />
                      {isPrimary ? 'Core' : 'Recommended'}
                    </span>
                  )}
                </div>

                {/* Course Title */}
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2 leading-snug mb-1.5">
                  {course.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-3">
                  {course.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {course.tags.slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {course.tags.length > 3 && (
                    <span className="text-[10px] text-slate-400 self-center">
                      +{course.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Progress Bar & Action */}
              <div className="pt-2.5 border-t border-slate-100">
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span className="text-slate-500">
                    {completedCount > 0 ? `${completedCount}/${totalMods} modules done` : `${totalMods} modules · ${course.totalDurationHours}h`}
                  </span>
                  <span className="font-mono font-semibold text-slate-700">
                    {percent}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-2.5">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      percent === 100 ? 'bg-emerald-500' : 'bg-indigo-600'
                    }`}
                    style={{ width: `${percent}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-indigo-600 group-hover:text-indigo-700">
                  <span>Explore Curriculum</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredCourses.length === 0 && (
        <div className="bg-white rounded-xl p-10 text-center border border-slate-200/80">
          <BookOpen className="w-8 h-8 text-slate-300 mx-auto mb-2" />
          <h3 className="text-sm font-bold text-slate-900">No courses found</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
            Try adjusting your search query, skill level, or reset the category filter to view all courses.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedSkillLevel('All');
              setSearchQuery('');
              setOnlyRecommended(false);
            }}
            className="mt-3 px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
