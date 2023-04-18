const tName = prompt("Whats your name?");
let tourist = prompt("Have you visited a city? (Yes/No");

let cities = "";
let count = 0;

while (tourist === "Yes") {
  let city = prompt("Whats the name of the city you visited?");
  cities += city + "\n";
  count++;
  tourist = prompt("Have you visited some other city? (Yes/No)");
}

alert(
  "Tourist name: " +
    tName +
    "\n" +
    "Quantity of visited cities: " +
    count +
    "\n" +
    "Visited cities: \n" +
    cities
);
