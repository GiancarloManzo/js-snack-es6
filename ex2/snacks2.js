const squadre = [
  { nome: "Milan", puntiFatti: 0, FalliSubiti: 0 },
  { nome: "Juventus", puntiFatti: 0, FalliSubiti: 0 },
  { nome: "Inter", puntiFatti: 0, FalliSubiti: 0 },
  { nome: "Roma", puntiFatti: 0, FalliSubiti: 0 },
];

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
