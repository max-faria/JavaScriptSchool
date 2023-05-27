// function calculate uses the function eval()

function calculate() {
  const resultInput = document.getElementById("result");
  console.log("calculado");
  resultInput.value = "ERROR";
  resultInput.classList.add("error");
  const result = eval(input.value);
  resultInput.value = result;
  resultInput.classList.remove("error");
}

export { calculate };
