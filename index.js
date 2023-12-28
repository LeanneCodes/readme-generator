const fs = require("fs");
const path = require('path'); // optional
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    'What is your GitHub username?',
    'What is your email address?',
    'What is the title of the project?',
    'Please write a short description of your project',
    'What command should be run to install dependencies?',
    'What kind of license should your project have?',
    'What command should be used to run tests?',
    'What should the user know about using the repo?',
    'What does the user need to know about contributing to the repo?'
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
