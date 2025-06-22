// Estrutura de dados local para os treinos de CrossFit
// Cada semana tem dias, cada dia tem blocos

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

export const workouts: WorkoutDay[] = [
  // PRIMEIRA SEMANA
  {
    date: '2025-06-23', // Segunda-feira
    week: 'PRIMEIRA SEMANA',
    day: 'SEGUNDA',
    blocks: [
      { label: 'A', content: 'A+M+A' },
      { label: 'B', content: '1 hang squat clean + 1 split jerk + 1 power clean\n60%,65%,70%\n*Não fazer TNG' },
      { label: 'C', content: 'Clean and jerk\n(75%x1)2, 77%x1, 80%x1' },
      { label: 'D', content: 'Front squat\n70%x3, (80%x2)2, 85%x2' },
      { label: 'E', content: '3RDS\n1 strict ring muscle up/ring pull\n2 ring dips\n5 transições para a anilha\n*Descansar o necessário para qualidade' },
      { label: 'F', content: 'All out (heart rate zona 3 e 4)\n10 hang to overhead (2DB)\n50 DU\n5m HSW\nrest 2'\n10 hang to overhead\n50 DU\n10m HSW\nrest 2'\n10 hang to overhead\n50 DU\n15m HSW\nrest 2'\n10 hang to overhead\n50 DU\n20m HSW' },
    ],
  },
  {
    date: '2025-06-24',
    week: 'PRIMEIRA SEMANA',
    day: 'TERÇA',
    blocks: [
      { label: 'A', content: 'A+M+A' },
      { label: 'B', content: '4RDS\n250m de remo (all out)\n2' air bike (pace leve)\n1' caminhando' },
      { label: 'C', content: 'EMOM 8'(complex)\n1- 8 t2b + 3BMU*\n2- 7 t2b + 4 BMU\n3- 6 teb + 5 BMU\n4- rest\n*Ajuste para chest to bar' },
      { label: 'D', content: 'AMRAP 10' (heart rate zona 3)\n15-9-7 fat bar deadlifts*\n5-3-2 rope climb\n60m farms heavy\n*M:80\n*F:60kg' },
      { label: 'E', content: '3RDS\n20'' isometria na puxada alta (linha do peito))\n15'' hollow hold\n20'' hold paralelas\n15'' hold Superman no banco\n*Descansar o necessário entre as séries para qualidade' },
      { label: 'F', content: '3000m de remo\n*Pace:2:16 a 2:20/500m' },
    ],
  },
  {
    date: '2025-06-25',
    week: 'PRIMEIRA SEMANA',
    day: 'QUARTA',
    blocks: [
      { label: 'A', content: 'A+M+A' },
      { label: 'B', content: 'Corrida (VO2 target pace)\n1000m, 500m, 700m, 600m, 200m\nRest 3' entre cada volta' },
      { label: 'C', content: '10' de prática:\nHandstand hold (fora da parede)' },
      { label: 'D', content: 'Buy in\n20/18 cal bike\n4RDS\n8 hang power cleans*\n12 bar facing burpees\nCash out\n15/12 cal bike\n*M:60/50/40\n*F:45/35/30\nApós o workout 5' de bike pace leve' },
      { label: 'E', content: 'EMOM 8' (30'' ON/30'' OFF)\nMax Du' },
    ],
  },
  { date: '2025-06-26', week: 'PRIMEIRA SEMANA', day: 'QUINTA', blocks: [
    { label: 'A', content: 'A+M+A' },
    { label: 'B', content: 'Do bloco (altura dos joelhos)\n1 snatch high pull + 2 snatchs\n60%,65%,67%\n*Não fazer TNG' },
    { label: 'C', content: 'Snatch (Do bloco)\n(70%x2)2, 75%x1, 77%x1\n*Não fazer TNG' },
    { label: 'D', content: 'Back squat\n(70%x3)3' },
    { label: 'E', content: '3RDS (heart rate zona 3 e 4)\n12m overhead walking lunges (2Db)\n14 chest to bar\n12m front rack walking lunges (2DB)\n10 HSPU\nRest 3' pedalando leve na air bike' },
    { label: 'F', content: '3RDS\n20'' cadeira isométrica na parede (2kb)\n20'' remada isométrica trx\n20'' hollow hold\n*Descansar o necessário entre as séries' },
  ] },
  { date: '2025-06-27', week: 'PRIMEIRA SEMANA', day: 'SEXTA', blocks: [
    { label: 'A', content: 'A+M+A' },
    { label: 'B', content: '1000m de remo (Max esforço)' },
    { label: 'C', content: 'AMRAP 15' (heart rate zona 2 e 3)\n350m de remo\n7 power cleans (60%)\n300m de remo\n5 power cleans (70%)\n300m de remo\n3 power cleans (75%)\n300m de remo\n1 power clean (80%)\n300m de remo\n10 power cleans (50%)' },
    { label: 'D', content: 'EMOM 16' (30'' ON/30'' OFF)\n1- T2b\n2- cal bike\n3- full swings\n4- DU\n*pace moderado, para volume.' },
    { label: 'E', content: '3RDS\n15 GHD sit ups\n30'' fornt rack hold (2KB/DB)\n5 barbell roll out\n*Descansar o necessário entre as series' },
    { label: 'F', content: '12 a 15' aeróbico de baixa intensidade (heart rate zona 2)' },
  ] },
  { date: '2025-06-28', week: 'PRIMEIRA SEMANA', day: 'SÁBADO', blocks: [
    { label: 'A', content: 'Split jerk\n(70%x2)2, 75%x1, 80%x1, 85%x1, 87%x1' },
    { label: 'B', content: 'Dead front squat\n4x2\n*Profundidade complete\n*Máxima intenção de velocidade na subida\n*1 rep na reserva' },
    { label: 'C', content: '10' prática de RMU (para qualidade)' },
    { label: 'D', content: '4 RDS\n2 strict HSPU\n2 burpee box jump over\n4 HSPU\n4 burpee box jump over\n6 bar muscle up\n6 burpee box jump over\n8 pull ups\n8 burpee box jump over\nRest 1' para volume\n*Ajustar seu ritmo para manter consistência' },
    { label: 'E', content: 'AMRAP 6'\n30 DU\n2,4,6,8..Hang clean and jerk (1DB)' },
  ] },
  // SEGUNDA SEMANA
  { date: '2025-06-30', week: 'SEGUNDA SEMANA', day: 'SEGUNDA', blocks: [
    { label: 'A', content: 'A+M+A' },
    { label: 'B', content: '1 snatch Deadlift + 1 snatch\n65%x1, 67%x1, (70%x1)2\n*Não fazer TNG' },
    { label: 'C', content: 'Snatch\n(75%x2)2, 77%x1, 80%x1, 85%x1' },
    { label: 'D', content: 'Back squat\n70%x3, (80%x2)2, 85%x2' },
    { label: 'E', content: 'Déficit strict HSPU (Maior nível de dificuldade)\n5-3-3-2-2-1-1' },
    { label: 'F', content: 'EMOM 18'\n1- 15 wall balls\n2- 12 toes to bar\n3- 10/8 cal bike' },
  ] },
  { date: '2025-07-01', week: 'SEGUNDA SEMANA', day: 'TERÇA', blocks: [
    { label: 'A', content: 'A+M+A' },
    { label: 'B', content: 'Bench press\n(70%x3)3' },
    { label: 'C', content: 'Strict ring dips (com carga)\n5-3-3-2-2-1-1' },
    { label: 'D', content: 'Plio push ups (com band)\n4x3\n*Descansar o necessário para qualidade' },
    { label: 'E', content: '6RDS\na cada 2:30\n300m de remo\n10 bar facing burpees' },
    { label: 'F', content: '3RDS\n30'' hold paralelas\n30'' font rack 2KB\n*Descansar o necessário entre as séries' },
  ] },
  { date: '2025-07-02', week: 'SEGUNDA SEMANA', day: 'QUARTA', blocks: [
    { label: 'A', content: 'A+M+A' },
    { label: 'B', content: 'Deadlift set up\n70%x3, (80%x2)2, 85%x2' },
    { label: 'C', content: 'Do bloco (altura dos joelhos)\n1 clean pull + 2 squat cleans\n60%, 65%, 70%\n*Não fazer TNG' },
    { label: 'D', content: 'Squat clean (do bloco)\n75%x2, (80%x2)2, 85%x1\n*Não fazer TNG' },
    { label: 'E', content: 'All out (heart rate zona 3 e 4)\n10 Deadlifts*\n10 box jump\n40 DU\n4 rope climb\nRest 3' (pedalando/ caminhando leve)\n10 Deadlifts\n10 box jump\n40 DU\n6 rope climb\nRest 3' (pedalando/caminhando leve)\n10 Deadlifts\n10 box jump\n40 DU\n8 rope climb\nRest 3' (pedalando/caminhando leve)\n*M:100/90/80kg\n*F: 75/70/65kg\n* Se necessário ajustar carga para próximo a 50%' },
    { label: 'F', content: '3RDS\n20'' isometria na puxada alta (linha do peito)\n20'' cadeira isométrica parede (2kb)\nCOACH GUTO GIORDANI\n20'' hollow\n*Descansar o necessário entre as séries' },
  ] },
  { date: '2025-07-03', week: 'SEGUNDA SEMANA', day: 'QUINTA', blocks: [
    { label: 'A', content: 'A+M+A' },
    { label: 'B', content: '5RDS (para qualidade)\n1' Max dist HSW\n1' rest' },
    { label: 'C', content: 'AMRAP 12' (heart rate zona 2 e 3)\n1,2,3,4…wall walk\n20m farms (2DB/KB)\n3,6,9..HSPU\n20m farms (2DB/KB)' },
    { label: 'D', content: '4RDS (all out)\nA cada 2:30\n18/16 cal bike\n10 burpees sobre o muro' },
    { label: 'E', content: '2RDS\n1500m de remo\n*Pace:2:12 a 2:16' },
  ] },
  { date: '2025-07-04', week: 'SEGUNDA SEMANA', day: 'SEXTA', blocks: [
    { label: 'A', content: 'A+M+A' },
    { label: 'B', content: 'Hang power clean\n(70 a 77%x2)4' },
    { label: 'C', content: 'Box jump (para altura)\n4x2' },
    { label: 'D', content: 'Corrida (VO2 target pace)\n4x800m\ncaminhar 3' entre os RDS\n2X200\ncaminhar 200m entre os RDS' },
    { label: 'E', content: 'Para volume de reps\nEMOM 12' (30'' ON/30'' OFF)\n1- Fat bar muscle clean\n2- GHD sit ups\n3- full swings\n4- DU' },
  ] },
];
