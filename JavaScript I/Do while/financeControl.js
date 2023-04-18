/*
Write a JavaScript program that begins by asking for the initial amount
of available money, and then displays that amount on the screen 
along with options to add and remove money and an option to exit. 
When the add money option is clicked, the program should ask for the 
amount to be added, add that value to the initial amount, and then 
display the menu again with the amount of money and options. 
The remove money option should do the same, but subtract the value. 
The exit option should terminate the program 
*/

let money = parseFloat(prompt("Quantity of available money:"));
let option = "";

do {
  option = prompt(
    "Available amount: " +
      money +
      "\n\n" +
      "Chosse one alternative:" +
      "\n1 Add Money" +
      "\n2 Remove Money" +
      "\n3 Exit"
  );

  switch (option) {
    case "1":
      money += parseFloat(prompt("Inforn the value to be added: "));
      break;
    case "2":
      money -= parseFloat(prompt("Inform the value to be removed:"));
      break;
    case "3":
      alert("Finishing the program");
      break;
    default:
      alert("Invalid option");
  }
} while (option !== "3");
