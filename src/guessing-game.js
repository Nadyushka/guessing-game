class GuessingGame {

	constructor() {
	}

	setRange(min = 0, max) {
		this.guess = max;
	}

	guess() {
		if (this.guess === number) {
			return this.guess;
		} else if (this.guess > number) {
			
		}
	}

	lower() {
		this.guess = this.guess / 2;
	}

	greater() {
		this.guess = this.guess + this.guess / 2;
	}
}

module.exports = GuessingGame;
