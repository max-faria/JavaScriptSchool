const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.getElementById("input");
const resultInput = document.getElementById("result");

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

// Add events to the buttons
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
});

// Clear button
document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  input.focus(); //put the cursor on the input space
});

//Equal button

document.getElementById("equal").addEventListener("click", function () {
  calculate();
});

input.addEventListener("keydown", function (ev) {
  ev.preventDefault(); // to prevent the normal behavoir of the function
  if (allowedKeys.includes(ev.key)) {
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
});

// function calculate uses the function eval()
function calculate() {
  console.log("calculado");
  resultInput.value = "ERROR";
  resultInput.classList.add("error");
  const result = eval(input.value);
  resultInput.value = result;
  resultInput.classList.remove("error");
}

document
  .getElementById("copyToClipboard")
  .addEventListener("click", function (ev) {
    const btn = ev.currentTarget;
    if (btn.innerText === "Copy") {
      btn.innerText = "Copied!";
      btn.classList.add("success");
      navigator.clipboard.writeText(resultInput.value); // Copy the trasnference area
    } else {
      btn.innerText = "Copy";
      btn.classList.remove("success");
    }
  });

document.getElementById("themeSwitcher").addEventListener("click", function () {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--border-color", "#aaa");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("--primary-color", "#26834a");
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--primary-color", "#4dff91");
    main.dataset.theme = "dark";
  }
});
