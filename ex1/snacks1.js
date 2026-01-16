const biciclette = [
  { nome: "Bianchi", peso: 7.2 },
  { nome: "Specialized", peso: 6.8 },
  { nome: "Trek", peso: 7.0 },
  { nome: "Cannondale", peso: 7.6 },
  { nome: "Pinarello", peso: 6.6 },
];

let biciclette = biciclette[0];

for (let i = 1; i < biciclette.length; i++) {
  if (biciclette[i].peso < bicileggera.peso) {
    bicileggera = biciclette[i];
  }
}
console.log("La bici più leggera è:", bicileggera.nome),
  "peso:",
  bicileggera.peso;
