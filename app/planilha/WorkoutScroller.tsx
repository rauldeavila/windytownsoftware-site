'use client';
import { useRef, useState, useLayoutEffect } from 'react';
import WorkoutBlock from './WorkoutBlock';

type Block = {
  label: string;
  content: string;
};

type Props = {
  blocks: Block[];
};

export default function WorkoutScroller({ blocks }: Props) {
  const [focusedIdx, setFocusedIdx] = useState(0);
  const topLineRef = useRef<HTMLDivElement>(null);
  const bottomLineRef = useRef<HTMLDivElement>(null);
  const [topLineY, setTopLineY] = useState<number | null>(null);
  const [bottomLineY, setBottomLineY] = useState<number | null>(null);

  useLayoutEffect(() => {
    if (topLineRef.current) {
      setTopLineY(topLineRef.current.getBoundingClientRect().bottom);
    } else {
      setTopLineY(null);
    }
    if (bottomLineRef.current) {
      setBottomLineY(bottomLineRef.current.getBoundingClientRect().top);
    } else {
      setBottomLineY(null);
    }
  }, [focusedIdx]);

  // Handlers para áreas de navegação
  const handlePrev = () => {
    if (focusedIdx > 0) setFocusedIdx(focusedIdx - 1);
  };
  const handleNext = () => {
    if (focusedIdx < blocks.length - 1) setFocusedIdx(focusedIdx + 1);
  };

  return (
    <div className="h-[80vh] min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-2">
      {/* Área de navegação para voltar (acima do bloco) */}
      {focusedIdx > 0 && (
        <>
          {/* Linha e bloco anterior */}
          <div className="w-full flex flex-col items-center mb-2 relative z-10 pointer-events-none">
            <div className="max-w-md w-full opacity-40 blur-sm scale-95 mt-8 pb-12">
              <WorkoutBlock label={blocks[focusedIdx-1].label} content={blocks[focusedIdx-1].content} />
            </div>
            <div ref={topLineRef} className="w-full flex justify-center select-none mt-2">
              <div className="border-t border-dashed border-gray-400 w-2/3" />
            </div>
          </div>
          {/* Área de clique absoluta do topo até a linha */}
          {topLineY !== null && (
            <button
              className="fixed left-0 right-0 z-20 bg-transparent focus:outline-none cursor-pointer"
              style={{ top: 0, height: topLineY, pointerEvents: 'auto' }}
              aria-label="Voltar para o bloco anterior"
              onClick={handlePrev}
            />
          )}
        </>
      )}
      {/* Bloco em foco (não clicável para navegação) */}
      <div
        data-block="true"
        data-block-idx={focusedIdx}
        className="z-30 max-w-md w-full transition-all duration-300"
        style={{ margin: 'auto', pointerEvents: 'auto' }}
      >
        <WorkoutBlock label={blocks[focusedIdx].label} content={blocks[focusedIdx].content} />
      </div>
      {/* Área de navegação para avançar (abaixo do bloco) */}
      {focusedIdx < blocks.length - 1 && (
        <>
          {/* Linha e bloco seguinte */}
          <div className="w-full flex flex-col items-center mt-2 relative z-10 pointer-events-none">
            <div ref={bottomLineRef} className="w-full flex justify-center select-none mb-2">
              <div className="border-t border-dashed border-gray-400 w-2/3" />
            </div>
            <div className="max-w-md w-full opacity-40 blur-sm scale-95 pt-12">
              <WorkoutBlock label={blocks[focusedIdx+1].label} content={blocks[focusedIdx+1].content} />
            </div>
          </div>
          {/* Área de clique absoluta da linha até o fim da tela */}
          {bottomLineY !== null && (
            <button
              className="fixed left-0 right-0 z-20 bg-transparent focus:outline-none cursor-pointer"
              style={{ top: bottomLineY, bottom: 0, height: `calc(100vh - ${bottomLineY}px)`, pointerEvents: 'auto' }}
              aria-label="Avançar para o próximo bloco"
              onClick={handleNext}
            />
          )}
        </>
      )}
    </div>
  );
}
