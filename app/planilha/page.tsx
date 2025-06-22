'use client';
import { useState, useRef } from 'react';
import WorkoutScroller from './WorkoutScroller';
import { workouts } from '../../src/data/workouts';

function formatHeader(day) {
  return day ? `${day.week} - ${capitalize(day.day.toLowerCase())}` : '';
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

export default function PlanilhaPage() {
  // Sempre começa com o dia de hoje, mesmo se não houver treino
  const [selectedDate, setSelectedDate] = useState(getTodayDate());
  const [showCalendar, setShowCalendar] = useState(false);
  const [swipeAnim, setSwipeAnim] = useState<'left' | 'right' | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [nextDate, setNextDate] = useState<string | null>(null);
  const workout = findWorkoutByDate(selectedDate);
  const nextWorkout = nextDate ? findWorkoutByDate(nextDate) : null;

  // Swipe handler
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const minSwipe = 50; // px

  function onTouchStart(e) {
    if (transitioning) return;
    touchStartX.current = e.changedTouches[0].clientX;
  }
  function onTouchEnd(e) {
    if (transitioning) return;
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchEndX.current - touchStartX.current;
    if (Math.abs(diff) > minSwipe) {
      if (diff < 0) {
        // Swipe para a esquerda: próximo dia
        const next = getNextDate(selectedDate);
        if (next !== selectedDate) {
          setNextDate(next);
          setSwipeAnim('right');
          setTransitioning(true);
          setTimeout(() => {
            setSelectedDate(next);
            setSwipeAnim(null);
            setTransitioning(false);
            setNextDate(null);
          }, 350);
        }
      } else {
        // Swipe para a direita: dia anterior
        const prev = getPrevDate(selectedDate);
        if (prev !== selectedDate) {
          setNextDate(prev);
          setSwipeAnim('left');
          setTransitioning(true);
          setTimeout(() => {
            setSelectedDate(prev);
            setSwipeAnim(null);
            setTransitioning(false);
            setNextDate(null);
          }, 350);
        }
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
          {workout ? formatHeader(workout) : 'Nenhum treino para este dia.'}
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
        className="w-full max-w-md flex-1 relative overflow-x-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={{ minHeight: 400 }}
      >
        {/* Slide/Swipe animado estilo Apple */}
        <style jsx>{`
          .slide-anim {
            position: absolute;
            left: 0; top: 0; width: 100%; height: 100%;
            transition: transform 0.35s cubic-bezier(.4,0,.2,1), opacity 0.35s cubic-bezier(.4,0,.2,1);
            z-index: 10;
          }
          .slide-out-left { transform: translateX(-100%); opacity: 0; }
          .slide-in-right { transform: translateX(100%); opacity: 0; }
          .slide-in-right-active { transform: translateX(0); opacity: 1; }
          .slide-out-right { transform: translateX(100%); opacity: 0; }
          .slide-in-left { transform: translateX(-100%); opacity: 0; }
          .slide-in-left-active { transform: translateX(0); opacity: 1; }
          .swipe-border {
            position: absolute;
            top: 0; bottom: 0; width: 12px;
            background: linear-gradient(180deg, #38bdf8 60%, #0ea5e9 100%);
            border-radius: 8px;
            box-shadow: 0 0 24px 8px #38bdf8aa;
            z-index: 30;
            animation: fadeBorder 0.35s linear;
          }
          .swipe-border.left { left: 0; }
          .swipe-border.right { right: 0; }
          @keyframes fadeBorder {
            from { opacity: 1; }
            to { opacity: 0; }
          }
        `}</style>
        {/* Conteúdo principal e animação de swipe */}
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          {/* Bloco atual */}
          <div
            className={
              transitioning
                ? swipeAnim === 'right'
                  ? 'slide-anim slide-out-left'
                  : 'slide-anim slide-out-right'
                : 'slide-anim'
            }
            style={{ zIndex: 20 }}
          >
            {workout ? (
              <WorkoutScroller blocks={workout.blocks} />
            ) : (
              <div className="text-center mt-32 text-lg">Nenhum treino para este dia.</div>
            )}
          </div>
          {/* Bloco novo entrando */}
          {transitioning && nextWorkout && (
            <div
              className={
                'slide-anim ' +
                (swipeAnim === 'right'
                  ? 'slide-in-right slide-in-right-active'
                  : 'slide-in-left slide-in-left-active')
              }
              style={{ zIndex: 25 }}
            >
              <WorkoutScroller blocks={nextWorkout.blocks} />
            </div>
          )}
          {/* Bordas coloridas animadas */}
          {transitioning && (
            <div className={`swipe-border ${swipeAnim === 'right' ? 'right' : 'left'}`} />
          )}
        </div>
      </div>
    </main>
  );
}
