const array = [
  "1º Lível",
  ["2º Leve", 42, true],
  [
    ["3º Level", "1º Iten", "Olá Mundo"],
    ["3º Level", "1º Iten", "Olá Mundo"],
  ],
];

console.log(array);
console.log(array[1][0]);
console.log(array[1][1]);
console.log(array[2]);
console.log(array[2][0]);
console.log(array[2][0][2]);

const matriz = [
  [11, 12, 13, 14, 15],
  [21, 22, 23, 24, 25],
  [31, 32, 33, 34, 35],
];

//console.table(matriz);

//matriz.push("New Line");
//matriz[0].push("Nova Coluna");

//console.table(matriz);

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    const element = matriz[i][j];
    console.log("Position: (" + (i + 1) + "," + (j + 1) + ") valor:" + element);
  }
  console.log(matriz[i]);
}
