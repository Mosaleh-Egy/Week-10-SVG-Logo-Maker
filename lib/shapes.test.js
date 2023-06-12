const {Triangle, Circle, Square}= require("./shapes");

test("shape test of triangle", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
})


test("shape test of circle", () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<circle cx="200" cy="100" r="100" stroke ="black" fill="blue"/>');
})


test("shape test of square", () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<rect x="130" y="80" width="300" height="300" style = "fill: blue"/>');
})