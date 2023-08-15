function imcCalculate(height, weith) {
  return new Promise((resolve, reject) => {
    console.log("The promise it's been executed...");
    setTimeout(() => {
      if (isNaN(height) || isNaN(weith)) {
        reject("Some entry is not a number");
      } else {
        resolve(weith / height ** 2);
        console.log(weith / height ** 2);
      }
    }, 2 * 1000);
  });
}

function showImc(height, weith) {
  const imc = imcCalculate(height, weith);
  console.log(imc);

  imc
    .then((result) => {
      console.log(`IMC ${result}`);
      if (result < 18.5) {
        console.log(`MAGREZA`);
      } else if (result < 25) {
        console.log(`NORMAL`);
      } else if (result < 30) {
        console.log(`SOBREPESO`);
      } else if (result < 40) {
        console.log("OBESIDADE");
      } else {
        console.log("OBESIDADE GRAVE");
      }
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(`Weight: ${weith} Height: ${height}`);
}

const imc = showImc(1.75, "abc");

// imc
//   .then((result) => {
//     console.log(`The result is ${result}`);
//   })
//   .catch((err) => console.log(`The promise was reject. Reason: ${err}`))
//   .finally(() => console.log("The promise was finished"));
