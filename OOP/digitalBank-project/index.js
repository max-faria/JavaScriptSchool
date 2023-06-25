const App = require("./App");

App.createUser("max@email.com", "Max Faria");
App.createUser("guilherme@email.com", "Gui Hostins");
App.createUser("lucy@email.com", "Lucy Hallak");

App.deposit("max@email.com", 100);

App.transfer("max@email.com", "guilherme@email.com", 20);

App.changeLoanFee(10);
App.takeLoan("lucy@email.com", 2000, 24);

console.table(App.findUser("max@email.com"));
console.table(App.findUser("max@email.com").account);

console.table(App.findUser("guilherme@email.com"));
console.table(App.findUser("guilherme@email.com").account);

console.table(App.findUser("lucy@email.com"));
console.table(App.findUser("lucy@email.com").account);
console.log(App.findUser("lucy@email.com").account.loans[0].installments);
