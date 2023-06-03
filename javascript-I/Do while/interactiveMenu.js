/* Write a JavaScript program that simulates an interactive menu with 
5 different options. The program should start by displaying the 5 
available options, with the first four not needing any specific 
functionality, and the last option being "End". 

When clicking on any of the first four options, a message should 
be displayed on the screen indicating which option was chosen, and 
then the program should display the menu again with the 5 options. 
This should continue to happen until the user chooses the "End" option.
Upon choosing it, a message saying that the system is being terminated
should be displayed on the screen and then the program is ended.
*/

let option = "";

do {
  option = prompt(
    "Welcome! \n" +
      "Choose one alternative: \n" +
      "\n1 - Option 2" +
      "\n2 - Option 2" +
      "\n3 - Option 3" +
      "\n4 - Option 4" +
      "\n5 - Quit"
  );

  switch (option) {
    case "1":
      alert("You choosen the option 1");
      break;
    case "2":
      alert("You choosen the option 2");
      break;
    case "3":
      alert("You choosen the option 3");
      break;
    case "4":
      alert("You choosen the option 4");
      break;
    case "Quit":
      alert("Finishing the program...");
      break;
    default:
      alert("Invalid Option");
  }
} while (option !== "Quit");
