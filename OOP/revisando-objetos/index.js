const book = {
  title: "Oregon",
  pages: 468,
  pubished: true,
  inStrock: 20,
  tags: ["fantasy", "adventure", "medieval"],
  author: {
    name: "Christopher Paolini",
  },

  addOnStock(quantity) {
    // this must be used to access the object, used inside the object definition
    this.inStrock += quantity;
  },

  save: function () {
    //save on the data base
  },
};

console.log(book.title);
book.addOnStock(50);
// console.log(book.inStrock);
book.save = function () {
  // another way to adda method in a object out of their definition
};
console.log(book);

// BUILDER FUNCTION -> Function that creates objects
//PascalCase to write builder functions

function Adress(street, number, city, state, days, time) {
  this.street = street;
  this.number = number;
  this.city - city;
  this.state = state;
  this.days = days;
  this.time = time;
  this.clean = false;
  this.rooms = 0;

  this.addRoom = function addRoom(quantity) {
    this.rooms += quantity;
  };

  this.cleanHouse = function () {
    // make the house clean
    this.clean = true;
  };
}

const days = ["monday", "wednesday", "friday"];
const time = { monday: 8, wednesday: 12, friday: 8 };

// creating a object with the builder function
const guilherme = new Adress(
  "Victor Konder",
  230,
  "Blumenau",
  "SC",
  days,
  time
);

console.log(guilherme); // show the object created
guilherme.addRoom(2); // add room to the house
console.log(guilherme);
guilherme.cleanHouse(); //clean the house
console.log(guilherme);

const max = new Adress("Perf Acacio", 1643, "Floripa", "SC", days, time);

//console.log(max);
