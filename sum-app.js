class SumApp {
  constructor(numbers) {
    this.numbers = [];
  }

  addNumber(n) {
    return this.numbers.push(n);
  }

  getSum() {
    let sum = 0;
    for (let i = 0; i < this.numbers.length; i++) {
      sum += this.numbers[i];
    }
    return sum;
  }

  reset() {
    this.numbers = [];
  }
}
