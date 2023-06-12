const inquirer = require("inquirer");
const {writeFile} = require ("fs/promises");
const {Triangle, Circle, Square, Svg} = require("./lib/shapes");
const questions = [
{
    name:'text',
    type: 'input',
    message: 'text of Logo'
},
{
    name:'textColor',
    type: 'input',
    message: 'textColor'
},
{
    name:'shape',
    type: 'list',
    message: 'What is Logo shape?',
    choices: ['triangle', 'circle', 'square']
},
{
    name:'shapeColor',
    type: 'input',
    message: 'shapeColor'
}
]
inquirer.prompt(questions)
.then(answers => {
    let shape = null
    if (answers.shape === 'circle') {
        shape = new Circle()
        }
    else if (answers.shape === 'square') {
shape = new Square()
    } else {
        shape = new Triangle()
    }
    shape.setColor(answers.shapeColor) 

    const svg = new Svg()
    svg.setText(answers.textColor, answers.text)
    svg.setShape(shape)
    return writeFile("generatedLogo.svg", svg.render())
}) .then(() => {
    console.log("svg generated successfully")
}) .catch((error) => {
    console.log(error)
})