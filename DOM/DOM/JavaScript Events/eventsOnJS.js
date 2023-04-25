// Whwne deinfi
function register(ev) {
  console.log(ev);
  const sectionElement = ev.currentTarget.parentNode;
  const username = sectionElement.children.username.value;
  const password = sectionElement.children.password.value;
  const passwordConfirmation =
    sectionElement.children.passwordConfirmation.value;

  console.log(username, password, passwordConfirmation);

  if (password === passwordConfirmation) {
    alert("Usuário " + username + " registrado!");
  } else {
    alert("As senhas não conferem");
  }
}

// find where to add de event
const buttom = document.getElementById("register-button");

// add the event, one function necessary
// buttom.addEventListener("click", function () {
//   alert("Buttom cliked!");
// });

buttom.addEventListener("click", register);

function removeEvent() {
  buttom.removeEventListener("click", register);
  alert("Event removed!");
}

buttom.addEventListener("mouseover", function (ev) {
  console.log(ev.currentTarget);
});
