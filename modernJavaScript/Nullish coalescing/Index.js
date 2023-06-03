let a = 0;

let b = null;

let c = 42;

//nulish coalescening ??
console.log(a || b || c);
console.log(a ?? b ?? c);

c = a ?? b;

console.log(c);
