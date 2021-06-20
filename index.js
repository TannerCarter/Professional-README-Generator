// TODO: Include packages needed for this application

//require fs
const fs = require("fs");
//require generateMarkdown.js file
const generateMarkdown = require("./utils/generateMarkdown.js");
//require inquirer
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("\x1b[4m\x1b[32m", "Your README Has Been Generated!");
  });
}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
