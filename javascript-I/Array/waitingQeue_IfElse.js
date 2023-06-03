/* Write a javascript program to simulate a waiting queue in a 
medical office. The program should start by displaying an interactive 
menu on the screen containing a list of all patients waiting in order,
showing their position next to their name (e.g., 1st Matheus, 
2nd Marcos, etc.). The menu should also allow choosing between 
the options of "New patient," to add a new patient to the end of 
the queue (asking for the patient's name), "Consult patient," which 
removes the first patient from the queue and displays the name of 
the consulted patient on the screen, and "Exit." The program should 
only be terminated when choosing the "Exit" option; otherwise, it 
should return to the menu.
*/

let patients = [];

do {
  let patient = "";
  for (let i = 0; i < patients.length; i++) {
    patient += i + 1 + "º - " + patients[i] + "\n";
  }

  option = prompt(
    "The waiting list:\n" +
      patient +
      "\n" +
      "Choose one action:\n" +
      "a) New patient\n" +
      "b) Consult a patient\n" +
      "c) Sair"
  );

  if (option === "a") {
    const newPatient = prompt("Name:");
    patients.push(newPatient);
  } else if (option === "b") {
    const consultPatient = patients.shift();
    if (!consultPatient) {
      alert("There are no patientes to be consulted.");
    } else {
      alert(consultPatient + " has been consulted.");
    }
  } else if (option === "c") {
    alert("Finishing the program.");
  } else {
    alert("Invalid entry. Try again.");
  }
} while (option !== "c");
