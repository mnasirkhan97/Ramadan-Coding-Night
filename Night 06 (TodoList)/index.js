#! /usr/bin/env node
import inquirer from 'inquirer';
let todos = [];
let todoCondition = true;
while (todoCondition) {
    let todoQuestions = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "What would you like to add in your todos ?"
        },
        {
            name: "seondQuestion",
            type: "confirm",
            message: "Would you like to add more in your todos ?",
            default: "true",
        }
    ]);
    todos.push(todoQuestions.firstQuestion);
    console.log(todos);
    todoCondition = todoQuestions.seondQuestion;
}
