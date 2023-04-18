function addPlayer() {
  // get the content
  const position = document.getElementById("position").value;
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  // using .value it's posible to take the value add on the input tag

  console.log({ position, name, number });

  const confirmation = confirm("Scalate " + name + " as " + position + "?");

  // Adding the information
  if (confirmation) {
    // get the element where to add
    const teamList = document.getElementById("teamList");
    // creating the new element
    const playerItem = document.createElement("li");
    // defining its properties
    playerItem.id = "player-" + number;
    // show the item on the page
    playerItem.innerText = position + ": " + name + " (" + number + ")";

    teamList.appendChild(playerItem);

    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
  }
}

function removePlayer() {
  const number = document.getElementById("numberToRemove").value;
  const playerToRemove = document.getElementById("player-" + number);

  const confirmation = confirm(
    "Remove player " + playerToRemove.innerText + "?"
  );

  if (confirmation) {
    //document.getElementById("teamList").removeChild(playerToRemove);
    // OR
    playerToRemove.remove();
    document.getElementById("numberToRemove").value = "";
  }
}
