function normalSum(a, b) {
  return a + b;
}
console.log(`a normal sum é: ${normalSum(2, 3)}`);

const anonymousSum = function (a, b) {
  return a + b;
};
console.log(`the anonymous sum is: ${anonymousSum(2, 3)}`);

const arrowfunc = (a, b) => {
  return a + b;
};
console.log(`The arrow function is: ${arrowfunc(2, 3)}`);

const subtraction = (a, b) => a - b;
console.log(`The subtraction is: ${subtraction(2, 3)}`);

const number = 21;
const doble = (n) => `The doble of ${n} is ${n * 2}`;
console.log(doble(number));

const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];
const startingWithP = towns.filter((city) => city[0] === `P`);
console.log(startingWithP);
