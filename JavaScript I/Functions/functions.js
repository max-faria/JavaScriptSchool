function hi() {
  console.log("Hello world!");
}

hi(); // parenthesis: execute this function

// PARAMETROS DE UMA FUNÇÃO

function twice(x) {
  y = 2 * x;
  // alert("O dobro de " + x + " é " + y);
  console.log("O dobro de " + x + " é " + y);
}
twice();

// Using a default value para one function
function naame(x = "Valor Padrão") {
  console.log("Olá, " + x);
}

naame();

// more than one parathemer
function soma(a, b) {
  console.log(a + " + " + b + " = " + (a + b));
}

soma(20, 3);

// the ordem matters and using objects
function createUser(nome, email, senha, tipo = "admin") {
  const user = {
    nome, // the same as nome:nome
    email,
    senha,
    tipo,
  };
  console.log(user);
}

createUser("Max", "mxxfaria@gmail.com", "1234");

function newUswe(nome, tipo = "admin", email, senha) {
  const user = {
    nome, // the same as nome:nome
    email,
    senha,
    tipo,
  };
  console.log(user);
}

newUswe("Thiago", "thi@gmail.com", "1234");

// When a function requires a lot of paramethers
// one alternative way is to use a function of
// only one paramether, beeing this paramethers
// a object with more information

function average(a, b) {
  const av = (a + b) / 2;
  console.log(av);
  return av;
}

let x = average(2, 5);
console.log(x);

function areaT(x, y) {
  return (x * y) / 2;
}

const myT = areaT(4, 10);

console.log(myT);
// OR
console.log(areaT(2, 3));

// Function the calls another function

function areaRectangular(b, l) {
  return b * l;
}

console.log(areaRectangular(2, 3));

function areaSquare(l) {
  return areaRectangular(l, l);
}

console.log(areaSquare(6));
