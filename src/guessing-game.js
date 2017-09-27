class GuessingGame {
    constructor() {}

    setRange(min, max) {
      this.minRange = min;
      this.maxRange = max;
    }

    guess() {
      var guessTemp = this.maxRange - this.minRange;
      guessTemp = guessTemp/2;
      guessTemp = Math.ceil(guessTemp) + this.minRange;
      this.guessNum = guessTemp;
      return this.guessNum;
    }

    lower() {
    this.maxRange = this.guessNum;
    }

    greater() {
    this.minRange = this.guessNum;
    }
}

module.exports = GuessingGame;
