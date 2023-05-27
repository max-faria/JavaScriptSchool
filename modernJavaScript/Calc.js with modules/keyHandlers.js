import { calculate } from "./calculate.js";

const input = document.getElementById("input");

const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

function handleButtonPress(ev) {
  const value = ev.currentTarget.dataset.value;
  input.value += value;
}

function handeClear() {
  input.value = "";
  input.focus(); //put the cursor on the input space
}
function handleTyping() {
  ev.preventDefault(); // to prevent the normal behavoir of the function
  if (allowedKeys.includes(ev.key)) {
    //we use key to specify values from the keyboard
    // verify if the ev.key is in allowed keys
    input.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1); // Slice de input taking off the last element
  }
  if (ev.key === "Enter") {
    calculate();
  }
}

export { handleButtonPress, handeClear, handleTyping };
