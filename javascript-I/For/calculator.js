/*Write a JavaScript program that is capable of calculating the 
multiplication table of a certain number (from 1 to 20). 
The program should start by asking for the number to be used in 
the calculations and then save all the multiplication results 
from 1 to 20 using the input number inside a string variable. 
After that, the program should display these results and then 
terminate.
*/
const n = prompt("Insert a number: ");
/*Sintaxe:

for (inicializacao; condicao; incrementação/finalização) {
  // ...
}*/
result = "";
for (i = 1; i <= 20; i++) {
  temp = n * i;
  result = result + n + "*" + i + " = " + temp + "\n";
}

alert(result);
