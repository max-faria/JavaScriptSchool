// Atac
// Attacking character
const attackingName = prompt("What's the name of the attacking character?");
const attackingPower = prompt("What is their attack power?");

// Defending character

const deffendingName = prompt("Whats tha name of the defending character?");
let lifePoints = prompt("How many life point they have?");
const deffendingPower = prompt("What is their deffeing power?");
const shield = prompt("They have a shield? (Yes/No)");

let harm = 0;

if (attackingPower > deffendingPower && shield === "No") {
  harm = attackingPower - deffendingPower;
} else if (attackingPower > deffendingPower && shield === "Yes") {
  harm = (attackingPower - deffendingPower) / 2;
}

lifePoints -= harm;

alert(
  attackingName + " coused " + harm + " damage points in " + deffendingName
);
alert(
  "Attacking Character:\n " +
    attackingName +
    " Attacking points: " +
    attackingPower +
    "\n\n" +
    "Deffefing Character:\n" +
    "Deffending Name: " +
    deffendingName +
    "\n" +
    "Life Points: " +
    lifePoints +
    "\n" +
    "Deffending Power: " +
    deffendingPower +
    "\n" +
    "Has Shield: " +
    shield
);
