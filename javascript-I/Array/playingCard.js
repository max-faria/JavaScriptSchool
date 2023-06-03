/*
Write a javascript program to simulate a deck of cards. 
The program should start by displaying an interactive menu on the 
screen containing the cards currently in the deck and the options of 
"Add a card," "Draw a card," and "Exit." When choosing "Add a card," 
the program should ask for the name of the card and add it to the 
top of the deck. When choosing "Draw a card," the program should 
remove the card from the top of the deck and display the name of 
the drawn card on the screen. The program should only be terminated 
when choosing the "Exit" option; otherwise, it should return to the 
menu.
*/

let hand = [];

do {
  option = prompt(
    "Available Cards: " +
      hand.length +
      "\n" +
      "Choose an option:\n" +
      "\n1) Add a Card \n2) Push a card \n3) Exit game"
  );
  if (option === "1") {
    const newCard = prompt("Wich card?");
    hand.push(newCard);
  } else if (option === "2") {
    const pullCard = hand.pop();
    if (!pullCard) {
      alert("There are no available cards! Add a card.");
    } else {
      alert(pullCard + " was pulled");
    }
  } else if (option === "3") {
    alert("Finishing game.");
  } else {
    alert("Invalid entry. Please try again");
  }
} while (option !== "3");
