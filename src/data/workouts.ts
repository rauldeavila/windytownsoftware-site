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
    date: "2025-06-23", // Segunda-feira
    week: "PRIMEIRA SEMANA",
    day: "SEGUNDA",
    blocks: [
      { label: "A", content: "A+M+A" },
      { label: "B", content: "1 hang squat clean + 1 split jerk + 1 power clean\n60%,65%,70%\n*Não fazer TNG" },
      { label: "C", content: "Clean and jerk\n(75%x1)2, 77%x1, 80%x1" },
      { label: "D", content: "Front squat\n70%x3, (80%x2)2, 85%x2" },
      { label: "E", content: "3RDS\n1 strict ring muscle up/ring pull\n2 ring dips\n5 transições para a anilha\n*Descansar o necessário para qualidade" },
      { label: "F", content: "All out (heart rate zona 3 e 4)\n10 hang to overhead (2DB)\n50 DU\n5m HSW\nrest 2'\n10 hang to overhead\n50 DU\n10m HSW\nrest 2'\n10 hang to overhead\n50 DU\n15m HSW\nrest 2'\n10 hang to overhead\n50 DU\n20m HSW" },
    ],
  },
  {
    date: "2025-06-24",
    week: "PRIMEIRA SEMANA",
    day: "TERÇA",
    blocks: [
      { label: "A", content: "A+M+A" },
      { label: "B", content: "4RDS\n250m de remo (all out)\n2' air bike (pace leve)\n1' caminhando" },
      { label: "C", content: "EMOM 8'(complex)\n1- 8 t2b + 3BMU*\n2- 7 t2b + 4 BMU\n3- 6 teb + 5 BMU\n4- rest\n*Ajuste para chest to bar" },
      { label: "D", content: "AMRAP 10' (heart rate zona 3)\n15-9-7 fat bar deadlifts*\n5-3-2 rope climb\n60m farms heavy\n*M:80\n*F:60kg" },
      { label: "E", content: "3RDS\n20'' isometria na puxada alta (linha do peito))\n15'' hollow hold\n20'' hold paralelas\n15'' hold Superman no banco\n*Descansar o necessário entre as séries para qualidade" },
      { label: "F", content: "3000m de remo\n*Pace:2:16 a 2:20/500m" },
    ],
  },
  {
    date: "2025-06-25",
    week: "PRIMEIRA SEMANA",
    day: "QUARTA",
    blocks: [
      { label: "A", content: "A+M+A" },
      { label: "B", content: "Corrida (VO2 target pace)\n1000m, 500m, 700m, 600m, 200m\nRest 3' entre cada volta" },
      { label: "C", content: "10' de prática:\nHandstand hold (fora da parede)" },
      { label: "D", content: "Buy in\n20/18 cal bike\n4RDS\n8 hang power cleans*\n12 bar facing burpees\nCash out\n15/12 cal bike\n*M:60/50/40\n*F:45/35/30\nApós o workout 5' de bike pace leve" },
      { label: "E", content: "EMOM 8' (30'' ON/30'' OFF)\nMax Du" },
    ],
  },
  { date: "2025-06-26", week: "PRIMEIRA SEMANA", day: "QUINTA", blocks: [
    { label: "A", content: "A+M+A" },
    { label: "B", content: "Do bloco (altura dos joelhos)\n1 snatch high pull + 2 snatchs\n60%,65%,67%\n*Não fazer TNG" },
    { label: "C", content: "Snatch (Do bloco)\n(70%x2)2, 75%x1, 77%x1\n*Não fazer TNG" },
    { label: "D", content: "Back squat\n(70%x3)3" },
    { label: "E", content: "3RDS (heart rate zona 3 e 4)\n12m overhead walking lunges (2Db)\n14 chest to bar\n12m front rack walking lunges (2DB)\n10 HSPU\nRest 3' pedalando leve na air bike" },
    { label: "F", content: "3RDS\n20'' cadeira isométrica na parede (2kb)\n20'' remada isométrica trx\n20'' hollow hold\n*Descansar o necessário entre as séries" },
  ] },
  { date: "2025-06-27", week: "PRIMEIRA SEMANA", day: "SEXTA", blocks: [
    { label: "A", content: "A+M+A" },
    { label: "B", content: "1000m de remo (Max esforço)" },
    { label: "C", content: "AMRAP 15' (heart rate zona 2 e 3)\n350m de remo\n7 power cleans (60%)\n300m de remo\n5 power cleans (70%)\n300m de remo\n3 power cleans (75%)\n300m de remo\n1 power clean (80%)\n300m de remo\n10 power cleans (50%)" },
    { label: "D", content: "EMOM 16' (30'' ON/30'' OFF)\n1- T2b\n2- cal bike\n3- full swings\n4- DU\n*pace moderado, para volume." },
    { label: "E", content: "3RDS\n15 GHD sit ups\n30'' fornt rack hold (2KB/DB)\n5 barbell roll out\n*Descansar o necessário entre as series" },
    { label: "F", content: "12 a 15' aeróbico de baixa intensidade (heart rate zona 2)" },
  ] },
  { date: "2025-06-28", week: "PRIMEIRA SEMANA", day: "SÁBADO", blocks: [
    { label: "A", content: "Split jerk\n(70%x2)2, 75%x1, 80%x1, 85%x1, 87%x1" },
    { label: "B", content: "Dead front squat\n4x2\n*Profundidade complete\n*Máxima intenção de velocidade na subida\n*1 rep na reserva" },
    { label: "C", content: "10' prática de RMU (para qualidade)" },
    { label: "D", content: "4 RDS\n2 strict HSPU\n2 burpee box jump over\n4 HSPU\n4 burpee box jump over\n6 bar muscle up\n6 burpee box jump over\n8 pull ups\n8 burpee box jump over\nRest 1'\n*Para volume\n*Ajustar seu ritmo para manter consistência" },
    { label: "E", content: "AMRAP 6'\n30 DU\n2,4,6,8..Hang clean and jerk (1DB)" },
  ] },
  // SEGUNDA SEMANA
  { date: "2025-06-30", week: "SEGUNDA SEMANA", day: "SEGUNDA", blocks: [
    { label: "A", content: "A+M+A" },
    { label: "B", content: "1 snatch Deadlift + 1 snatch\n65%x1, 67%x1, (70%x1)2\n*Não fazer TNG" },
    { label: "C", content: "Snatch\n(75%x2)2, 77%x1, 80%x1, 85%x1" },
    { label: "D", content: "Back squat\n70%x3, (80%x2)2, 85%x2" },
    { label: "E", content: "Déficit strict HSPU (Maior nível de dificuldade)\n5-3-3-2-2-1-1" },
    { label: "F", content: "EMOM 18'\n1- 15 wall balls\n2- 12 toes to bar\n3- 10/8 cal bike" },
  ] },
  { date: "2025-07-01", week: "SEGUNDA SEMANA", day: "TERÇA", blocks: [
    { label: "A", content: "A+M+A" },
    { label: "B", content: "Bench press\n(70%x3)3" },
    { label: "C", content: "Strict ring dips (com carga)\n5-3-3-2-2-1-1" },
    { label: "D", content: "Plio push ups (com band)\n4x3\n*Descansar o necessário para qualidade" },
    { label: "E", content: "6RDS\na cada 2:30\n300m de remo\n10 bar facing burpees" },
    { label: "F", content: "3RDS\n30'' hold paralelas\n30'' font rack 2KB\n*Descansar o necessário entre as séries" },
  ] },
  { date: "2025-07-02", week: "SEGUNDA SEMANA", day: "QUARTA", blocks: [
    { label: "A", content: "A+M+A" },
    { label: "B", content: "Deadlift set up\n70%x3, (80%x2)2, 85%x2" },
    { label: "C", content: "Do bloco (altura dos joelhos)\n1 clean pull + 2 squat cleans\n60%, 65%, 70%\n*Não fazer TNG" },
    { label: "D", content: "Squat clean (do bloco)\n75%x2, (80%x2)2, 85%x1\n*Não fazer TNG" },
    { label: "E", content: "All out (heart rate zona 3 e 4)\n10 Deadlifts*\n10 box jump\n40 DU\n4 rope climb\nRest 3' (pedalando/ caminhando leve)\n10 Deadlifts\n10 box jump\n40 DU\n6 rope climb\nRest 3' (pedalando/caminhando leve)\n10 Deadlifts\n10 box jump\n40 DU\n8 rope climb\nRest 3' (pedalando/caminhando leve)\n*M:100/90/80kg\n*F: 75/70/65kg\n* Se necessário ajustar carga para próximo a 50%" },
    { label: "F", content: "3RDS\n20'' isometria na puxada alta (linha do peito)\n20'' cadeira isométrica parede (2kb)\n20'' hollow\n*Descansar o necessário entre as séries" },
  ] },
  { date: "2025-07-03", week: "SEGUNDA SEMANA", day: "QUINTA", blocks: [
    { label: "A", content: "A+M+A" },
    { label: "B", content: "5RDS (para qualidade)\n1' Max dist HSW\n1' rest" },
    { label: "C", content: "AMRAP 12'(heart rate zona 2 e 3)\n1,2,3,4…wall walk\n20m farms (2DB/KB)\n3,6,9..HSPU\n20m farms (2DB/KB)" },
    { label: "D", content: "4RDS (all out)\nA cada 2:30\n18/16 cal bike\n10 burpees sobre o muro" },
    { label: "E", content: "2RDS\n1500m de remo\n*Pace:2:12 a 2:16" },
  ] },
  { date: "2025-07-04", week: "SEGUNDA SEMANA", day: "SEXTA", blocks: [
    { label: "A", content: "A+M+A" },
    { label: "B", content: "Hang power clean\n(70 a 77%x2)4" },
    { label: "C", content: "Box jump (para altura)\n4x2" },
    { label: "D", content: "Corrida (VO2 target pace)\n4x800m\ncaminhar 3' entre os RDS\n2X200\ncaminhar 200m entre os RDS" },
    { label: "E", content: "Para volume de reps\nEMOM 12' (30'' ON/30'' OFF)\n1- Fat bar muscle clean\n2- GHD sit ups\n3- full swings\n4- DU" },
  ] },
  { date: "2025-07-07", week: "TERCEIRA SEMANA", day: "SEGUNDA", blocks: [
    { label: "A", content: "A+M+A" },
    { label: "B", content: "1 snatch do bloco\n(70%x2)2, (75%x1)2, (80%x1)2\n*Não fazer TNG" },
    { label: "C", content: "Back squat\n(85%x3)2, 87%x2, 90%x1" },
    { label: "D", content: "4RDS (All out)\n10 power snatchs*\n10 box jump over\nMax RMU unbroaken\nRest 3:1\n*Carga de competição" },
    { label: "E", content: "3RDS (Por tempo)\n350m de remo\n10m overhead walking lunges (2DB)\n20 toes to bar" },
    { label: "F", content: "3RDS\n10 elevações pélvicas\n5-5 step ups (foco na perna de cima)\nRest 30'' entre cada exercício" },
  ] },
  { date: "2025-07-08", week: "TERCEIRA SEMANA", day: "TERÇA", blocks: [
    { label: "A", content: "A+M+A" },
    { label: "B", content: "AMRAP 10' (zona 3)\n10/8 cal bike\n5-4-3 power cleans singles (70%)\n*Não fazer TNG" },
    { label: "C", content: "5RDS (All out)\n10m HSW\n12 Deadlifts*\n9 hang power cleans\n6 bar facing burpees\nRest 2:1 entre cada RD\n*M:60/50/40\n*F:45/35/25" },
    { label: "D", content: "Por tempo\n60DU\n6 rope climb\n15 full swings\n60DU\n4 rope climb\n15 full swings\n60DU\n2 rope climb\n15 full swings" },
    { label: "E", content: "EM 8' Max RDS de DU unbroaken em que chegue até seu PR ou passe.\nPara quebras antes de atingir o objetivo começar novamente" },
    { label: "F", content: "2x1000m de remo\n*Pace:2:00/500m" },
  ] },
  { date: "2025-07-09", week: "TERCEIRA SEMANA", day: "QUARTA", blocks: [
    { label: "A", content: "A+M+A" },
    { label: "B", content: "Corrida (VO2 target pace)\n4x800m\ncaminhar 3' a 4' entre os RDS\n2X200\ncaminhar 200m entre os RDS" },
    { label: "C", content: "Para qualidade\nEm 8'\n1 série MAX BMU\nApós maxímo de séries com qualidade de 70% do máx." },
    { label: "D", content: "4RDS\n10 Heavy DB bench press\nMax HSPU unbroaken\n15 GHD sit ups\n*Rest 30'' entre cada exercício\nRest 3' ao final dos dois RDS" },
  ] },
  { date: "2025-07-10", week: "TERCEIRA SEMANA", day: "QUINTA", blocks: [
    { label: "A", content: "A+M+A" },
    { label: "B", content: "6RDS\nA cada 2'\n1 clean pull\n1 squat clean\n1 hang squat clean\n1 front squat\n*progressão de carga livre\n*série unbroaken" },
    { label: "C", content: "4RDS (zona 3 e 4)\nAMRAP 4'\n6 high hang power cleans*\n8 burpee over the bar\n10 wall balls*\nrest 1' entre cada AMRAP\n*Carga de competição" },
    { label: "D", content: "4RDS (all out)\nA cada 1':30''\n14/12 cal bike\n6 devil cleans (2DB)\nMax DU\nrest 1':30''\n*contabilizar max DU" },
  ] },
  { date: "2025-07-11", week: "TERCEIRA SEMANA", day: "SEXTA", blocks: [
    { label: "A", content: "A+M+A" },
    { label: "B", content: "AMRAP 12' (zona 2 e 3)\n16/14 cal erg\n1 wall Walk\nMax dist HSW unbroaken" },
    { label: "C", content: "AMRAP 15' (zona 3 e 4)\n200m de corrida\n8 push jerk *\n12 box jump\n*carga de competição" },
    { label: "D", content: "2RDS\nRemo (all out)\n500m\nrest 2'\n375m\nrest 2'\n250m\nrest 2'" },
    { label: "E", content: "3RDS\n30'' hold paralelas\n10 hollow rocks\n10 lombares na caixa\nRest 30'' entre cada exercício" },
  ] },
  { date: "2025-07-12", week: "TERCEIRA SEMANA", day: "SÁBADO", blocks: [
    { label: "A", content: "A+M+A" },
    { label: "B", content: "6RDS\na cada 2'\n1 snatch high pull\n1 power snatch\n2 hang power snatch\n*progressão de carga livre\n*Série unbroaken" },
    { label: "C", content: "Para qualidade\nEm 8'\n1 série MAX C2b\nApós, maxímo de séries com qualidade de 70% do máx." },
    { label: "D", content: "4RDS (All out)\n400m de corrida (LTTP)\n30'' sprint assault bike\nrest 4 a 5'" },
    { label: "E", content: "EM DUPLAS\nAMRAP 15' (I go, you go)\n5 pull ups + 7 toes to bar (complex unb)\n12 fat bar power cleans*\n30 DU\n*carga de competição" },
    { label: "F", content: "2RDS\n10 remada curvada\n20 band pulls\nrest 30'' entre cada exercício\n2RDS\n10 bíceps martelo\n10 tríceps francês\nrest 30'' entre cada exercício" },
  ] },
];
