function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.htmlFor = htmlFor;
  label.innerText = text;
  return label;
}

function createInput(id, value, name, type = "text", placeholder = "") {
  const input = document.createElement("input");
  input.id = id;
  input.value = value;
  input.name = name;
  input.value = value;
  input.type = type;
  input.placeholder = placeholder;
  return input;
}

const addTechBtn = document.getElementById("addTechBtn");
const form = document.getElementById("devForm");
const developers = [];
let inputRows = 0;

addTechBtn.addEventListener("click", function (ev) {
  const stackInputs = document.getElementById("stackInputs");

  const newRow = document.createElement("li");
  const rowIndex = inputRows;
  inputRows++;
  newRow.id = "inputRow-" + rowIndex;
  newRow.className = "inputRow";

  const techNameLabel = createLabel("Name: ", "techName-" + rowIndex);
  const techNameInput = createInput("techName-" + rowIndex, null, "techName");

  const expLabel = createLabel("Experience: ");

  const id1 = "expRadio-" + rowIndex + ".1";
  const expRadio1 = createInput(
    id1,
    "0-2 anos",
    "techExp-" + rowIndex,
    "radio"
  );
  const expLabel1 = createLabel("0-2 Years", id1);

  const id2 = "expRadio-" + rowIndex + ".2";
  const expRadio2 = createInput(
    id2,
    "3-4 years",
    "techExp-" + rowIndex,
    "radio"
  );
  const expLabel2 = createLabel("3-4 Years", id2);

  const id3 = "expRadio-" + rowIndex + ".3";
  const expRadio3 = createInput(
    id3,
    "5+ years",
    "techExp-" + rowIndex,
    "radio"
  );
  const expLabel3 = createLabel("5+ Years", id3);

  const removeRowBtn = document.createElement("button");
  removeRowBtn.type = "button";
  removeRowBtn.innerText = "Remove";
  removeRowBtn.addEventListener("click", function () {
    stackInputs.removeChild(newRow);
  });

  newRow.append(
    techNameLabel,
    techNameInput,
    expLabel,
    expRadio1,
    expLabel1,
    expRadio2,
    expLabel2,
    expRadio3,
    expLabel3,
    removeRowBtn
  );

  stackInputs.appendChild(newRow);
});

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const fullnameinput = document.getElementById("fullname");
  const inputRows = document.querySelectorAll(".inputRow");

  let technologies = [];
  inputRows.forEach(function (row) {
    // rowId input(name="techName")
    const techName = document.querySelector(
      "#" + row.id + ' input[name="techName"]'
    ).value;
    const techExp = document.querySelector(
      "#" + row.id + " input[type='radio']:checked"
    ).value;
    technologies.push({ name: techName, exp: techExp });

    const newDev = {
      fullname: fullnameinput.value,
      technologies: technologies,
    };
    developers.push(newDev);
    alert("Dev  sucessfully saved.");
  });

  fullnameinput.value = "";
  inputRows.forEach(function (row) {
    row.remove();
  });

  console.log(developers);
});

// form.addEventListener("submit", function (ev) {
//   ev.preventDefault();

//   const newLabel = document.createElement("label");
//   newLabel.name = "name";
//   newLabel.innerText = "Add technology :";
//   const techName = document.createElement("input");
//   techName.type = "text";
//   techName.name = "techname";

//   form.appendChild(newLabel);
//   form.appendChild(techName);

//   const experience02 = document.createElement("input");
//   experience02.type = "radio";
//   experience02.name = "experience";
//   experience02.id = "experience02";
//   experience02.value = "0-2 years";
//   const experience34 = document.createElement("input");
//   experience34.type = "radio";
//   experience34.name = "experience";
//   experience34.id = "experience34";
//   experience34.value = "3-4 years";
//   const experience5 = document.createElement("input");
//   experience5.type = "radio";
//   experience5.name = "experience";
//   experience5.id = "experience5";
//   experience5.value = "5+ years";

//   form.appendChild(experience02);
//   form.appendChild(experience34);
//   form.appendChild(experience5);
// });
