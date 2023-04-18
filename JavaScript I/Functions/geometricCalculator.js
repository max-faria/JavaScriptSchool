/* 
Write a JavaScript program to calculate the area of different geometric shapes. 
The program should start with a menu containing the 
different calculation options. The options should be:

Area of triangle: base * height / 2
Area of rectangle: base * height
Area of square: side²
Area of trapezoid: (base1 + base2) * height / 2
Area of circle: pi * radius² (considering pi = 3.14)

You should write the program using functions wherever 
possible to separate the procedures. The program should 
also have an option to "Exit," and as long as it is not 
chosen, it should return to the menu.
*/

function iniciate() {
  return prompt(
    "Choose a area to calculate:" +
      "\n1 Area of triangle:" +
      "\n2 Area of rectangle:" +
      "\n3 Area of square:" +
      "\n4 Area of trapezoid: " +
      "\n5 Area of circle:" +
      "\n6 Exit"
  );
}

// function exibirMenu() {
//   return prompt(
//     "Calculadora Geométrica\n" +
//       "1. Calcular área de triângulo\n" +
//       "2. Calcular área de retângulo\n" +
//       "3. Calcular área de quadrado\n" +
//       "4. Calcular área de trapézio\n" +
//       "5. Calcular área de círculo\n" +
//       "6. Sair\n"
//   );
// }

function areaSquare() {
  let l = parseFloat(prompt("Value of the side:"));
  return l * l;
}

function areaTriangle() {
  let b = parseFloat(prompt("Value of the base:"));
  let h = parseFloat(prompt("Value of the height:"));
  return (b * h) / 2;
}

function areaCircle() {
  let r = parseFloat(prompt("Radius:"));
  return 3.14 * r * r;
}

function areaRectangle() {
  let b = parseFloat(prompt("Value of the base:"));
  let h = parseFloat(prompt("Value of the height:"));
  return b * h;
}

function areaTrapezoide() {
  let b1 = parseFloat(prompt("Value of base 1:"));
  let b2 = parseFloat(prompt("Valaue of base 2:"));
  let h = parseFloat(prompt("Valaue of height:"));
  return ((b1 + b2) * h) / 2;
}

function execute() {
  let option = "";

  do {
    option = iniciate();
    let result;

    switch (option) {
      case "1":
        result = areaTriangle();
        break;
      case "2":
        result = areaRectangle();
        break;
      case "3":
        result = areaSquare();
        break;
      case "4":
        result = areaTrapezoide();
        break;
      case "5":
        result = areaCircle();
        break;
      case "6":
        result = alert("Finishing the program");
        break;
      default:
        alert("Invalid Option. Try again.");
    }
    if (result) {
      alert("Area: " + result);
    }
  } while (option !== "6");
}

execute();
