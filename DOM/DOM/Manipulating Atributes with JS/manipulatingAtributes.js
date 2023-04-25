const input = document.getElementById("input");

document.getElementById("value").addEventListener("click", function () {
  input.value = "Olá Mundo";
  console.log(input.value); // shows the value of value
  //input.value = input.value === "" ? "Olá Mundo" : ""; // if ternário condition ? exp1: exp2
  console.log(input.getAttribute("value")); // mostra o valor pré-definido desse atributo
});

document.getElementById("type").addEventListener("click", function () {
  input.type = input.type !== "radio" ? "radio" : "text";
  input.setAttribute("type", "radio"); // transform definitivaly the value of the attribute
});

document.getElementById("placeholder").addEventListener("click", function () {
  input.placeholder = "Type something...";
});

document.getElementById("disable").addEventListener("click", function () {
  input.disabled = input.disabled !== "disabled" ? true : false;
  //input.setAttribute("disabled", !input.disabled);
});

document.getElementById("data").addEventListener("click", function () {
  const data = input.dataset.somethingElse;
  console.log("The value of data-something atribute is: " + data);
  //input.dataset.somethingElse = "Outro valor"; --> direct set
  input.setAttribute("data-something-else", "Outro valor"); //seting using the setattribute
  console.log(
    "The new value of data-something-else attribute is: " +
      input.dataset.somethingElse
  );
});
