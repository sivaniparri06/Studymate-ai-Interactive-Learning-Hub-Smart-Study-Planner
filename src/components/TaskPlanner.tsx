import React, { useState, useMemo } from 'react';
import { useStudy } from '../context/StudyContext';
import { Task, TaskPriority, TaskStatus } from '../types';
import { formatDateTime, formatRelativeCountdown, isDateOverdue } from '../utils/dateUtils';
import {
  CheckSquare,
  Plus,
  Sparkles,
  Clock,
  Trash2,
  Edit2,
  ExternalLink,
  Search,
  CheckCircle2,
  Circle,
  X
} from 'lucide-react';

export const TaskPlanner: React.FC = () => {
  const {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    toggleTaskStatus,
    changeTaskPriority,
    generateCareerTasks,
    preferences
  } = useStudy();

  const [activePriorityFilter, setActivePriorityFilter] = useState<TaskPriority | 'All'>('All');
  const [activeStatusFilter, setActiveStatusFilter] = useState<TaskStatus | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);

  // Form Fields
  const [formTitle, setFormTitle] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formTech, setFormTech] = useState<string>(preferences.targetCareer);
  const [formPriority, setFormPriority] = useState<TaskPriority>('High');
  const [formDueDateTime, setFormDueDateTime] = useState(
    new Date(Date.now() + 86400000 * 2).toISOString().slice(0, 16)
  );
  const [formEstimatedTime, setFormEstimatedTime] = useState('90 mins');
  const [formStatus, setFormStatus] = useState<TaskStatus>('Not Started');
  const [formNotes, setFormNotes] = useState('');
  const [formResources, setFormResources] = useState('');

  const openCreateModal = () => {
    setEditingTaskId(null);
    setFormTitle('');
    setFormDescription('');
    setFormTech(preferences.targetCareer);
    setFormPriority('High');
    setFormDueDateTime(new Date(Date.now() + 86400000 * 2).toISOString().slice(0, 16));
    setFormEstimatedTime('90 mins');
    setFormStatus('Not Started');
    setFormNotes('');
    setFormResources('');
    setIsModalOpen(true);
  };

  const openEditModal = (task: Task) => {
    setEditingTaskId(task.id);
    setFormTitle(task.title);
    setFormDescription(task.description);
    setFormTech(task.relatedTechOrCareer);
    setFormPriority(task.priority);
    setFormDueDateTime(task.dueDateTime);
    setFormEstimatedTime(task.estimatedTime);
    setFormStatus(task.status);
    setFormNotes(task.notes || '');
    setFormResources(task.learningResources?.join(', ') || '');
    setIsModalOpen(true);
  };

  const handleSaveTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim()) return;

    const resourcesArray = formResources
      .split(',')
      .map(s => s.trim())
      .filter(s => s.length > 0);

    if (editingTaskId) {
      updateTask(editingTaskId, {
        title: formTitle,
        description: formDescription,
        relatedTechOrCareer: formTech,
        priority: formPriority,
        dueDateTime: formDueDateTime,
        estimatedTime: formEstimatedTime,
        status: formStatus,
        notes: formNotes,
        learningResources: resourcesArray
      });
    } else {
      addTask({
        title: formTitle,
        description: formDescription,
        relatedTechOrCareer: formTech,
        priority: formPriority,
        dueDateTime: formDueDateTime,
        estimatedTime: formEstimatedTime,
        status: formStatus,
        notes: formNotes,
        learningResources: resourcesArray,
        isRecommended: false
      });
    }

    setIsModalOpen(false);
  };

  // Filter tasks
  const filteredTasks = useMemo(() => {
    return tasks.filter(t => {
      if (activePriorityFilter !== 'All' && t.priority !== activePriorityFilter) {
        return false;
      }
      if (activeStatusFilter !== 'All' && t.status !== activeStatusFilter) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = t.title.toLowerCase().includes(q);
        const matchesDesc = t.description.toLowerCase().includes(q);
        const matchesTech = t.relatedTechOrCareer.toLowerCase().includes(q);
        if (!matchesTitle && !matchesDesc && !matchesTech) return false;
      }
      return true;
    });
  }, [tasks, activePriorityFilter, activeStatusFilter, searchQuery]);

  // Priority Subsets
  const highPriorityTasks = filteredTasks.filter(t => t.priority === 'High');
  const mediumPriorityTasks = filteredTasks.filter(t => t.priority === 'Medium');
  const lowPriorityTasks = filteredTasks.filter(t => t.priority === 'Low');

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 mb-1">
            <CheckSquare className="w-4 h-4" />
            <span>Priority Task Planner</span>
            <span aria-hidden="true">·</span>
            <span>{tasks.filter(t => t.status !== 'Completed').length} active / {tasks.length} total</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            Study Tasks & Milestones
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mt-0.5">
            Organize practice projects, exercises, and study sessions with clear priorities and deadlines.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
          <button
            onClick={() => generateCareerTasks()}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200/70 rounded-lg transition-colors"
            title={`Suggest tasks for ${preferences.targetCareer}`}
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            Recommend {preferences.targetCareer.split(' ')[0]} Tasks
          </button>
          <button
            onClick={openCreateModal}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-xs transition-colors"
          >
            <Plus className="w-4 h-4" /> Create Task
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-xl p-3 sm:p-4 border border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.03)] flex flex-col lg:flex-row gap-3 items-stretch lg:items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search tasks by title or technology..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Priority Tabs */}
          <div className="flex items-center gap-0.5 p-1 bg-slate-100 rounded-lg border border-slate-200/60">
            {(['All', 'High', 'Medium', 'Low'] as const).map(p => (
              <button
                key={p}
                onClick={() => setActivePriorityFilter(p)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                  activePriorityFilter === p
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {p === 'All' ? 'All' : p}
              </button>
            ))}
          </div>

          {/* Status Tabs */}
          <div className="flex items-center gap-0.5 p-1 bg-slate-100 rounded-lg border border-slate-200/60">
            {(['All', 'Not Started', 'In Progress', 'Completed'] as const).map(s => (
              <button
                key={s}
                onClick={() => setActiveStatusFilter(s)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                  activeStatusFilter === s
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Task List */}
      {activePriorityFilter === 'All' ? (
        <div className="space-y-6">
          {/* High Priority Section */}
          {highPriorityTasks.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2.5 text-xs font-bold text-rose-800 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>High Priority ({highPriorityTasks.length})</span>
              </div>
              <div className="space-y-2">
                {highPriorityTasks.map(t => (
                  <CompactTaskRow
                    key={t.id}
                    task={t}
                    onToggle={toggleTaskStatus}
                    onEdit={openEditModal}
                    onDelete={deleteTask}
                    onPriorityChange={changeTaskPriority}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Medium Priority Section */}
          {mediumPriorityTasks.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2.5 text-xs font-bold text-amber-800 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Medium Priority ({mediumPriorityTasks.length})</span>
              </div>
              <div className="space-y-2">
                {mediumPriorityTasks.map(t => (
                  <CompactTaskRow
                    key={t.id}
                    task={t}
                    onToggle={toggleTaskStatus}
                    onEdit={openEditModal}
                    onDelete={deleteTask}
                    onPriorityChange={changeTaskPriority}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Low Priority Section */}
          {lowPriorityTasks.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2.5 text-xs font-bold text-slate-600 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-slate-400" />
                <span>Low Priority ({lowPriorityTasks.length})</span>
              </div>
              <div className="space-y-2">
                {lowPriorityTasks.map(t => (
                  <CompactTaskRow
                    key={t.id}
                    task={t}
                    onToggle={toggleTaskStatus}
                    onEdit={openEditModal}
                    onDelete={deleteTask}
                    onPriorityChange={changeTaskPriority}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-2">
          {filteredTasks.map(t => (
            <CompactTaskRow
              key={t.id}
              task={t}
              onToggle={toggleTaskStatus}
              onEdit={openEditModal}
              onDelete={deleteTask}
              onPriorityChange={changeTaskPriority}
            />
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredTasks.length === 0 && (
        <div className="bg-white rounded-xl p-10 text-center border border-slate-200/80">
          <CheckSquare className="w-8 h-8 text-slate-300 mx-auto mb-2.5" />
          <h3 className="text-sm font-bold text-slate-900">No matching tasks</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
            Try resetting your filters or create a new study task tailored to your schedule.
          </p>
          <button
            onClick={openCreateModal}
            className="mt-3.5 px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
          >
            Create Task
          </button>
        </div>
      )}

      {/* MODAL: CREATE / EDIT */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-lg w-full shadow-xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <h2 className="text-sm font-bold text-slate-900">
                {editingTaskId ? 'Edit Study Task' : 'New Study Task'}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-md"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveTask} className="p-5 space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Task Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Build an authentication pipeline with Express"
                  value={formTitle}
                  onChange={e => setFormTitle(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs sm:text-sm rounded-lg border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Description
                </label>
                <textarea
                  rows={2}
                  placeholder="Brief notes on project scope or milestones..."
                  value={formDescription}
                  onChange={e => setFormDescription(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs sm:text-sm rounded-lg border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Related Career / Tech
                  </label>
                  <input
                    type="text"
                    value={formTech}
                    onChange={e => setFormTech(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Priority Level
                  </label>
                  <select
                    value={formPriority}
                    onChange={e => setFormPriority(e.target.value as TaskPriority)}
                    className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                  >
                    <option value="High">High Priority</option>
                    <option value="Medium">Medium Priority</option>
                    <option value="Low">Low Priority</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Due Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    value={formDueDateTime}
                    onChange={e => setFormDueDateTime(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Estimated Time
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 45 mins, 2 hours"
                    value={formEstimatedTime}
                    onChange={e => setFormEstimatedTime(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Status
                  </label>
                  <select
                    value={formStatus}
                    onChange={e => setFormStatus(e.target.value as TaskStatus)}
                    className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                  >
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Resource URLs
                  </label>
                  <input
                    type="text"
                    placeholder="Comma-separated URLs"
                    value={formResources}
                    onChange={e => setFormResources(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Notes
                </label>
                <input
                  type="text"
                  placeholder="Key concepts, checklists, or steps..."
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
                  {editingTaskId ? 'Save Changes' : 'Create Task'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

interface CompactTaskRowProps {
  task: Task;
  onToggle: (id: string) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onPriorityChange: (id: string, priority: TaskPriority) => void;
}

const CompactTaskRow: React.FC<CompactTaskRowProps> = ({
  task,
  onToggle,
  onEdit,
  onDelete,
  onPriorityChange
}) => {
  const isDone = task.status === 'Completed';
  const countdown = formatRelativeCountdown(task.dueDateTime);
  const isHigh = task.priority === 'High';
  const isMedium = task.priority === 'Medium';

  return (
    <div
      className={`bg-white rounded-lg p-3 sm:px-4 sm:py-3 border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 ${
        isDone
          ? 'border-slate-200/60 bg-slate-50/40 text-slate-400'
          : countdown.isOverdue
          ? 'border-rose-200 bg-rose-50/20 shadow-xs'
          : 'border-slate-200/80 hover:border-slate-300 shadow-[0_1px_2px_rgba(0,0,0,0.02)]'
      }`}
    >
      {/* Left Checkbox & Title */}
      <div className="flex items-start sm:items-center gap-3 min-w-0 flex-1">
        <button
          onClick={() => onToggle(task.id)}
          className="mt-0.5 sm:mt-0 text-slate-400 hover:text-emerald-600 transition-colors shrink-0"
          title={isDone ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {isDone ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
          ) : (
            <Circle className="w-4 h-4 text-slate-300 hover:text-slate-500" />
          )}
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3
              className={`text-xs sm:text-sm font-semibold truncate ${
                isDone ? 'line-through text-slate-400' : 'text-slate-900'
              }`}
            >
              {task.title}
            </h3>

            {/* Restrained priority indicator */}
            <span
              className={`inline-flex items-center gap-1 text-[11px] font-semibold shrink-0 ${
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
          </div>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] text-slate-500 mt-0.5">
            <span className="truncate max-w-[180px]">{task.relatedTechOrCareer}</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>{task.estimatedTime}</span>
            {task.notes && (
              <>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="text-slate-400 truncate max-w-[200px]">{task.notes}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Right Date & Action Controls */}
      <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-1 sm:pt-0 border-t sm:border-t-0 border-slate-100">
        <span
          className={`text-[11px] font-mono font-medium ${
            countdown.isOverdue && !isDone
              ? 'text-rose-600 font-bold'
              : isDone
              ? 'text-slate-400'
              : 'text-slate-500'
          }`}
        >
          {isDone ? 'Done' : countdown.label}
        </span>

        <div className="flex items-center gap-1">
          <select
            value={task.priority}
            onChange={e => onPriorityChange(task.id, e.target.value as TaskPriority)}
            className="text-[11px] font-medium text-slate-500 bg-transparent border-0 focus:ring-0 cursor-pointer hover:text-slate-900 py-0.5"
            title="Change Priority"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <button
            onClick={() => onEdit(task)}
            className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded transition-colors"
            title="Edit Task"
          >
            <Edit2 className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="p-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded transition-colors"
            title="Delete Task"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
