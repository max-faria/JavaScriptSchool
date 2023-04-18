const result = prompt("Escolha uma alternativa:\na) \nb) \nc)");

const numericResult = parseFloat(result);

switch (numericResult) {
  case 1:
    alert("O resultado é A");
    break;
  case 2:
    alert("O resultado é B");
    break;
  case 3:
    alert("O resultado é C");
    break;
  default:
    alert("Finalizando...");
}
