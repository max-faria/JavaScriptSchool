class Reservation {
  constructor(guests, room, days) {
    this.guests = guests;
    this.room = room;
    this.days = days;
    this.total = Reservation.baseFee * days;
  }

  static baseFee = 150;

  static showBaseFee() {
    console.log(`Base fee is ${Reservation.baseFee}`);
  }

  static get getBaseFee() {
    return Reservation.baseFee;
  }

  static get premiumFee() {
    return Reservation.baseFee * 1.5;
  }
}

Reservation.showBaseFee();

const r1 = new Reservation(3, "201", 5);
console.log(r1);

console.log(`Using gettter: Base fee is ${Reservation.getBaseFee}`);
console.log(`Premium fee is ${Reservation.premiumFee}`);
