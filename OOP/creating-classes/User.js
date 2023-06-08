class User {
  constructor(fulllname, email, password) {
    this.fulllname = fulllname;
    this.email = email;
    this.password = password;
  }

  login(email, password) {
    if (this.email === email && this.password === password) {
      console.log("Login suceed.");
    } else {
      console.log("Login error. Please cheack your email and password.");
    }
  }
}

const john = new User("John Doe", "john@email.com", "1234");

john.login("john@email.com", "1234");
