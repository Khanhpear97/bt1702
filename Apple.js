class Apple {
    weight;
    constructor(weight) {
        this.weight = weight;
    }
    isEmpty() {
      return this.weight === 0
    }
    decreaseApple () {
        if (this.isEmpty()) {
            alert("Táo đã hết rồi");
        } else {
            this.weight--;
        }
    }
}