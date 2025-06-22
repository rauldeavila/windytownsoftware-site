import WorkoutScroller from './WorkoutScroller';

export default function PlanilhaPage() {
  // Blocos hardcoded para SEGUNDA
  const blocks = [
    {
      label: 'A',
      content: 'A+M+A'
    },
    {
      label: 'B',
      content: `1 hang squat clean + 1 split jerk + 1 power clean\n60%,65%,70%\n*Não fazer TNG`
    },
    {
      label: 'C',
      content: `Clean and jerk\n(75%x1)2, 77%x1, 80%x1`
    },
    {
      label: 'D',
      content: `Front squat\n70%x3, (80%x2)2, 85%x2`
    },
    {
      label: 'E',
      content: `3RDS\n1 strict ring muscle up/ring pull\n2 ring dips\n5 transições para a anilha\n*Descansar o necessário para qualidade`
    },
    {
      label: 'F',
      content: `All out (heart rate zona 3 e 4)\n10 hang to overhead (2DB)\n50 DU\n5m HSW\nrest 2’\n10 hang to overhead\n50 DU\n10m HSW\nrest 2’\n10 hang to overhead\n50 DU\n15m HSW\nrest 2’\n10 hang to overhead\n50 DU\n20m HSW`
    }
  ];

  return (
    <main className="min-h-screen bg-neutral-900 text-white flex flex-col items-center">
      {/* Header fixo abaixo do notch */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center items-center pt-[env(safe-area-inset-top)] pb-2 bg-neutral-900/80 backdrop-blur-md">
        <span className="text-lg font-bold tracking-wide">PRIMEIRA SEMANA - Segunda</span>
      </div>
      <div className="w-full max-w-md flex-1">
        <WorkoutScroller blocks={blocks} />
      </div>
    </main>
  );
}
