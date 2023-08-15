function execute() {
  return new Promise((resolve, reject) => {
    console.log("The promisse it's been executed...");

    setTimeout(() => {
      if (false) {
        reject("A promise foi rejeitada");
      } else {
        console.log("Resolving the promise...");
        resolve(42);
      }
    }, 1000 * 2);
  });
}

const p = execute();

p.then((result) => {
  console.log(`A promiesse for resolvida. O resultado foi ${result}`);
})
  .catch((err) => {
    console.log(`A promise foi rejeitada. Motivo: ${err}`);
  })
  .finally(() => {
    console.log("A Promise foi finalizada");
  });
