// A FUNCTION THAT CALLS ITSELF

function divide(num) {
  console.log(num);
  if (num % 2 === 0) {
    divide(num / 2); // call the functions with a diferente value
  } else {
    return num;
  }
}

// divide();

function doble(num) {
  console.log(num);
  doble(num * 2);
}

function factor(num) {
  console.log("Number: " + num);
  if (num === 0) {
    return 1;
  } else if (num === 1) {
    return 1;
  } else {
    console.log(num + "* !" + (num - 1));
    return num * factor(num - 1);
  }
}

console.log(factor(5));
