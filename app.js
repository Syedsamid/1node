
//const readline = require("readline-sync"); //* This is Es5 syntax for using npm packages

import readline from "readline-sync";   //* This is Es6 syntax for using npm packages

let age = readline.questionInt("Enter your age? : ");
console.log(`My age is ${age}`);

let phone = readline.questionInt("Enter your phone number? : ");
console.log(`What is your phone number is ${phone}`);

let email = readline.questionEMail("Enter your email ");
console.log(email);