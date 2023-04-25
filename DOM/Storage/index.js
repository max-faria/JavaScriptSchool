document.getElementById("sessionBtn").addEventListener("click", function () {
  const input = document.getElementById("session");
  sessionStorage.setItem("info", input.value);
  input.value = "";
});

document.getElementById("readSesssion").addEventListener("click", function () {
  const info = sessionStorage.getItem("info");
  alert("The value on the SessionStorage is: " + info);
});

document.getElementById("localBtn").addEventListener("click", function () {
  const text = document.getElementById("local");
  localStorage.setItem("text", text.value);
  text.value = "";
});

document.getElementById("readLocal").addEventListener("click", function () {
  const text = localStorage.getItem("text");
  alert("The value on the LocalStorage is: " + text);
});

document.getElementById("cookieBtn").addEventListener("click", function () {
  const input = document.getElementById("cookie");
  // cookieName=value; expires=UTCStringDate; path=/
  const cookieName = "info=" + input.value + ";";
  const expires = "expires=" + new Date(2023, 5, 26) + ";";
  const path = "path=/";
  document.cookie = cookieName + expires + path;
  input.value = "";
  console.log(document.cookie);
});

document.getElementById("cookie2Btn").addEventListener("click", function () {
  const input = document.getElementById("cookie2");
  // cookieName=value; expires=UTCStringDate; path=/
  // be careful to not save diferent cookies with the same name
  const cookieName = "text=" + input.value + ";";
  const expires = "expires=" + new Date(2023, 5, 26) + ";";
  const path = "path=/";
  document.cookie = cookieName + expires + path;
  input.value = "";
  console.log(document.cookie);
});
