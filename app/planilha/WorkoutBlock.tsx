'use client';

import { useState, useMemo } from 'react';

type Props = {
  label: string;
  content: string;
};

export default function WorkoutBlock({ label, content }: Props) {
  // Valor temporário do 100 % (1RM) definido pelo usuário para este bloco
  const [oneRM, setOneRM] = useState<number | null>(null);

  // Verifica se o bloco contém pelo menos um percentual
  const hasPercent = useMemo(() => /(\d{1,3})%/.test(content), [content]);

  // Gera o texto com os cálculos de carga sempre que oneRM muda
  const formatted = useMemo(() => {
    if (oneRM == null) return content;
    return content.replace(/(\d{1,3})%/g, (_, pct: string) => {
      const pctNum = parseInt(pct, 10);
      if (isNaN(pctNum)) return _; // fallback – deve ser raro
      const kg = Math.round((pctNum / 100) * oneRM);
      return `${pctNum}% (${kg} kg)`;
    });
  }, [content, oneRM]);

  const handleTap = () => {
    if (!hasPercent) return; // nada a fazer
    const current = oneRM != null ? String(oneRM) : '';
    const input = prompt('Digite a carga (kg) que representa 100% para este bloco:', current);
    if (!input) return;
    const value = parseFloat(input.replace(',', '.'));
    if (!isNaN(value) && value > 0) {
      setOneRM(value);
    }
  };

  return (
    <section className="w-full flex flex-col items-center" onDoubleClick={handleTap}>
      <h2 className="text-lg font-bold mb-2">Bloco {label}:</h2>
      <div className="bg-gray-600 bg-opacity-70 rounded-xl p-4 w-full text-center text-lg font-semibold whitespace-pre-line shadow-lg">
        {formatted}
      </div>
      {hasPercent && oneRM == null && (
        <button
          className="mt-2 text-sm underline text-blue-300 hover:text-blue-200 focus:outline-none"
          onClick={handleTap}
        >
          Definir 100 % (kg)
        </button>
      )}
      {hasPercent && oneRM != null && (
        <button
          className="mt-2 text-sm underline text-red-300 hover:text-red-200 focus:outline-none"
          onClick={() => setOneRM(null)}
        >
          Remover 100 %
        </button>
      )}
    </section>
  );
}
