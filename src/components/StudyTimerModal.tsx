import React, { useState, useEffect } from 'react';
import { useStudy } from '../context/StudyContext';
import { X, Play, Pause, RotateCcw, Clock, CheckCircle2, Flame } from 'lucide-react';

export const StudyTimerModal: React.FC = () => {
  const { isStudyTimerOpen, setIsStudyTimerOpen, logStudyMinutes, userProgress } = useStudy();

  const [selectedDuration, setSelectedDuration] = useState<number>(25); // minutes
  const [secondsLeft, setSecondsLeft] = useState<number>(25 * 60);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [completedSessionsToday, setCompletedSessionsToday] = useState<number>(0);

  useEffect(() => {
    setSecondsLeft(selectedDuration * 60);
    setIsActive(false);
  }, [selectedDuration]);

  useEffect(() => {
    let interval: any = null;
    if (isActive && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft(sec => sec - 1);
      }, 1000);
    } else if (secondsLeft === 0 && isActive) {
      setIsActive(false);
      logStudyMinutes(selectedDuration);
      setCompletedSessionsToday(c => c + 1);
    }
    return () => clearInterval(interval);
  }, [isActive, secondsLeft, selectedDuration, logStudyMinutes]);

  if (!isStudyTimerOpen) return null;

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const progressPercent = ((selectedDuration * 60 - secondsLeft) / (selectedDuration * 60)) * 100;

  const handleReset = () => {
    setIsActive(false);
    setSecondsLeft(selectedDuration * 60);
  };

  const handleQuickLog = (mins: number) => {
    logStudyMinutes(mins);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-600" />
            <h2 className="text-base font-bold text-slate-900">Focus Study Session</h2>
          </div>
          <button
            onClick={() => setIsStudyTimerOpen(false)}
            className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Timer Core */}
        <div className="p-6 text-center space-y-6">
          {/* Duration Selector Tabs */}
          <div className="flex items-center justify-center gap-2 p-1 bg-slate-100 rounded-xl max-w-xs mx-auto">
            {[15, 25, 45, 60].map(duration => (
              <button
                key={duration}
                type="button"
                onClick={() => setSelectedDuration(duration)}
                className={`flex-1 py-1 text-xs font-semibold rounded-lg transition-all ${
                  selectedDuration === duration
                    ? 'bg-white text-indigo-600 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {duration}m
              </button>
            ))}
          </div>

          {/* Clock Display */}
          <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
            {/* SVG Progress Circle */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="44"
                className="stroke-slate-100"
                strokeWidth="8"
                fill="transparent"
              />
              <circle
                cx="50"
                cy="50"
                r="44"
                className="stroke-indigo-600 transition-all duration-300"
                strokeWidth="8"
                strokeDasharray={276.46}
                strokeDashoffset={276.46 - (276.46 * progressPercent) / 100}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-extrabold font-mono tracking-tight text-slate-900 tabular-nums">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </span>
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mt-1">
                {isActive ? 'In Focus Mode' : 'Ready'}
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => setIsActive(!isActive)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white shadow-xs transition-colors ${
                isActive ? 'bg-amber-600 hover:bg-amber-700' : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              {isActive ? (
                <>
                  <Pause className="w-4 h-4" /> Pause
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" /> Start Timer
                </>
              )}
            </button>
            <button
              onClick={handleReset}
              className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
              title="Reset Timer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Log Manual Minutes */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Or quick-log study time:</span>
            <div className="flex gap-1.5">
              <button
                onClick={() => handleQuickLog(15)}
                className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium"
              >
                +15m
              </button>
              <button
                onClick={() => handleQuickLog(30)}
                className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium"
              >
                +30m
              </button>
              <button
                onClick={() => handleQuickLog(60)}
                className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium"
              >
                +60m
              </button>
            </div>
          </div>

          {/* Summary Footer */}
          <div className="bg-slate-50 rounded-xl p-3 flex items-center justify-around text-xs">
            <div className="text-center">
              <span className="text-slate-500 block text-[11px]">Today’s Time</span>
              <span className="font-bold text-slate-900 font-mono">{userProgress.studyMinutesToday} mins</span>
            </div>
            <div className="w-px h-6 bg-slate-200" />
            <div className="text-center flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
              <div>
                <span className="text-slate-500 block text-[11px]">Streak</span>
                <span className="font-bold text-slate-900 font-mono">{userProgress.studyStreakDays} Days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
