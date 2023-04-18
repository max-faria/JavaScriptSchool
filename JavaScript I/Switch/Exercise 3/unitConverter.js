const value = prompt("Value to convert (m):");
const option = prompt(
  "Chosse the unit to convert for:\n a) Milimeter(mm)\n b) Centimeter(cm) \n c) Decimeter(dm) \n d) Decameter(dam)\n e) Hectometer(hm)\n f) Kilometer(km)"
);

const convertedValue = 0;

switch (option) {
  case "a": //mm
    alert(value + "m is equal to " + value * 1000 + "mm");
    break;
  case "b": //cm
    alert(value + "m is equal to " + value * 100 + "cm");
    break;
  case "c": //dm
    alert(value + "m is equal to " + value * 10 + "dm");
    break;
  case "d": //dam
    alert(value + "m is equal to " + value / 10 + "dam");
    break;
  case "e": //hm
    alert(value + "m is equal to " + value / 100 + "hm");
    break;
  case "f": //km
    alert(value + "m is equal to " + value / 1000 + "km");
    break;
  default:
    alert("Invalid Option");
}
