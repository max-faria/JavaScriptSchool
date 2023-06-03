const houses = [];
let option = "";

do {
  option = prompt(
    "Welcome to the Real Estate Registry!" +
      "Total of registries: " +
      houses.length +
      "\n\nChoose one option: \n1. New registry \n2. List all registries \n3. Exit"
  );

  switch (option) {
    case "1":
      const registry = {};

      registry.owner = prompt("Owner name:");
      registry.rooms = prompt("Number of rooms:");
      registry.bath = prompt("Number of bathrroms");
      registry.garage = prompt("There is garage? (Yes/No)");

      const conf = confirm(
        "Save this registry? \n" +
          "\nOwner: " +
          registry.owner +
          "\nRooms: " +
          registry.rooms +
          "\nBathrooms: " +
          registry.bath +
          "\nGarage: " +
          registry.garage
      );

      if (conf) {
        houses.push(registry);
      }
      break;
    case "2":
      for (let i = 0; i < houses.length; i++) {
        alert(
          "Registry " +
            (i + 1) +
            "\nOwner: " +
            houses[i].owner +
            "\nRooms: " +
            houses[i].rooms +
            "\nBathrooms: " +
            houses[i].bath +
            "\nGarage? " +
            houses[i].garage
        );
      }
      break;
    case "3":
      alert("Finishing the program");
      break;
    default:
      alert("Invalid entry. Try again.");
  }
} while (option !== "3");
