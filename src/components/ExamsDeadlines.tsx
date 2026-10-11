import React, { useState, useMemo } from 'react';
import { useStudy } from '../context/StudyContext';
import { ExamDeadline, ExamCategory, ExamStatus } from '../types';
import { formatDateTime, formatRelativeCountdown, isDateOverdue } from '../utils/dateUtils';
import {
  Calendar,
  Plus,
  ShieldCheck,
  Clock,
  MapPin,
  Trash2,
  Edit2,
  CheckCircle2,
  X,
  Search,
  Sparkles,
  Info
} from 'lucide-react';

const EXAM_CATEGORIES: ExamCategory[] = [
  'Course Quiz',
  'Module Assessment',
  'Practice Test & Mock Interview',
  'Coding Challenge & Submission',
  'UI/UX Portfolio Deadline',
  'Marketing Project Deadline',
  'Certification Exam',
  'College Exam',
  'Job Application & Interview'
];

export const ExamsDeadlines: React.FC = () => {
  const {
    examsDeadlines,
    addExamDeadline,
    updateExamDeadline,
    deleteExamDeadline,
    toggleExamStatus,
    preferences
  } = useStudy();

  const [activeFilter, setActiveFilter] = useState<'All' | 'Official' | 'Practice' | 'Upcoming' | 'Completed'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingExamId, setEditingExamId] = useState<string | null>(null);

  // Form Fields
  const [formTitle, setFormTitle] = useState('');
  const [formTech, setFormTech] = useState<string>(preferences.targetCareer);
  const [formDate, setFormDate] = useState(
    new Date(Date.now() + 86400000 * 5).toISOString().slice(0, 16)
  );
  const [formCategory, setFormCategory] = useState<ExamCategory>('Module Assessment');
  const [formIsOfficial, setFormIsOfficial] = useState<boolean>(false);
  const [formStatus, setFormStatus] = useState<ExamStatus>('Upcoming');
  const [formLocation, setFormLocation] = useState('Online Platform');
  const [formNotes, setFormNotes] = useState('');

  const openCreateModal = (isOfficialDefault: boolean = false) => {
    setEditingExamId(null);
    setFormTitle('');
    setFormTech(preferences.targetCareer);
    setFormDate(new Date(Date.now() + 86400000 * 7).toISOString().slice(0, 16));
    setFormCategory(isOfficialDefault ? 'Certification Exam' : 'Module Assessment');
    setFormIsOfficial(isOfficialDefault);
    setFormStatus('Upcoming');
    setFormLocation('');
    setFormNotes('');
    setIsModalOpen(true);
  };

  const openEditModal = (exam: ExamDeadline) => {
    setEditingExamId(exam.id);
    setFormTitle(exam.title);
    setFormTech(exam.relatedTechnology);
    setFormDate(exam.date);
    setFormCategory(exam.category);
    setFormIsOfficial(exam.isOfficial);
    setFormStatus(exam.status);
    setFormLocation(exam.locationOrPlatform || '');
    setFormNotes(exam.notes || '');
    setIsModalOpen(true);
  };

  const handleSaveExam = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim()) return;

    if (editingExamId) {
      updateExamDeadline(editingExamId, {
        title: formTitle,
        relatedTechnology: formTech,
        date: formDate,
        category: formCategory,
        isOfficial: formIsOfficial,
        status: formStatus,
        locationOrPlatform: formLocation,
        notes: formNotes
      });
    } else {
      addExamDeadline({
        title: formTitle,
        relatedTechnology: formTech,
        date: formDate,
        category: formCategory,
        isOfficial: formIsOfficial,
        status: formStatus,
        locationOrPlatform: formLocation,
        notes: formNotes
      });
    }

    setIsModalOpen(false);
  };

  // Filtered exams
  const filteredExams = useMemo(() => {
    return examsDeadlines
      .filter(item => {
        if (activeFilter === 'Official' && !item.isOfficial) return false;
        if (activeFilter === 'Practice' && item.isOfficial) return false;
        if (activeFilter === 'Upcoming' && item.status === 'Completed') return false;
        if (activeFilter === 'Completed' && item.status !== 'Completed') return false;

        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchesTitle = item.title.toLowerCase().includes(q);
          const matchesTech = item.relatedTechnology.toLowerCase().includes(q);
          const matchesCat = item.category.toLowerCase().includes(q);
          if (!matchesTitle && !matchesTech && !matchesCat) return false;
        }
        return true;
      })
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [examsDeadlines, activeFilter, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-rose-600 mb-1">
            <Calendar className="w-4 h-4" />
            <span>Exams & Milestones</span>
            <span aria-hidden="true">·</span>
            <span>{examsDeadlines.filter(e => e.status !== 'Completed').length} active schedules</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            Assessments, Certifications & Deadlines
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mt-0.5">
            Track certified exams, college dates, and coding milestones with accurate real-time countdowns.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
          <button
            onClick={() => openCreateModal(true)}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200/70 rounded-lg transition-colors"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Log Official Exam
          </button>
          <button
            onClick={() => openCreateModal(false)}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-xs transition-colors"
          >
            <Plus className="w-4 h-4" /> Add Deadline
          </button>
        </div>
      </div>

      {/* Distinction Guide Notice */}
      <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/70 text-xs text-slate-600 flex items-center gap-2.5">
        <Info className="w-4 h-4 text-indigo-600 shrink-0" />
        <span className="leading-relaxed">
          <strong className="text-slate-900 font-semibold">Official Schedules:</strong> Certification appointments and college exams are verified with a green shield badge, separating them from personal practice exercises.
        </span>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-xl p-3 sm:p-4 border border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.03)] flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search deadlines by title or technology..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-0.5 p-1 bg-slate-100 rounded-lg border border-slate-200/60 overflow-x-auto">
          {(['All', 'Official', 'Practice', 'Upcoming', 'Completed'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                activeFilter === tab
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab === 'All' ? 'All Deadlines' : tab}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline / List View */}
      <div className="space-y-2.5">
        {filteredExams.map(exam => {
          const isDone = exam.status === 'Completed';
          const countdown = formatRelativeCountdown(exam.date);
          const examDate = new Date(exam.date);
          const monthStr = examDate.toLocaleString('en-US', { month: 'short' });
          const dayStr = examDate.getDate();

          return (
            <div
              key={exam.id}
              className={`bg-white rounded-xl p-3.5 sm:p-4 border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 ${
                isDone
                  ? 'border-slate-200/60 bg-slate-50/40 text-slate-400'
                  : countdown.isOverdue
                  ? 'border-rose-200 bg-rose-50/15 shadow-xs'
                  : 'border-slate-200/80 hover:border-slate-300 shadow-[0_1px_2px_rgba(0,0,0,0.02)]'
              }`}
            >
              {/* Left Date Block + Details */}
              <div className="flex items-start sm:items-center gap-3.5 min-w-0 flex-1">
                {/* Date Mini Tile */}
                <div
                  className={`w-12 h-12 rounded-lg flex flex-col items-center justify-center shrink-0 border leading-none ${
                    isDone
                      ? 'bg-slate-100 text-slate-400 border-slate-200'
                      : exam.isOfficial
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200/80'
                      : 'bg-indigo-50 text-indigo-800 border-indigo-100'
                  }`}
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider">
                    {monthStr}
                  </span>
                  <span className="text-base font-extrabold font-mono mt-0.5">
                    {dayStr}
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  {/* Category & Distinction Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-1 text-[11px]">
                    {exam.isOfficial ? (
                      <span className="inline-flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/80">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Verified Official
                      </span>
                    ) : exam.category.includes('Project') || exam.category.includes('Portfolio') || exam.category.includes('Coding Challenge') ? (
                      <span className="inline-flex items-center gap-1 font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200/80">
                        Project Submission
                      </span>
                    ) : exam.category === 'Certification Exam' || exam.category === 'College Exam' ? (
                      <span className="inline-flex items-center gap-1 font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/80">
                        Official Exam
                      </span>
                    ) : exam.category === 'Practice Test & Mock Interview' || exam.category === 'Course Quiz' || exam.category === 'Module Assessment' ? (
                      <span className="inline-flex items-center gap-1 font-medium text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-200/80">
                        Practice Assessment
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                        User Deadline
                      </span>
                    )}

                    <span className="text-slate-500 font-mono text-[11px]">
                      {exam.category}
                    </span>

                    {exam.locationOrPlatform && (
                      <>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span className="text-slate-500 flex items-center gap-1 truncate max-w-[180px]">
                          <MapPin className="w-3 h-3 text-slate-400 shrink-0" /> {exam.locationOrPlatform}
                        </span>
                      </>
                    )}
                  </div>

                  <h3
                    className={`text-sm font-semibold truncate ${
                      isDone ? 'line-through text-slate-400' : 'text-slate-900'
                    }`}
                  >
                    {exam.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mt-0.5">
                    <span className="text-indigo-600 font-medium truncate max-w-[200px]">
                      {exam.relatedTechnology}
                    </span>
                    {exam.notes && (
                      <>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span className="text-slate-400 truncate max-w-[240px]">{exam.notes}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Countdown & Action Controls */}
              <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                <div className="text-left sm:text-right">
                  <div className="text-xs font-mono font-medium text-slate-700">
                    {formatDateTime(exam.date).split(',')[1]?.trim() || ''}
                  </div>
                  <div
                    className={`text-xs font-mono font-bold ${
                      countdown.isOverdue && !isDone
                        ? 'text-rose-600'
                        : isDone
                        ? 'text-slate-400'
                        : 'text-indigo-600'
                    }`}
                  >
                    {isDone ? 'Completed' : countdown.label}
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => toggleExamStatus(exam.id)}
                    className={`p-1.5 rounded-lg border transition-colors ${
                      isDone
                        ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
                        : 'text-slate-400 hover:text-emerald-600 hover:bg-slate-100 border-slate-200'
                    }`}
                    title={isDone ? 'Mark as upcoming' : 'Mark as completed'}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => openEditModal(exam)}
                    className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                    title="Edit Deadline"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => deleteExamDeadline(exam.id)}
                    className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                    title="Delete Deadline"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredExams.length === 0 && (
        <div className="bg-white rounded-xl p-10 text-center border border-slate-200/80">
          <Calendar className="w-8 h-8 text-slate-300 mx-auto mb-2.5" />
          <h3 className="text-sm font-bold text-slate-900">No scheduled deadlines found</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
            Log an upcoming college exam date, certification testing schedule, or self-scheduled mock interview deadline.
          </p>
          <button
            onClick={() => openCreateModal(false)}
            className="mt-3.5 px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
          >
            Add New Deadline
          </button>
        </div>
      )}

      {/* CREATE / EDIT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-lg w-full shadow-xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <h2 className="text-sm font-bold text-slate-900">
                {editingExamId ? 'Edit Exam / Deadline' : 'Log Exam or Practice Deadline'}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-md"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveExam} className="p-5 space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. AWS Certified Solutions Architect, College Midterm..."
                  value={formTitle}
                  onChange={e => setFormTitle(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs sm:text-sm rounded-lg border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Related Technology
                  </label>
                  <input
                    type="text"
                    required
                    value={formTech}
                    onChange={e => setFormTech(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Category
                  </label>
                  <select
                    value={formCategory}
                    onChange={e => setFormCategory(e.target.value as ExamCategory)}
                    className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                  >
                    {EXAM_CATEGORIES.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Date & Time *
                  </label>
                  <input
                    type="datetime-local"
                    required
                    value={formDate}
                    onChange={e => setFormDate(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Status
                  </label>
                  <select
                    value={formStatus}
                    onChange={e => setFormStatus(e.target.value as ExamStatus)}
                    className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                  >
                    <option value="Upcoming">Upcoming</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>

              {/* Official Schedule Checkbox */}
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/80 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Official / Verified Schedule
                  </span>
                  <input
                    type="checkbox"
                    checked={formIsOfficial}
                    onChange={e => setFormIsOfficial(e.target.checked)}
                    className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300"
                  />
                </div>
                <p className="text-[11px] text-slate-500">
                  Select this for officially booked exams (college dates, Pearson VUE / AWS testing vouchers, confirmed job interviews).
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Location or Platform
                </label>
                <input
                  type="text"
                  placeholder="e.g. Pearson VUE Testing Center, Hall 304, Zoom..."
                  value={formLocation}
                  onChange={e => setFormLocation(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preparation Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Topics to review, formulas, or confirmation numbers..."
                  value={formNotes}
                  onChange={e => setFormNotes(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-xs"
                >
                  {editingExamId ? 'Save Changes' : 'Record Deadline'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
