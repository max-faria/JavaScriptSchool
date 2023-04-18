car1 = prompt("Insira o nome do carro1:");
vel1 = prompt("Insira a velocidade do carro 1:");
car2 = prompt("Insira o nome do carro2");
vel2 = prompt("Insira a velocidade do carro 2:");

if (vel1 > vel2) {
  alert(car1 + " é mais rápido.");
} else if (vel2 > vel1) {
  alert(car2 + " é mais rápido");
} else {
  alert(car1 + " e " + car2 + " estão na mesma valocidade.");
}
