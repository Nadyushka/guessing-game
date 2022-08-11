class GuessingGame {

	constructor() {
	}

	setRange(min = 0, max) {
		this.array = [];
		for (let i = 0; i < max; i++) {
			this.array.push(i);
		}
	}

	guess() {
		return this.array.length;
	}


	lower() {
		return this.array.slice(0, Math.ceil(this.array.length / 2));
	}

	greater() {
		return this.array.slice(Math.ceil(this.array.length / 2), this.array.length - 1);
	}
}

module.exports = GuessingGame;
