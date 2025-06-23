'use client';
import { useState, useRef } from 'react';
import WorkoutScroller from './WorkoutScroller';
import { workouts } from '../../src/data/workouts';

function formatHeader(day, dateStr) {
  if (day) return `${day.week} - ${capitalize(day.day.toLowerCase())}`;
  // Se não houver treino, mostra a data formatada
  return formatDate(dateStr);
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function formatDate(dateStr) {
  const [yyyy, mm, dd] = dateStr.split('-');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${dd} ${months[parseInt(mm, 10) - 1]} ${yyyy}`;
}
function findWorkoutByDate(dateStr) {
  return workouts.find(w => w.date === dateStr);
}
function getNextDateWithWorkout(dateStr) {
  const idx = workouts.findIndex(w => w.date === dateStr);
  for (let i = idx + 1; i < workouts.length; i++) {
    if (workouts[i].blocks && workouts[i].blocks.length > 0) return workouts[i].date;
  }
  return dateStr;
}
function getPrevDateWithWorkout(dateStr) {
  const idx = workouts.findIndex(w => w.date === dateStr);
  for (let i = idx - 1; i >= 0; i--) {
    if (workouts[i].blocks && workouts[i].blocks.length > 0) return workouts[i].date;
  }
  return dateStr;
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
function getTodayDate() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

export default function PlanilhaPage() {
  // Sempre começa com o dia de hoje, mesmo se não houver treino
  const [selectedDate, setSelectedDate] = useState(getTodayDate());
  const [showCalendar, setShowCalendar] = useState(false);
  const [swipeBorder, setSwipeBorder] = useState<'left' | 'right' | null>(null);
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
        // Swipe para a esquerda: próximo dia COM treino
        setSwipeBorder('right');
        setTimeout(() => setSwipeBorder(null), 700);
        setSelectedDate(getNextDateWithWorkout(selectedDate));
      } else {
        // Swipe para a direita: dia anterior COM treino
        setSwipeBorder('left');
        setTimeout(() => setSwipeBorder(null), 700);
        setSelectedDate(getPrevDateWithWorkout(selectedDate));
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
          {formatHeader(workout, selectedDate)}
        </button>
        {showCalendar && (
          <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40" onClick={() => setShowCalendar(false)}>
            <div className="mt-24 bg-neutral-800 rounded-lg p-4 shadow-lg" onClick={e => e.stopPropagation()}>
              <input
                autoFocus
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
        className={
          `w-full max-w-md flex-1 relative ` +
          (swipeBorder === 'left' ? ' swipe-border-left ' : '') +
          (swipeBorder === 'right' ? ' swipe-border-right ' : '')
        }
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Bordas animadas via CSS */}
        <style jsx>{`
          .swipe-border-left::before {
            content: '';
            position: absolute;
            left: 0; top: 0; bottom: 0;
            width: 8px;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 0 16px 4px #fff8;
            z-index: 40;
            animation: fadeBorder 0.7s linear;
          }
          .swipe-border-right::after {
            content: '';
            position: absolute;
            right: 0; top: 0; bottom: 0;
            width: 8px;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 0 16px 4px #fff8;
            z-index: 40;
            animation: fadeBorder 0.7s linear;
          }
          @keyframes fadeBorder {
            from { opacity: 1; }
            to { opacity: 0; }
          }
        `}</style>
        {workout ? (
          <WorkoutScroller blocks={workout.blocks} />
        ) : (
          <div className="text-center mt-32 text-lg">Nenhum treino para este dia.</div>
        )}
      </div>
    </main>
  );
}
