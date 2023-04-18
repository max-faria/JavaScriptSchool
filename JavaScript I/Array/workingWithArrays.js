const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandha",
  "Harry",
  "Rony",
  "Cris",
  "Lucio",
];
console.log(arr);

// ADD values of the end of the array
// .push()
arr.push("Boromir");

// ADD elements on the beginning
arr.unshift("Max");

// REMOVE elements
//.pop() --> remove THE LAST element and returns that value
const lastElement = arr.pop();
console.log(lastElement);
// shift() --> remove THE FIRST element and returns the value
firstElement = arr.shift();
console.log(firstElement);

// SEARCH for a element
// .includes() --> to verify if one element is in the array
const include = arr.includes("Gandha");
console.log(include);
//.indexOf() --> returns the index od the elment searched
const ind = arr.indexOf("Gandha");
console.log(ind);

// CUT and CONCATENATE
//.slice() --> to CUT  a part of the array and save in a new array
const hobb = arr.slice(0, 4);
const other = arr.slice(-4);
// .concat() --> CONCATENATE two arrays and othe elements
const socy = hobb.concat(other, "Boromir");

// SUBSTITUITON of elements
// splice() --> REMOVE a group of elements ond substitute this group for other
// returns a list of the removed elements
const remov = socy.splice(ind, 1, "Gandalf, o gray", "Thiago", "Hermione");
console.log(socy);
console.log(remov);

// INTERATION over the arrays
for (let i = 0; i < socy.length; i++) {
  const element = socy[i];
  console.log(element + " is on the " + i + " position");
}

console.log(hobb);
console.log(other);
console.log(socy);
console.log(arr);
