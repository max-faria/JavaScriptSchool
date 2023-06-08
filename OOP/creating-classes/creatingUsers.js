users = [];

function User(fulllname, email, password) {
  this.fulllname = fulllname;
  this.email = email;
  this.password = password;
}

function iniciate() {
  do {
    action = prompt(
      "What do you want to do: \n1.Create new User \n2.Log-in \n3. Exit"
    );

    switch (action) {
      case "1":
        const fulllname = prompt("User's name:");
        const email = prompt("Email:");
        const password = prompt("Password:");
        const newUser = new User(fulllname, email, password);
        users.push(newUser);
        console.log(users);
        break;
      case "2":
        const userEmail = prompt("Email:");
        const userPassword = prompt("Password");
        let finder = users.find((item) => item.email === userEmail);
        console.log(finder);
        if (userEmail === finder.email && userPassword === finder.password) {
          alert("Login suceed :)");
        } else {
          alert("User not found :( please try again");
        }
        break;
    }
  } while (action !== "3");
}

iniciate();
