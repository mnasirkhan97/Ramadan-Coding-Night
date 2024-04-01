#! /usr/bin/env node

import inquirer from "inquirer"

// 1) coputer will generate random number : done.
// 2) user input for guessing number 
// 3) compare  user input with computer generated number and show result


// const randomNumber = 13;
// const randomNumber = Math.random();  // is code se 1 random nuber bany ga jo 0 se 1 k darmiyan hoga (0.111 to 0.999)
// const randomNumber = Math.floor(Math.random()); // floor() is se point khtm ho jaye ga or kam value ki trf jaye ga (yani agr 0.6 hai to 0 kr de ga) 
// const randomNumber = Math.floor(Math.random() * 10); // is se phly 10 se Multipliy hoga us ki bd point ko kjtm kry ga (note 10 ki value nh i gi kiun k random() 1 se kam value bnata h)
// const randomNumber = Math.floor(Math.random() * 6 + 1 ); // is se  hamen 1 se 6 tk value mily gi
// console.log(randomNumber);


const randomNumber = Math.floor(Math.random() * 6 + 1 ); // is se hamen 1 se 6 tk random number mily gi

const answer = await inquirer.prompt([
    {
        name : "userGuessedNumber",
        type : "number",
        message: "Please Guess a Number between 1 to 6 :",
    },
]);

// console.log(answer);

if (answer.userGuessedNumber === randomNumber ){
    console.log("Congratulations.. You Guessed right Number")
}
else{
    console.log("Sorry..! You Guessed Wrong Number");
}
