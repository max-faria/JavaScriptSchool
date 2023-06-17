const Adress = require("./Adress");
const Person = require("./person");

const addr = new Adress("7 de Setebro", 99, "Centro", "São Fidélis", "RJ");
const john = new Person("John Doe", addr);

console.log(john);
console.log(john.address.fullAddress());
console.log(john.address.street);
