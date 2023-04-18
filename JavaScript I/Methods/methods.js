let person = {
  nome: "Max",
  age: 28,
  sayHi() {
    console.log("Hello, world! My name is " + this.nome);
  },
};

console.log(person);

person.sayHi();

console.log(person.nome);
