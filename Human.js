class Human {
    name;
    gender;
    weight;
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    getGender () {
        switch (this.gender) {
            case 1:
                return "Male";
            case 2:
                return "Female";
            default:
                return "Không xác định";
        }
    }
    say (string) {
        console.log(string);
    }
    eatApple (apple) {
        if (apple.weight > 0) {
            apple.decreaseApple();
            this.weight++
        } else {
            document.write("Táo đã hết rồi");
        }
    }
    checkApple(apple) {
        return apple.isEmpty();
    }
}