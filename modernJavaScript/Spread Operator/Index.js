const towns = [
  "Floripa",
  "Blumenau",
  "Brasília",
  "Alto Paraíso",
  "Posse",
  "Somilândia",
];

console.log(towns);
console.log(...towns);
console.log(...towns[1]); // console.log(B, l, u, n, ...)

//CLONING OBJECTS

const townsCopy = towns; //It'd not a copy, it's just a reference
townsCopy.pop();
townsCopy.push("Itajaí");
console.log(towns);
console.log(townsCopy);

const townsClone = [...towns]; //Righ way to clone a array
console.log(`Towns clone ${townsClone}`);
console.log(townsClone);

townsClone.push("Rosa");
console.log({ towns, townsCopy, townsClone });

const townsObj = { ...towns };
console.log(townsObj);
const townsObjClone = { ...townsObj };
townsObjClone.test = "Test";
console.log(townsObjClone);
