"use client";
import { useState } from "react";

// Copiado de src/data/workouts.ts para garantir tipos iguais
export type WorkoutBlock = {
  label: string;
  content: string;
};

export type WorkoutDay = {
  date: string; // formato YYYY-MM-DD
  week: string;
  day: string;
  blocks: WorkoutBlock[];
};

function parsePlanilha(text: string, refDate: string, weekName: string): WorkoutDay[] {
  // Exemplo de parser simples: cada bloco separado por linha em branco, cada bloco começa com label na primeira linha
  // Você pode adaptar para o formato real da planilha
  const days = text.trim().split(/\n{2,}/);
  const startDate = new Date(refDate);
  return days.map((dayText, i) => {
    const lines = dayText.trim().split(/\n/);
    const dayName = lines[0].toUpperCase();
    const blocks: WorkoutBlock[] = lines.slice(1).map((block, idx) => ({
      label: String.fromCharCode(65 + idx),
      content: block.trim(),
    })).filter(b => b.content);
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return {
      date: `${yyyy}-${mm}-${dd}`,
      week: weekName,
      day: dayName,
      blocks,
    };
  });
}

function toTypeScriptExport(days: WorkoutDay[]): string {
  return `export const workouts: WorkoutDay[] = ${JSON.stringify(days, null, 2)};`;
}

export default function ImportacaoPage() {
  const [planilha, setPlanilha] = useState("");
  const [refDate, setRefDate] = useState("");
  const [weekName, setWeekName] = useState("");
  const [output, setOutput] = useState("");
  const [preview, setPreview] = useState<WorkoutDay[]>([]);

  function handleGenerate() {
    try {
      const days = parsePlanilha(planilha, refDate, weekName);
      setPreview(days);
      setOutput(toTypeScriptExport(days));
    } catch (e) {
      setOutput("Erro ao gerar: " + (e as Error).message);
      setPreview([]);
    }
  }

  function handleCopy() {
    navigator.clipboard.writeText(output);
  }

  return (
    <main className="min-h-screen bg-neutral-900 text-white flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Importar Planilha</h1>
      <textarea
        className="w-full max-w-xl h-40 p-2 rounded bg-neutral-800 text-white mb-2"
        placeholder="Cole aqui o texto da planilha (um dia por bloco, primeiro linha = nome do dia, linhas seguintes = blocos)"
        value={planilha}
        onChange={e => setPlanilha(e.target.value)}
      />
      <div className="flex gap-2 mb-2">
        <input
          type="date"
          className="bg-neutral-800 text-white rounded px-2 py-1"
          value={refDate}
          onChange={e => setRefDate(e.target.value)}
          placeholder="Data inicial"
        />
        <input
          type="text"
          className="bg-neutral-800 text-white rounded px-2 py-1"
          value={weekName}
          onChange={e => setWeekName(e.target.value)}
          placeholder="Nome da semana"
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded font-bold"
          onClick={handleGenerate}
        >
          Gerar
        </button>
      </div>
      {output && (
        <>
          <div className="w-full max-w-xl mb-2">
            <label className="font-bold">Bloco TypeScript para workouts.ts:</label>
            <textarea
              className="w-full h-40 p-2 rounded bg-neutral-800 text-green-200 font-mono text-xs"
              value={output}
              readOnly
            />
            <button
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded font-bold mt-1"
              onClick={handleCopy}
            >
              Copiar
            </button>
          </div>
          <div className="w-full max-w-xl mt-4">
            <label className="font-bold">Preview do JSON:</label>
            <pre className="bg-neutral-800 rounded p-2 text-xs text-white overflow-x-auto max-h-60">{JSON.stringify(preview, null, 2)}</pre>
          </div>
        </>
      )}
    </main>
  );
}
