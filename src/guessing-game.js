class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.value = Math.ceil(this.min / 2 + this.max / 2);
        return this.value;
    }

    lower() {
        this.max = this.value;
    }

    greater() {
        this.min = this.value;
    }
}

module.exports = GuessingGame;
