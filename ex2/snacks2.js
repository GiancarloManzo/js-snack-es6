function eseguiSnack2() {
  const squadre = [
    { nome: "Milan", puntiFatti: 0, FalliSubiti: 0 },
    { nome: "Juventus", puntiFatti: 0, FalliSubiti: 0 },
    { nome: "Inter", puntiFatti: 0, FalliSubiti: 0 },
    { nome: "Roma", puntiFatti: 0, FalliSubiti: 0 },
  ];

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  for (let i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti = randomInt(0, 50);
    squadre[i].FalliSubiti = randomInt(0, 10);
  }

  const nomeEFalli = squadre.map((squadra) => {
    return {
      nome: squadra.nome,
      FalliSubiti: squadra.FalliSubiti,
    };
  });

  console.log("Snack 2 -> Array completo squadre:", squadre);
  console.log("Snack 2 -> Nuovo array (nome e fall subiti):", nomeEFalli);
}
