const p = new Promise((resolve, reject) => {
  console.log("The promisse it's been exectuted!");

  setTimeout(() => {
    if (true) {
      reject(false);
    }
    console.log("Resolvendo a promise..");
    resolve(true);
  }, 1000 * 2);
});

console.log(p);
