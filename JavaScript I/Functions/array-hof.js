const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

// .Map --> Percorre cada elemento do array e cria um novo array
// Não altera o array original

const nomes = [];

// for (i = 0; i < personagens.length; i++) {
//   nomes.push(personagens[i].nome);
// }

const nomez = personagens.map(function (personagem) {
  return personagem.nome;
});
console.log(nomez);

// .filter -->
// não altera o array original

// const orcs = [];

// for (let i = 0; i < personagens.length; i++) {
//   if (personagens[i].raca === "Orc") {
//     orcs.push(personagens[i]);
//   }
// }

const orcs = personagens.filter(function (personagem) {
  return personagem.nome;
});
console.log(orcs);

// .reduce --> Tranformar um array em alguma outra coisa

const nivelTotal = personagens.reduce(function (valorAcumulado, personagem) {
  return valorAcumulado + personagem.nivel;
}, 0);

console.log(nivelTotal);

const racas = personagens.reduce(function (valorAcumulado, personagem) {
  if (valorAcumulado[personagem.raca]) {
    valorAcumulado[personagem.raca].push(personagem);
  } else {
    valorAcumulado[personagem.raca] = [personagem];
  }
  return valorAcumulado;
}, {});

// console.log(racas);

// .sort --> ordenar arrays

const personagensOrdenados = personagens.slice().sort(function (a, b) {
  return a.nivel - b.nivel;
});

console.log(personagens);
console.log(personagensOrdenados);
