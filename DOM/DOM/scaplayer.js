function addPlayer() {
  const position = document.getElementById("position").value;
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;

  console.log({ position, name, number });

  const confirmation = confirm("Add player " + name + " as " + position);

  if (confirmation) {
    const teamList = document.getElementById("teamList");
    const ul = document.getElementsByTagName("ul");

    const newPlayer = document.createElement("li");
    newPlayer.id = "player-" + number;
    newPlayer.innerText = position + ". " + name + " (" + number + ")";

    teamList.appendChild(newPlayer);

    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
  }
}
