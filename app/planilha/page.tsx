'use client';
import { useState, useRef } from 'react';
import WorkoutScroller from './WorkoutScroller';
import { workouts } from '../../src/data/workouts';

function formatHeader(day) {
  return `${day.week} - ${capitalize(day.day.toLowerCase())}`;
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function findWorkoutByDate(dateStr) {
  return workouts.find(w => w.date === dateStr);
}

function getNextDate(dateStr) {
  const idx = workouts.findIndex(w => w.date === dateStr);
  if (idx >= 0 && idx < workouts.length - 1) return workouts[idx + 1].date;
  return dateStr;
}

function getPrevDate(dateStr) {
  const idx = workouts.findIndex(w => w.date === dateStr);
  if (idx > 0) return workouts[idx - 1].date;
  return dateStr;
}

export default function PlanilhaPage() {
  // Data inicial: próxima segunda-feira (2025-06-23)
  const [selectedDate, setSelectedDate] = useState('2025-06-23');
  const [showCalendar, setShowCalendar] = useState(false);
  const workout = findWorkoutByDate(selectedDate);

  // Swipe handler
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const minSwipe = 50; // px

  function onTouchStart(e) {
    touchStartX.current = e.changedTouches[0].clientX;
  }
  function onTouchEnd(e) {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchEndX.current - touchStartX.current;
    if (Math.abs(diff) > minSwipe) {
      if (diff < 0) {
        // Swipe para a esquerda: próximo dia
        setSelectedDate(getNextDate(selectedDate));
      } else {
        // Swipe para a direita: dia anterior
        setSelectedDate(getPrevDate(selectedDate));
      }
    }
  }

  return (
    <main className="min-h-screen bg-neutral-900 text-white flex flex-col items-center">
      {/* Header fixo abaixo do notch */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center items-center pt-[env(safe-area-inset-top)] pb-2 bg-neutral-900/80 backdrop-blur-md">
        <button
          className="text-lg font-bold tracking-wide px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
          onClick={() => setShowCalendar(true)}
        >
          {workout ? formatHeader(workout) : 'Selecione um dia'}
        </button>
        {showCalendar && (
          <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40" onClick={() => setShowCalendar(false)}>
            <div className="mt-24 bg-neutral-800 rounded-lg p-4 shadow-lg" onClick={e => e.stopPropagation()}>
              <input
                type="date"
                className="bg-neutral-700 text-white rounded px-2 py-1"
                value={selectedDate}
                min="2025-06-23"
                max="2025-07-04"
                onChange={e => {
                  setSelectedDate(e.target.value);
                  setShowCalendar(false);
                }}
              />
            </div>
          </div>
        )}
      </div>
      <div
        className="w-full max-w-md flex-1"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {workout ? (
          <WorkoutScroller blocks={workout.blocks} />
        ) : (
          <div className="text-center mt-32 text-lg">Nenhum treino para este dia.</div>
        )}
      </div>
    </main>
  );
}
