class Property {
  constructor(area, price) {
    this.price = price;
    this.area = area;
  }

  getPricePerSquaremeter() {
    return this.price / this.area;
  }
}

class House extends Property {}

const land = new Property(200, 50000);
const house = new House(120, 200000);

console.log(land);
console.log(house);
console.log(house.getPricePerSquaremeter());
console.log(house instanceof Property);

class Appartmet extends Property {
  constructor(number, floor, area, price) {
    super(area, price);
    this.number = number;
    this.floor = floor;
  }

  getfloor() {
    return this.number.slice(0, -2);
  }
}
