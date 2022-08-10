const { maxSatisfying } = require("semver");

class GuessingGame {
  constructor() {}

  start;
  end;

  setRange(min, max) {
    this.start = min;
    this.end = max;
  }

  guess() {
    this.middle = Math.round(this.start + (this.end - this.start) / 2);
    return this.middle;
  }

  lower() {
    this.end = this.middle;
  }

  greater() {
    this.start = this.middle;
  }
}

module.exports = GuessingGame;
