class GuessingGame {

	constructor() {
		this.array = [];
	}

	setRange(min, max) {
		for (let i = min; i < max; i++) {
			this.array.push(i);
		}

	}

	guess() {
		return this.array[Math.ceil(this.array.length / 2)];
	}


	lower() {
		this.array = this.array.slice(0, Math.ceil(this.array.length / 2));
	}

	greater() {
		this.array = this.array.slice(Math.ceil (this.array.length / 2));

	}
}



module.exports = GuessingGame;
