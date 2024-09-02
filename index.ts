#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";

const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number between 1-10: ",
  },
]);

if(answers.userGuessedNumber === randomNumber){
  console.log(chalk.green('Congratulations! You guessed the right number.'));
  
}else{
  console.log(chalk.red('You guessed the wrong number!'));
}