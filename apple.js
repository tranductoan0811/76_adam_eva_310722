
class Apple {
  constructor(weight) {
    this.weight = 10;
  }
  getWeightApple() {
    return this.weight;
  }
  isEmpty() {
    if (this.weight <= 0) {
      return true;
    } else {
      return false;
    }
  }

  decreaseApple() {
    if (this.isEmpty()) {
      "Ăn hết táo rồi"
    } else {
      this.weight--;
    }
  }

  
}


