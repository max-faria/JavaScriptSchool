function execute() {
  return new Promise((resolve, reject) => {
    console.log("The promisse it's been executed...");

    setTimeout(() => {
      console.log("Resolving the promise...");
      resolve("Result");
    }, 1);
  });
}

const p = execute();
console.log(p);

setTimeout(() => {
  console.log(p);
}, 2000);
