// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the project's title?"
    },
    {
        type: 'editor',
        name: 'description',
        message: 'Write a short description of the project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What installation packages are required?'
    },
    {
        type: 'editor',
        name: 'purpose',
        message: 'What is the purpose of this project?'
    },
    {
        type: 'input',
        name: 'videoLink',
        message: 'Input link to demo video or gif.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license are you using?',
        choices: ['MIT License', 'Apache', 'Academic', 'GNU', 'ISC', 'Mozilla', 'Open']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Input github link to the repository.'
    },
    {
        type: 'input',
        name: 'deployment',
        message: 'Input link to deployed site'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const filename = 'Sample.md';

        // TODO: Create a function to write README file
        fs.writeFile(filename, generateMarkdown(answers), (err) => 
        err ? console.log(err) : console.log("Success!")
        );
    })
}

// Function call to initialize app
init();
