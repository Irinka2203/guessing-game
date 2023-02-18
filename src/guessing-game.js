class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.maxVal = max;
    this.minVal = min;
    }

    guess() {
        return Math.round((this.maxVal + this.minVal) / 2)
    }

    lower() {
        return this.maxVal = (Math.round((this.maxVal + this.minVal) / 2));
    }

    greater() {
        return  this.minVal = (Math.round((this.maxVal + this.minVal) / 2));
    }
}




module.exports = GuessingGame;
