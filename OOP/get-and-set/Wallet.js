class Wallet {
  #amount;
  #username;

  constructor() {
    this.#amount = 100.99 * 100; // to save as an integer
  }
  // GET used to get some  private value from a class
  get amount() {
    return this.#amount / 100; // the getter it's not a functions, so its not necessary to use () as we use with methods
  }

  //SET used to modify some private value or add come rule for modificare the value
  set username(newUsername) {
    if (typeof newUsername === "string") {
      this.#username = newUsername;
    } else {
      console.log("User name must be a string!");
    }
  }

  get username() {
    return this.#username;
  }
}

const myWallet = new Wallet();
console.log(myWallet.amount);

myWallet.username = "Max";
console.log(myWallet.username);

myWallet.username = "Gui";
console.log(myWallet.username);

myWallet.username += " Hostins";
console.log(myWallet.username);
