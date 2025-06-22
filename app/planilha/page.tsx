'use client';
import { useState, useRef, useEffect } from 'react';
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

function getTodayDate() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function getClosestDate(dateStr) {
  // Se não houver treino para hoje, retorna o mais próximo anterior
  const idx = workouts.findIndex(w => w.date === dateStr);
  if (idx !== -1) return dateStr;
  // Busca o mais próximo anterior
  for (let i = workouts.length - 1; i >= 0; i--) {
    if (workouts[i].date < dateStr) return workouts[i].date;
  }
  // Se não houver anterior, retorna o primeiro
  return workouts[0].date;
}

export default function PlanilhaPage() {
  // Inicializa com o treino do dia atual (ou o mais próximo anterior)
  const [selectedDate, setSelectedDate] = useState(() => getClosestDate(getTodayDate()));
  const [showCalendar, setShowCalendar] = useState(false);
  const [swipeAnim, setSwipeAnim] = useState<'left' | 'right' | null>(null);
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
        setSwipeAnim('right');
        setTimeout(() => setSwipeAnim(null), 400);
        setTimeout(() => setSelectedDate(getNextDate(selectedDate)), 150);
      } else {
        // Swipe para a direita: dia anterior
        setSwipeAnim('left');
        setTimeout(() => setSwipeAnim(null), 400);
        setTimeout(() => setSelectedDate(getPrevDate(selectedDate)), 150);
      }
    }
  }

  // Remove animação se trocar de dia por outros meios
  useEffect(() => {
    setSwipeAnim(null);
  }, [selectedDate]);

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
        className={
          `w-full max-w-md flex-1 relative transition-transform duration-300 ` +
          (swipeAnim === 'left' ? ' apple-swipe-left ' : '') +
          (swipeAnim === 'right' ? ' apple-swipe-right ' : '')
        }
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Bordas e slide animados via CSS */}
        <style jsx>{`
          .apple-swipe-left {
            animation: appleSlideLeft 0.4s cubic-bezier(.4,0,.2,1);
            box-shadow: -8px 0 24px 0 #38bdf8cc;
          }
          .apple-swipe-left::before {
            content: '';
            position: absolute;
            left: 0; top: 0; bottom: 0;
            width: 10px;
            background: linear-gradient(180deg, #38bdf8 60%, #0ea5e9 100%);
            border-radius: 8px;
            box-shadow: 0 0 24px 8px #38bdf8aa;
            z-index: 40;
            animation: fadeBorder 0.4s linear;
          }
          .apple-swipe-right {
            animation: appleSlideRight 0.4s cubic-bezier(.4,0,.2,1);
            box-shadow: 8px 0 24px 0 #38bdf8cc;
          }
          .apple-swipe-right::after {
            content: '';
            position: absolute;
            right: 0; top: 0; bottom: 0;
            width: 10px;
            background: linear-gradient(180deg, #38bdf8 60%, #0ea5e9 100%);
            border-radius: 8px;
            box-shadow: 0 0 24px 8px #38bdf8aa;
            z-index: 40;
            animation: fadeBorder 0.4s linear;
          }
          @keyframes appleSlideLeft {
            0% { transform: translateX(0); }
            30% { transform: translateX(40px); }
            60% { transform: translateX(-16px); }
            100% { transform: translateX(0); }
          }
          @keyframes appleSlideRight {
            0% { transform: translateX(0); }
            30% { transform: translateX(-40px); }
            60% { transform: translateX(16px); }
            100% { transform: translateX(0); }
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
