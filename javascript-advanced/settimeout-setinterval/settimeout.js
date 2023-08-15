console.log("Programm Iniciated");

const timeoutId = setTimeout(() => {
  console.log("3s passed since the programm was iniciated");
}, 3000); //time is always in miliseconds

clearTimeout(timeoutId); //stop de timeoutr function
