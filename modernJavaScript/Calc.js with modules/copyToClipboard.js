function copyToClipboard(ev) {
  const btn = ev.currentTarget;
  const resultInput = document.getElementById("result");
  if (btn.innerText === "Copy") {
    btn.innerText = "Copied!";
    btn.classList.add("success");
    navigator.clipboard.writeText(resultInput.value); // Copy the trasnference area
  } else {
    btn.innerText = "Copy";
    btn.classList.remove("success");
  }
}

export { copyToClipboard };
