import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { messege: "Enter first number", type: "number", name: "firstNumber" },
  { messege: "Enter second number", type: "number", name: "secondNumber" },
  {
    messege: "select one of the operators to perform operation ",
    type: "list",
    name: "oprator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"], 
  },
]);
// conditional statement

if ( answer.oprator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber);
} else if( answer.oprator === "Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);    
} else if(answer.oprator === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);    
}  else if(answer.oprator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber);    
} else {
    console.log("please select valid operators");
}


// console.log(answer);
