/*Write a javascript program that simulates a job vacancy system,
 where it is possible to manage vacancies and add candidates to 
 vacancies. It must meet the following requirements:

Have a menu where it is possible to choose between 
the different functionalities of the system
    List available vacancies
    Create a new vacancy
    View a vacancy
    Register a candidate for a vacancy
    Delete a vacancy
    Exit
The option to list vacancies should show the index, name, and 
number of registered candidates for all vacancies.

The option to create a new vacancy should ask for a name for 
the vacancy, a description, and a deadline, and it should also 
ask the user to confirm the information before saving it.

The option to view a vacancy should ask for the vacancy index
and display all its information: index, name, description, 
deadline, number of candidates, and candidates' names.

The option to register a candidate for a vacancy should ask for 
the candidate's name, the vacancy index, and then display a 
confirmation with the vacancy information before saving the 
candidate to the vacancy.

The option to delete a vacancy should ask for the vacancy index,
display its information, and ask the user to confirm the 
deletion of the vacancy before actually deleting it.

This is the review exercise for the module, so take the 
opportunity to use all the resources seen so far whenever 
possible, such as objects, arrays, and functions.*/

const jobs = [];

function listVacancy() {
  const vacancyText = jobs.reduce(function (finalText, vacancy, index) {
    finalText += index + ". ";
    finalText += vacancy.title;
    finalText += " (" + vacancy.candidates.length + " candidates)\n";
    return finalText;
  }, "");
  alert(vacancyText);
}

function createVacancy() {
  const title = prompt("Name of the vacancy:");
  const description = prompt("Description of the vacancy");
  const deadline = prompt("Deadline:");

  const confirmate = confirm(
    "Create vacancy?\n" +
      "\nTitle: " +
      title +
      "\nDescription: " +
      description +
      "\nDeadline: " +
      deadline
  );

  if (confirmate) {
    const newVacancy = { title, description, deadline, candidates: [] };
    jobs.push(newVacancy);
    alert("Vacancy created!");
  }
}

function viewVacancy() {
  const index = prompt("Wich vacancy do you wish to view?");
  const vacancy = jobs[index];

  if (index >= jobs.length || index < 0) {
    alert("Invalid entry. Please, try again");
    return;
  }

  const candidatesText = vacancy.candidates.reduce(function (
    finalText,
    candidate
  ) {
    return finalText + " \n - " + candidate;
  },
  "");

  alert(
    "Vacancy nº: " +
      index +
      "\nTitle: " +
      vacancy.title +
      "\nDescription: " +
      vacancy.description +
      "\nDeadline: " +
      vacancy.deadline +
      "\n Number os candidates: " +
      vacancy.candidates.length +
      "\n Candidates: " +
      candidatesText
  );
}

function deleteVacancy() {
  const index = prompt("Which vacancy to delete?");
  const vacancy = jobs[index];

  if (index >= jobs.length || index < 0) {
    alert("Invalid entry. Please try again");
    return;
  }

  const confirmate = confirm(
    "The vacancy" +
      index +
      "will be deleted:" +
      "\nTitle: " +
      vacancy.title +
      "\nDescription: " +
      vacancy.description +
      "\nDeadline: " +
      vacancy.deadline +
      "\nDou you confirm?"
  );

  if (confirmate) {
    jobs.splice(index, 1);
    alert("Vacancy deleted!");
  }
}

function showMenu() {
  const option = prompt(
    "Choose one option:" +
      "\n1 List available vacancies" +
      "\n2 Create a new vacancy" +
      "\n3 View a vacancy" +
      "\n4 Register a candidate for a vacancy" +
      "\n5 Delete a vacancy" +
      "\n6 Exit"
  );
  return option;
}

function registerCandidate() {
  const candidate = prompt("Candidate's name: ");
  const index = prompt("Vacancy to apply: ");
  const vacancy = jobs[index];

  const confirmate = confirm(
    "Confirm application?" +
      "\nCandidate's name: " +
      candidate +
      " for the vacancy " +
      index +
      "\nVacancy title: " +
      vacancy.title +
      "\nDescription: " +
      vacancy.description +
      "\nDeadline: " +
      vacancy.deadline
  );

  if (confirmate) {
    vacancy.candidates.push(candidate);
    alert("Application confirmated!");
  }
}

function execute() {
  let option = "";

  do {
    option = showMenu();

    switch (option) {
      case "1":
        listVacancy();
        break;
      case "2":
        createVacancy();
        break;
      case "3":
        viewVacancy();
        break;
      case "4":
        registerCandidate();
        break;
      case "5":
        deleteVacancy();
        break;

      case "6":
        alert("Finishing the program.");
        break;
      default:
        alert("Invalid entry. Please try again.");
    }
  } while (option !== "6");
}

execute();
