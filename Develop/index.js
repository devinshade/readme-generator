// console.log("hellooo, node")
// ! TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// ! TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?',
    'What is the description of your project?',
    'What are the installation instructions?',
    'What is the usage information?',
// Choose a license from a list of options
    'Choose a license for your project:',
    'What are the contribution guidelines?',
    'What are the test instructions?',
// GitHub Username and Email address are added to the Questions section
    // with instructions on how to reach you with additional questions
    'What is your GitHub username?',
    'What is your email address?'
];
// console.log(questions)

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Where are you from?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What is your favorite hobby?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is your favorite food?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Enter your LinkedIn URL.',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter your LinkedIn URL.',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your LinkedIn URL.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your LinkedIn URL.',
      },
    ]);
  };

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`File ${fileName} has been saved.`);
      });
};

// TODO: Create a function to initialize app
function init() {};

// Function call to initialize app
init();
