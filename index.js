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
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}

// function to initialize program
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: questions[0]
        },
        {
            type: 'input',
            name: 'email',
            message: questions[1]
        },
        {
            type: 'input',
            name: 'title',
            message: questions[2]
        },
        {
            type: 'input',
            name: 'description',
            message: questions[3]
        },
        {
            type: 'list',
            name: 'install',
            message: questions[4],
            choices: ['npm i']
        },
        {
            type: 'list',
            name: 'license',
            message: questions[5],
            choices: ['MIT']
        },
        {
            type: 'list',
            name: 'tests',
            message: questions[6],
            choices: ['npm test']
        },
        {
            type: 'input',
            name: 'info',
            message: questions[7]
        },
        {
            type: 'input',
            name: 'contribute',
            message: questions[8]
        },
    ])
    .then((response) => {
        const readme = generateMarkdown(response);
        return writeToFile('README.md', readme);
    })
}

// function call to initialize program
init();
