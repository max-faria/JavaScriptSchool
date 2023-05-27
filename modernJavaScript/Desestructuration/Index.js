const person = {
  name: "Luke",
  age: 35,
  job: "Farmer",
  parents: ["John", "Mary"],
};

const nome = person.name;
console.log(nome);
// for Object -> uses {}
const { name, age, job, parents } = person;
console.log(name, age, job, parents);

// for Arrays -> uses []
const [father, mother] = parents;

console.log(father, mother);

function createUser(person) {
  const id = Math.floor(Math.random() * 9999);
  return {
    id,
    name: person.name,
    age: person.age,
    parents: person.parents,
  };
}

const luke = createUser(person);
console.log(luke);

// Disestructuration of a function
function createUser2({ name, age, parents }) {
  const id = Math.floor(Math.random() * 9999);
  const [father, mother] = parents;
  return {
    id,
    name,
    age,
    father,
    mother,
  };
}

const luke2 = createUser2(person);
console.log(luke2);
