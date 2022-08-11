class GuessingGame {

	constructor() {
		this.array = [];
	}

	setRange(min, max) {
		for (let i = min+1; i <= max; i++) {
			this.array.push(i);
		}
	}

	guess() {
		return this.array[0];
	}


	lower() {
		this.array = this.array.slice(0, Math.ceil(this.array.length / 2));
	}

	greater() {
		this.array = this.array.slice(Math.floor(this.array.length / 2), this.array.length);

	}
}



module.exports = GuessingGame;
