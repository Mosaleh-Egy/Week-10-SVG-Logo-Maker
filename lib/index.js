const { createCanvas } = require("canvas");
const fs = require("fs");
const Prompt  = require('./prompt');
const {Square, Circle, Triangle} =  require('./shapes')




const canvas = createCanvas(300, 200, 'svg');
const context = canvas.getContext("2d");
context.fillStyle = "#ffffff";
context.textAlign = 'center'

const RenderText = (text,color, context)=>{
    const horizontal_align = (context.canvas.width / 2) 
    const vertical_align = (context.canvas.height / 3 + 20) + 100 
    let FontSize = 45;
    context.font = `800 ${FontSize}px sans-serif`
    context.fillStyle = color
    context.fillText(text, horizontal_align, vertical_align)
}

module.exports=()=>{
    Prompt().then((res)=>{
        const TextToRender = res.values.textPrompt;
        const TextPromptColor = res.values.textPromptColor;
        const Shape = res.values.Shape;
        const ShapeColor = res.values.ShapeColor;
        
        switch(Shape.toLowerCase()){
            case "circle":
                new Circle(ShapeColor,50,context).Render();
                break;
            case "square":
                new Square(100,100,ShapeColor,context).Render();
                break;
            case "triangle":
                new Triangle(ShapeColor,context).Render();
                break;
            default: break;
        }
        RenderText(TextToRender, TextPromptColor, context);
        const buffer = canvas.toBuffer("image/svg");
        fs.writeFileSync("./examples/Logo.svg", buffer);
        console.log("\nGenerated Logo.svg✨")
    })
    
}
