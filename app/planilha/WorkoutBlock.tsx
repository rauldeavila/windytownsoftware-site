'use client';

type Props = {
  label: string;
  content: string;
};

export default function WorkoutBlock({ label, content }: Props) {
  return (
    <section className="w-full flex flex-col items-center">
      <h2 className="text-lg font-bold mb-2">Bloco {label}:</h2>
      <div className="bg-gray-600 bg-opacity-70 rounded-xl p-4 w-full text-center text-lg font-semibold whitespace-pre-line shadow-lg">
        {content}
      </div>
    </section>
  );
}
