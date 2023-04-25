function register(element) {
  const username = element.children.username.value;
  const password = element.children.password.value;
  const passwordconfirmation = element.children.passwordConfirmation.value;

  console.log({ username, password, passwordconfirmation });

  if (password === passwordconfirmation) {
    alert("User " + username + " sucessfully created!");
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("passwordConfirmation").value = "";
  } else {
    alert("Passwords do not match. Try again");
  }
}
