class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }

}

const square = new Rectangle(20, 20);
console.log(square.calcArea());
const long = new Rectangle(10, 250);
console.log(long.calcArea());


class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text =  text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`This is text: ${this.text}, our color: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(10, 15, "Bohdan", 'red');

console.log(div.calcArea());
div.showMyProps();


class Animal {
    constructor(name) {
        this.name = name;
        this.speed = 0 
    }
}

class Rabitt extends Animal {
    constructor(name, length) {
        super(name);
        this.length = length
    }

}

let rabbit = new Rabitt('Tim', 15);

console.log(rabbit.name, rabbit.length)

console.log(0,4 + 0,2)