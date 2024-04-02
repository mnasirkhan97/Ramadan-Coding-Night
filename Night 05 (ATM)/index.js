#! /usr/bin/env node
import inquirer from "inquirer";
let totalBalnce = 10000;
const pinCode = 9876;
let pinEntered = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: " Enter your Pin Number",
    }
]);
// console.log(pinEntered.pin);
if (pinCode === pinEntered.pin) {
    let atmQues = await inquirer.prompt([
        {
            name: "accountType",
            message: "Select your account",
            type: "list",
            choices: [
                "Current Account",
                "Saving Account",
            ]
        },
        {
            name: "transactionMethod",
            message: "Select your Transaction Method",
            type: "list",
            choices: [
                "Cash Withdrawal",
                "Balance Check",
                "Fast Cash",
            ]
        }
    ]);
    if (atmQues.transactionMethod == "Cash Withdrawal") {
        let cashWithdrawal = await inquirer.prompt([
            {
                name: "withdrawal",
                message: "Enter your ammount you want to withdraw :",
                type: "number",
            }
        ]);
        // Greater than or equal to operators   
        if (totalBalnce >= cashWithdrawal.withdrawal) {
            totalBalnce -= cashWithdrawal.withdrawal; // totalbalnce = totalBalnce - cashWithdrawal.withdrawal
            console.log(`Your remaing Balance is ${totalBalnce}`);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    else if (atmQues.transactionMethod == "Balance Check") {
        console.log(`Your Balance is : ${totalBalnce}`);
    }
    else {
        let fastAmount = await inquirer.prompt([
            {
                name: "fastcash",
                message: "Select the amount you want to withdraw",
                type: "list",
                choices: [
                    "1000",
                    "2000",
                    "5000",
                ]
            }
        ]);
        if (totalBalnce >= fastAmount.fastcash) {
            totalBalnce -= fastAmount.fastcash; // totalBalne = totalBalnce - fastAmount.fastcash
            console.log(`Your remaing Balance is : ${totalBalnce}`);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
}
else {
    console.log("Please Enter Valid Pin code");
}
;
