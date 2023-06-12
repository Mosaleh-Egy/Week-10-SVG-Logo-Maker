class Shape {
    constructor(color) {
        this.color = color
    };
    setColor(color) {
        this.color = color
    }
}
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}
class Circle extends Shape {
    render() {
        return `<circle cx="200" cy="100" r="100" stroke ="black" fill="${this.color}"/>`
    }
}
class Square extends Shape {
    render() {
        return `<rect x="130" y="80" width="300" height="300" style = "fill: ${this.color}"/>`
    }
}
class Svg {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }
    render() {
        return `<svg version="1.1" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setText(color, text) {
        this.textElement = `<text x="150" y="100" fontsize="50" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShape(shape) {
        this.shapeElement = shape.render()
    }
}
module.exports = { Circle, Triangle, Square, Svg }