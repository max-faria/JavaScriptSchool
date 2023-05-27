function sumN(a, b, c) {
  return a + b + c;
}

function sum(...numbers) {
  return numbers.reduce((accm, num) => accm + num, 0);
}

console.log(` Sum with rest params method: ${sum(26, 30, 90, 50)}`);
console.log(`Sum with normal methos: ${sumN(26, 30, 90, 50)}`);

//The rest parms make it possible to use a funcstion with any
// number of params, as in the function above. When we don't use
// the rest params method, the funcstion only sum the quantity
// of params as declared on the function arguments
