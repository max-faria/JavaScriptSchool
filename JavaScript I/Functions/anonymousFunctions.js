function somar(a, b) {
  return a + b;
}

let op = somar; // op is now the functions somar

console.log(op(5, 2));

op = function (a, b) {
  // The function can exist inside a variable
  return a - b; // function with no name
};

console.log(op(5, 2));
