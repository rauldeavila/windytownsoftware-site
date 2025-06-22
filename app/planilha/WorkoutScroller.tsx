'use client';
import { useRef, useState, useEffect } from 'react';
import WorkoutBlock from './WorkoutBlock';

type Block = {
  label: string;
  content: string;
};

type Props = {
  blocks: Block[];
};

export default function WorkoutScroller({ blocks }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [focusedIdx, setFocusedIdx] = useState(0);

  // Atualiza o foco ao scrollar
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const children = Array.from(containerRef.current.querySelectorAll('[data-block="true"]'));
      const center = window.innerHeight / 2;
      let minDist = Infinity;
      let idx = 0;
      children.forEach((child, i) => {
        const rect = (child as HTMLElement).getBoundingClientRect();
        const dist = Math.abs(rect.top + rect.height / 2 - center);
        if (dist < minDist) {
          minDist = dist;
          idx = i;
        }
      });
      setFocusedIdx(idx);
    };
    const ref = containerRef.current;
    if (ref) ref.addEventListener('scroll', handleScroll, { passive: true });
    return () => { if (ref) ref.removeEventListener('scroll', handleScroll); };
  }, []);

  // Tap/click em bloco: centraliza o bloco
  const handleBlockTap = (idx: number) => {
    if (!containerRef.current) return;
    const target = containerRef.current.querySelector(`[data-block-idx="${idx}"]`);
    if (target) {
      (target as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div
      ref={containerRef}
      className="h-[80vh] min-h-screen overflow-y-auto flex flex-col items-center px-2 scroll-smooth"
      style={{ scrollSnapType: 'y mandatory' }}
    >
      {blocks.map((block, idx) => (
        <div key={block.label + idx} className="w-full flex flex-col items-center">
          {/* Linha acima do bloco (exceto o primeiro) */}
          {idx > 0 && (
            <div className="w-full flex justify-center select-none mt-8 mb-2">
              <div className="border-t border-dashed border-gray-400 w-2/3" />
            </div>
          )}
          <div
            data-block="true"
            data-block-idx={idx}
            className={`snap-center max-w-md w-full min-h-[320px] flex items-center justify-center transition-all duration-300 cursor-pointer ${
              idx === focusedIdx
                ? 'z-10 opacity-100 blur-0 scale-100'
                : 'z-0 opacity-40 blur-sm scale-95'
            }`}
            style={{ margin: 'auto', scrollSnapAlign: 'center', pointerEvents: 'auto', paddingBottom: idx < blocks.length - 1 ? 48 : 0, paddingTop: idx > 0 ? 48 : 0 }}
            onClick={() => handleBlockTap(idx)}
          >
            <WorkoutBlock label={block.label} content={block.content} />
          </div>
        </div>
      ))}
    </div>
  );
}
