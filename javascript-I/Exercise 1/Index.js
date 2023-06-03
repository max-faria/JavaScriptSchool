const firstName = prompt("Informe o nome do recruta:");
const lastName = prompt("Informe o sobrenome do recruta:");
const studyField = prompt("Campo de estudo do recruta:");
const birthyear = prompt("Ano de nascimento:");

alert(
  "Recruta Cadastrado com sucesso:\n" +
    "\nNome Completo:" +
    firstName +
    " " +
    lastName +
    "\nCampo de estudo:" +
    studyField +
    "\nIdade:" +
    (2022 - birthyear)
);
