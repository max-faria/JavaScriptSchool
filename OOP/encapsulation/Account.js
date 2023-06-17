class Account {
  #password;
  #balance;
  constructor(user) {
    this.email = user.email;
    this.#password = user.password;
    this.#balance = 0;
  }

  getBalance(email, password) {
    if (this.#password === password && this.email === email) {
      return this.#balance;
    } else {
      return null;
    }
  }

  getBalance2(email, password) {
    if (this.#autenticate(email, password)) {
      return this.#balance;
    } else {
      return "Email or password invalid";
    }
  }

  #autenticate(email, password) {
    return this.email === email && this.#password === password;
  }
}

const user = {
  email: "max@email.com",
  password: "123456",
};

const myAccount = new Account(user);
console.log(myAccount);
// console.log(myAccount.#balance);
console.log(myAccount.getBalance("max@email.com", "123456"));
console.log(myAccount.getBalance2("max@email.com", "12345"));
