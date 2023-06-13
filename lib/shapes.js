class Shape {
    constructor(Height, Width, Color, Canvas) {
        this.Height = Height;
        this.Width = Width;
        this.Color = Color;
        this.Canvas = Canvas

    }
    Render() {
        const horizontal_align = (this.Canvas.canvas.width / 2) - 50
        const vertical_align = (this.Canvas.canvas.height / 3 + 20) - 50
        this.Canvas.fillStyle = this.Color;
        this.Canvas.beginPath();
        this.Canvas.rect(horizontal_align, vertical_align, this.Height, this.Width);
        this.Canvas.stroke();
        this.Canvas.fill();
    }
}

class Circle extends Shape {
    constructor(Color, Radius, Canvas) {
        super(0, 0, Color, Canvas)
        this.Radius = Radius
    }
    Render() {
        const horizontal_align = this.Canvas.canvas.width / 2
        const vertical_align = this.Canvas.canvas.height / 3 + 20
        const image_border_thickness = 10
        this.Canvas.fillStyle = this.Color;
        this.Canvas.beginPath()
        this.Canvas.arc(horizontal_align, vertical_align, this.Radius + image_border_thickness, 0, Math.PI * 2)
        this.Canvas.stroke()
        this.Canvas.fill()
    }
}

class Triangle extends Shape {
    constructor(Color, Canvas) {
        super(0, 0, Color, Canvas)
    }
    Render() {
        const horizontal_align = this.Canvas.canvas.width / 2
        const vertical_align = this.Canvas.canvas.height / 3 + 70
        const Margin = horizontal_align - 70

        this.Canvas.fillStyle = this.Color;
        this.Canvas.beginPath()
        this.Canvas.moveTo(Margin, vertical_align)
        this.Canvas.lineTo(horizontal_align + 10, 20)
        this.Canvas.lineTo(horizontal_align + 80, 135)
        this.Canvas.stroke()
        this.Canvas.closePath()
        this.Canvas.fill()

    }
}

class Square extends Shape {
    constructor(Height, Width, Color, Canvas) {
        super(Height, Width, Color, Canvas)
    }
}

module.exports = { Square, Triangle, Circle }