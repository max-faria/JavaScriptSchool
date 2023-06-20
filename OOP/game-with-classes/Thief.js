const Character = require("./Character");

module.exports = class Thief extends Character {
  attack(targetCharacter) {
    targetCharacter.lifePts -=
      2 * (this.attackPts - targetCharacter.defensePts);
  }
};
