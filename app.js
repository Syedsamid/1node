

const readline = require("readline-sync");

let age = readline.questionInt("Enter your age? : ");
console.log(`My age is ${age}`);

let phone = readline.questionInt("Enter your phone number? : ");
console.log(`What is your phone number is ${phone}`);

let email = readline.questionEMail("Enter your email ");
console.log(email);