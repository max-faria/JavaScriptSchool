// Funcstion that one og its parameter is another function
function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
}

const lista = ["Maca", "Banan", "Pera", "Uva", "Salada Mista"];

for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[i], i, lista);
}

// Forma Tradicional
lista.forEach(exibirElemento);

lista.forEach(function (elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
});
