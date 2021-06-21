// TODO: Include packages needed for this application

//require fs
const fs = require("fs");
//require generateMarkdown.js file
const generateMarkdown = require("./utils/generateMarkdown.js");
//require inquirer
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
  //Add to the section enititled Description, Installation, Usage, Contributing, and Tests - Start

  //Title
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?(Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("You must enter the title of your project!");
        return false;
      }
    },
  },
  //Description
  {
    type: "input",
    name: "description",
    message:
      "How would you describe your project? Please enter a description.(Required)",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("You must enter a description of your project!");
        return false;
      }
    },
  },
  //Installation
  {
    type: "input",
    name: "installaton",
    message: "What are the installation instructions for your project?",
    validate: (intallationInput) => {
      if (intallationInput) {
        return true;
      } else {
        console.log(
          "You must provide installation instructions for your project!"
        );
        return false;
      }
    },
  },
  //Credits
  {
    type: "input",
    name: "credit",
    message: "Who would you like to credit on this project?",
    validate: (creditInput) => {
      if (creditInput) {
        return true;
      } else {
        console.log("You must provide credit to other devs for your project!");
        return false;
      }
    },
  },
  //Usage
  {
    type: "input",
    name: "usage",
    message: "What are the instructions for the use of your project?",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log(
          "You must provide instructions for the use of your project!"
        );
        return false;
      }
    },
  },
  //Contributing
  {
    type: "input",
    name: "contributing",
    message:
      "What are your guidelines for other developers to contribute your application or package?",
    validate: (contributingInput) => {
      if (contributingInput) {
        return true;
      } else {
        console.log("You must provide your contribution guidelines!");
        return false;
      }
    },
  },
  // Add to the section enititled Description, Installation, Usage, Contributing, and Tests - End

  //Add to the section enititled License - Start
  //License
  {
    type: "list",
    name: "license",
    message: "Which license from this list applies to your project:",
    choices: [
      "No license",
      "Apache License 2.0",
      "Boost Software License 1.0",
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "MIT",
      "Mozilla Public License 2.0",
      "The Unlicense",
    ],
  },
  //Add to the section enititled License - End

  //Add to the section entitled Badges - Start
  //Badges
  {
    type: "list",
    name: "badges",
    message:
      "Which language from this list is applied the most in your project:",
    choices: ["Javascript", "HTML", "CSS", "Node JS", "No Badges"],
  },
  //Add to the section entitled Badges - End

  //Add to the section entitled Features - Start
  //Features
  {
    type: "input",
    name: "features",
    message: "What features are in your project?",
    validate: (featuresInput) => {
      if (featuresInput) {
        return true;
      } else {
        console.log("You must provide the features in your project!");
        return false;
      }
    },
  },
  //Add to the section entitled Features - End

  //Add to the section entitled Tests - Start
  //Tests
  {
    type: "input",
    name: "tests",
    message: "What tests can you run for your project(Include Examples)?",
    validate: (testsInput) => {
      if (testsInput) {
        return true;
      } else {
        console.log(
          "You must provide how to test your project, with examples!"
        );
        return false;
      }
    },
  },
  //Add to the section entitled Tests - End

  //Add to the section enititled Questions - Start
  //Github Username
  {
    type: "input",
    name: "githubUsername",
    message: "What is your Github username?(Required)",
    validate: (githubUsernameInput) => {
      if (githubUsernameInput) {
        return true;
      } else {
        console.log("You must provide your Github username!");
        return false;
      }
    },
  },
  //Email Address
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("You must provide your email address!");
        return false;
      }
    },
  },
  //Add to the section enititled Questions - End
];

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
