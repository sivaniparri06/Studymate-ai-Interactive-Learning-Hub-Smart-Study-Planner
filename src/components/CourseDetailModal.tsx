import React, { useState } from 'react';
import { useStudy } from '../context/StudyContext';
import {
  X,
  CheckCircle2,
  Circle,
  Clock,
  BookOpen,
  Award,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Code2,
  Lightbulb,
  Check,
  RotateCcw,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Module } from '../types';

export const CourseDetailModal: React.FC = () => {
  const {
    activeCourse,
    closeCourseDetail,
    userProgress,
    toggleModuleCompletion,
    recordQuizScore
  } = useStudy();

  const [activeTab, setActiveTab] = useState<'modules' | 'overview' | 'quiz'>('modules');
  const [expandedModuleId, setExpandedModuleId] = useState<string | null>(null);

  // Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [isQuizSubmitted, setIsQuizSubmitted] = useState<boolean>(false);
  const [showSolutionTips, setShowSolutionTips] = useState<Record<string, boolean>>({});

  if (!activeCourse) return null;

  const totalModules = activeCourse.modules.length;
  const completedModulesCount = activeCourse.modules.filter(m =>
    userProgress.completedModuleIds.includes(m.id)
  ).length;
  const courseProgressPercent = totalModules > 0
    ? Math.round((completedModulesCount / totalModules) * 100)
    : 0;

  const handleToggleModule = (modId: string) => {
    toggleModuleCompletion(modId, activeCourse.id);
  };

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (isQuizSubmitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const calculateQuizScore = () => {
    if (!activeCourse.quiz) return 0;
    let correct = 0;
    activeCourse.quiz.questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswerIndex) {
        correct++;
      }
    });
    return Math.round((correct / activeCourse.quiz.questions.length) * 100);
  };

  const handleSubmitQuiz = () => {
    setIsQuizSubmitted(true);
    const score = calculateQuizScore();
    recordQuizScore(activeCourse.quiz.id, score);
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setIsQuizSubmitted(false);
  };

  const toggleSolutionTip = (modId: string) => {
    setShowSolutionTips(prev => ({
      ...prev,
      [modId]: !prev[modId]
    }));
  };

  const recordedScore = userProgress.quizScores[activeCourse.quiz?.id];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 lg:p-6">
      <div className="bg-white rounded-2xl max-w-4xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-150">
        {/* Course Header Banner */}
        <div className="p-6 bg-white border-b border-slate-200 relative">
          <button
            onClick={closeCourseDetail}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-2 rounded-xl hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="max-w-2xl">
            {/* Meta tags */}
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-700 mb-2">
              <span className="bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">{activeCourse.category}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-600 font-medium">{activeCourse.skillLevel}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-500 font-medium">{activeCourse.totalDurationHours} hours total</span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">
              {activeCourse.title}
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {activeCourse.summary}
            </p>

            {/* Progress Bar */}
            <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-200/80">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-slate-700">
                  Course Progress: {completedModulesCount} of {totalModules} Modules Completed
                </span>
                <span className="font-mono text-indigo-600 font-bold">{courseProgressPercent}%</span>
              </div>
              <div className="w-full h-2 bg-slate-200/80 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                  style={{ width: `${courseProgressPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="px-6 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
          <button
            onClick={() => setActiveTab('modules')}
            className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'modules'
                ? 'bg-white text-indigo-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Course Curriculum ({totalModules} Modules)
          </button>
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'overview'
                ? 'bg-white text-indigo-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Learning Objectives & Overview
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'quiz'
                ? 'bg-white text-indigo-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Award className="w-3.5 h-3.5 text-amber-500" />
            Assessment & Quiz
            {recordedScore !== undefined && (
              <span className="text-[10px] font-mono font-bold text-emerald-600 ml-1">
                ({recordedScore}%)
              </span>
            )}
          </button>
        </div>

        {/* Modal Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: MODULES */}
          {activeTab === 'modules' && (
            <div className="space-y-4">
              {activeCourse.modules.map((mod: Module, index: number) => {
                const isCompleted = userProgress.completedModuleIds.includes(mod.id);
                const isExpanded = expandedModuleId === mod.id;

                return (
                  <div
                    key={mod.id}
                    className={`rounded-xl border transition-all ${
                      isCompleted
                        ? 'border-emerald-200 bg-emerald-50/20'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    {/* Module Summary Bar */}
                    <div className="p-4 flex items-start sm:items-center justify-between gap-4">
                      <div className="flex items-start sm:items-center gap-3">
                        <button
                          onClick={() => handleToggleModule(mod.id)}
                          className="mt-0.5 sm:mt-0 text-slate-400 hover:text-emerald-600 transition-colors shrink-0"
                          title={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                          ) : (
                            <Circle className="w-5 h-5 text-slate-300 hover:text-slate-500" />
                          )}
                        </button>
                        <div>
                          <div className="flex items-center gap-2 text-xs text-slate-500 mb-0.5">
                            <span className="font-semibold text-slate-700">Module {index + 1}</span>
                            <span aria-hidden="true">·</span>
                            <span>{mod.level}</span>
                            <span aria-hidden="true">·</span>
                            <span className="flex items-center gap-1 font-mono">
                              <Clock className="w-3 h-3" /> {mod.estimatedMinutes} mins
                            </span>
                          </div>
                          <h3 className={`text-base font-semibold ${isCompleted ? 'text-emerald-950' : 'text-slate-900'}`}>
                            {mod.title}
                          </h3>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => handleToggleModule(mod.id)}
                          className={`hidden sm:inline-flex px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                            isCompleted
                              ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {isCompleted ? 'Completed' : 'Mark Complete'}
                        </button>
                        <button
                          onClick={() => setExpandedModuleId(isExpanded ? null : mod.id)}
                          className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                        >
                          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    {/* Expanded Module Details */}
                    {isExpanded && (
                      <div className="px-5 pb-5 pt-2 border-t border-slate-100 space-y-4 text-sm text-slate-700">
                        {/* Overview */}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                            Overview
                          </h4>
                          <p className="text-slate-600 leading-relaxed">{mod.overview}</p>
                        </div>

                        {/* Topics Covered */}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                            Topics Covered
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {mod.topics.map((t, idx) => (
                              <span
                                key={idx}
                                className="text-xs text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md font-medium"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Step-by-Step Explanation */}
                        <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-900 mb-1.5 flex items-center gap-1.5">
                            <BookOpen className="w-4 h-4 text-indigo-600" /> Step-by-Step Technical Guide
                          </h4>
                          <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                            {mod.stepByStepExplanation}
                          </p>
                        </div>

                        {/* Hands-on Exercise */}
                        <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100 space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-950 flex items-center gap-1.5">
                              <Code2 className="w-4 h-4 text-indigo-600" />
                              Hands-On Exercise: {mod.handsOnExercise.title}
                            </h4>
                          </div>
                          <p className="text-xs sm:text-sm text-indigo-900/90 leading-relaxed">
                            {mod.handsOnExercise.instructions}
                          </p>

                          {mod.handsOnExercise.taskSnippet && (
                            <div className="bg-slate-900 text-slate-100 p-3 rounded-lg text-xs font-mono overflow-x-auto">
                              <pre>{mod.handsOnExercise.taskSnippet}</pre>
                            </div>
                          )}

                          {mod.handsOnExercise.solutionTip && (
                            <div className="pt-1">
                              <button
                                onClick={() => toggleSolutionTip(mod.id)}
                                className="text-xs font-semibold text-indigo-700 hover:text-indigo-900 flex items-center gap-1"
                              >
                                <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                                {showSolutionTips[mod.id] ? 'Hide Solution Guidance' : 'Reveal Solution Guidance'}
                              </button>
                              {showSolutionTips[mod.id] && (
                                <p className="mt-1.5 text-xs text-slate-600 bg-white p-2.5 rounded-lg border border-indigo-100">
                                  {mod.handsOnExercise.solutionTip}
                                </p>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Practical Project Deliverable */}
                        {mod.practicalProject && (
                          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                              Project Deliverable: {mod.practicalProject.title}
                            </h4>
                            <p className="text-xs text-slate-600 mb-1">
                              {mod.practicalProject.objective}
                            </p>
                            <span className="text-[11px] font-semibold text-indigo-700 block">
                              Deliverable: {mod.practicalProject.deliverable}
                            </span>
                          </div>
                        )}

                        {/* Learning Resources */}
                        {mod.learningResources.length > 0 && (
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                              Recommended Documentation & Guides
                            </h4>
                            <div className="flex flex-col gap-1.5">
                              {mod.learningResources.map((res, rIdx) => (
                                <a
                                  key={rIdx}
                                  href={res.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-xs text-indigo-600 hover:text-indigo-800 hover:underline flex items-center gap-1.5"
                                >
                                  <ExternalLink className="w-3 h-3" />
                                  <span>{res.title}</span>
                                  <span className="text-slate-400 font-mono text-[10px]">({res.type})</span>
                                </a>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Mobile Toggle Button */}
                        <div className="pt-2 sm:hidden flex justify-end">
                          <button
                            onClick={() => handleToggleModule(mod.id)}
                            className={`px-4 py-2 text-xs font-semibold rounded-lg w-full ${
                              isCompleted
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-indigo-600 text-white'
                            }`}
                          >
                            {isCompleted ? 'Marked as Completed' : 'Mark Module as Completed'}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 2: OVERVIEW & OBJECTIVES */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
                  Course Objectives & Competencies
                </h3>
                <div className="grid grid-cols-1 gap-2.5">
                  {activeCourse.learningObjectives.map((obj, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80"
                    >
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">{obj}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
                  Target Career Paths
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeCourse.relatedCareers.map((c, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-indigo-50 text-indigo-800 text-xs font-medium border border-indigo-200/70"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
                  Technology Stack Tags
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {activeCourse.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: QUIZ & ASSESSMENT */}
          {activeTab === 'quiz' && (
            <div className="space-y-6">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900">{activeCourse.quiz.title}</h3>
                  <p className="text-xs text-slate-600">{activeCourse.quiz.description}</p>
                  <span className="text-xs text-slate-500 font-medium mt-1 block">
                    Passing Threshold: {activeCourse.quiz.passingScore}%
                  </span>
                </div>
                {isQuizSubmitted && (
                  <div className="text-right">
                    <span className="text-2xl font-black font-mono text-indigo-600">
                      {calculateQuizScore()}%
                    </span>
                    <span
                      className={`block text-xs font-bold ${
                        calculateQuizScore() >= activeCourse.quiz.passingScore
                          ? 'text-emerald-600'
                          : 'text-rose-600'
                      }`}
                    >
                      {calculateQuizScore() >= activeCourse.quiz.passingScore ? 'PASSED' : 'NEEDS REVIEW'}
                    </span>
                  </div>
                )}
              </div>

              {/* Questions List */}
              <div className="space-y-5">
                {activeCourse.quiz.questions.map((q, qIndex) => {
                  const userAnswer = selectedAnswers[q.id];
                  const isCorrect = isQuizSubmitted && userAnswer === q.correctAnswerIndex;

                  return (
                    <div
                      key={q.id}
                      className={`p-4 rounded-xl border transition-all ${
                        isQuizSubmitted
                          ? isCorrect
                            ? 'border-emerald-300 bg-emerald-50/20'
                            : 'border-rose-300 bg-rose-50/20'
                          : 'border-slate-200 bg-white'
                      }`}
                    >
                      <h4 className="text-sm font-semibold text-slate-900 mb-3">
                        <span className="text-indigo-600 mr-1.5">Q{qIndex + 1}.</span>
                        {q.question}
                      </h4>

                      <div className="space-y-2">
                        {q.options.map((opt, optIndex) => {
                          const isOptionSelected = userAnswer === optIndex;
                          const isOptionCorrect = q.correctAnswerIndex === optIndex;

                          let optionStyles = 'border-slate-200 hover:border-slate-300 bg-white text-slate-700';
                          if (isQuizSubmitted) {
                            if (isOptionCorrect) {
                              optionStyles = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold';
                            } else if (isOptionSelected && !isOptionCorrect) {
                              optionStyles = 'border-rose-500 bg-rose-50 text-rose-950 font-medium';
                            }
                          } else if (isOptionSelected) {
                            optionStyles = 'border-indigo-600 bg-indigo-50 text-indigo-950 font-semibold ring-1 ring-indigo-600';
                          }

                          return (
                            <button
                              key={optIndex}
                              type="button"
                              onClick={() => handleSelectOption(q.id, optIndex)}
                              className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all flex items-center justify-between ${optionStyles}`}
                            >
                              <span>{opt}</span>
                              {isQuizSubmitted && isOptionCorrect && (
                                <Check className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Explanation Feedback */}
                      {isQuizSubmitted && (
                        <div className="mt-3 p-3 bg-slate-100 rounded-lg text-xs text-slate-700">
                          <span className="font-bold text-slate-900 block mb-0.5">Explanation:</span>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Submit / Reset Actions */}
              <div className="pt-2 flex items-center justify-end gap-3">
                {isQuizSubmitted ? (
                  <button
                    onClick={handleResetQuiz}
                    className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Retake Assessment
                  </button>
                ) : (
                  <button
                    onClick={handleSubmitQuiz}
                    disabled={Object.keys(selectedAnswers).length < activeCourse.quiz.questions.length}
                    className="px-5 py-2.5 text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-xs transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Submit Answers & Calculate Score
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <div className="text-xs text-slate-500">
            {completedModulesCount === totalModules ? (
              <span className="font-semibold text-emerald-600 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> You have completed all modules in this course!
              </span>
            ) : (
              <span>
                {totalModules - completedModulesCount} remaining modules to complete
              </span>
            )}
          </div>
          <button
            onClick={closeCourseDetail}
            className="px-4 py-2 text-xs font-semibold bg-slate-800 hover:bg-slate-900 text-white rounded-xl transition-colors"
          >
            Close Course View
          </button>
        </div>
      </div>
    </div>
  );
};
