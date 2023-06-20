const Character = require("./Character");

module.exports = class Warrior extends Character {
  constructor(name, lifePts, attackPts, defensePts, shieldPts) {
    super(name, lifePts, attackPts, defensePts);
    this.shieldPts = shieldPts;
    this.position = "attacking";
  }

  attack(targetCharacter, position) {
    if (position === "attacking") {
      super.attack(targetCharacter);
    }
  }

  switchPosition() {
    if (this.position === "attacking") {
      this.position = "defending";
      this.defensePts += this.shieldPts;
    } else {
      this.position = "attacking";
      this.defensePts -= this.shieldPts;
    }
  }
};
