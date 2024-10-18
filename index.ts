#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    message: "Enter first number =",
    type: "number",
    name: "firstNumber",
  },
  {
    message: "Enter second number =",
    type: "number",
    name: "secondNumber",
  },
  {
    message: "Select one of the operators to perform operator",
    type: "list",
    name: "operator",
    choices: [
      "1 - Addition (+)",
      "2 - Subtraction (-)",
      "3 - Multiplication (*)",
      "4 - Division (/)",
      "5 - Percentage (%)",
    ],
  },
]);

// condition statement
if (answer.operator === "1 - Addition (+)") {
  console.log("Your answer is =", answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "2 - Subtraction (-)") {
  console.log("Your answer is =", answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "3 - Multiplication (*)"){
  console.log("Your answer is =", answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "4 - Division (/)") {
  console.log("Your answer is =", answer.firstNumber / answer.secondNumber);
} else if (answer.operator === "5 - Percentage (%)") {
  console.log("Your answer is =", answer.firstNumber % answer.secondNumber);
}
