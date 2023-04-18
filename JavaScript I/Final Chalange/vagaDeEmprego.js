const vagas = []; // array para salvar as vagas

//criando funções de listar as vagas

function listarVaga() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    //1. nome da vaga ( xx canditatos)
    textoFinal += indice + ". ";
    textoFinal += vaga.nome;
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n";
    return textoFinal;
  }, "");

  alert(vagasEmTexto);
}

function novaVaga() {
  const nome = prompt("Informe o nome da vaga: ");
  const descricao = prompt("Informe uma descrição para a vaga: ");
  const dataLimite = prompt("Informe uma data limite para a vaga: (dd/mm/aa)");

  const confirmacao = confirm(
    "Deseja salvar essa nova vaga?\n" +
      "Nome:" +
      nome +
      "\nDescrição: " +
      descricao +
      "\nData Limite: " +
      dataLimite
  );

  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidados: [] };
    vagas.push(novaVaga);
    alert("Vaga Criada");
  }
}

function exibirVaga() {
  const indice = prompt("Informe o indice da vaga que deseja exibir: ");
  const vaga = vagas[indice];

  const candidatosEmTexto = vaga.candidatos.reduce(function (
    textoFinal,
    candidato
  ) {
    return textoFinal + "\n - " + candidato;
  },
  "");

  alert(
    "Vaga nº: " +
      indice +
      "\nNome: " +
      vaga.nome +
      "\nDescricao: " +
      vaga.descricao +
      "\nData Limite: " +
      vaga.dataLimite +
      "\nQuantidade de candidatos: " +
      vaga.candidados.length +
      "\nCandidatos Inscritos: " +
      candidatosEmTexto
  );
}

function increverCandidato() {
  const candidato = prompt("Informe o nome do candidato: ");
  const indice = prompt("Inform o índice da vaga: ");
  const vaga = vagas[indice];

  const confirmacao = confirm(
    "Deseja inscrever o candidato: " +
      candidato +
      "na vaga " +
      indice +
      "?" +
      "\nNome da vaga: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData Limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vagas.candidatos.push(candidato);
    alert("Inscrição realizada.");
  }
}

function excluirVaga() {
  const indice = prompt("Qual o índice da vaga para exclusao?");
  const vaga = vagas[indice];

  confirmacao = confirm(
    "Ceteza que deseja excluir a vaga " +
      indice +
      "?" +
      "\nNome da vaga: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData Limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vagas.splice(indice, 1);
    alert("Vaga excluida");
  }
}
