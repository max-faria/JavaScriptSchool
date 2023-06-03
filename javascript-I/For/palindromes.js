/* Write a JavaScript program that is capable of identifying whether 
a word is a palindrome or not. A palindrome is a word that when read 
backwards has the same letters in the same order. The program should 
start by asking for a word to be entered and then display a message 
indicating whether that word is a palindrome or not. If it is not a 
palindrome, the program should display the word both forwards and 
backwards. 
*/
let word = prompt("It's a Palindrome?\n" + "Insert a word:");
let invertedWord = "";

let lowerCaseWord = word.toLocaleLowerCase(); //Passing all letter to lower case

for (let i = word.length - 1; i >= 0; i--) {
  invertedWord += lowerCaseWord[i];
}

if (lowerCaseWord === invertedWord) {
  alert(word + " it's a palindrome");
} else {
  alert(word + " it's not a palindrome");
}
