import { calculate } from "./calculate.js";
import { copyToClipboard } from "./copyToClipboard.js";
import { themeSwitcher } from "./themeSwitcher.js";
import { handleButtonPress, handeClear, handleTyping } from "./keyHandlers.js";

const input = document.getElementById("input");

// Add events to the buttons
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtonPress);
});

// Clear button
document.getElementById("clear").addEventListener("click", handeClear);

//Equal button
document.getElementById("equal").addEventListener("click", function () {
  calculate();
});

input.addEventListener("keydown", handleTyping);

document
  .getElementById("copyToClipboard")
  .addEventListener("click", copyToClipboard);

document
  .getElementById("themeSwitcher")
  .addEventListener("click", themeSwitcher);
