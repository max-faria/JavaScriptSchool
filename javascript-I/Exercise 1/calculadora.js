const x = parseFloat(prompt("Informe o primeiro numero"));
const y = parseFloat(prompt("Informe o segundo numero"));

// Outra opção
// x = parsefloat(entrada1)
// y = parsefloat(entrada2)

const soma = x + y;
const subtracao = x - y;
const mult = x * y;
const divisao = x / y;

alert(
  "Resultado\n" +
    "\nSoma:" +
    soma +
    "\nSubtração:" +
    subtracao +
    "\nMultiplicação:" +
    mult +
    "\nDivisão:" +
    divisao
);
