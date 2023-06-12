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
    