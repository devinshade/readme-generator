// console.log("hellooo, node")
// ! TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// const renderLicenseBadge = require('./utils/generateMarkdown');
// const renderLicenseLink = require('./utils/generateMarkdown');
// ! TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?',
    'Enter a description for your project:',
    'What are the installation instructions?',
    'Enter the usage information:',
// Choose a license from a list of options
    'Choose a license for your application:',
    'How can others contribute?',
    'Enter test instructions:',
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
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'ISC', 'None']
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      }
    ]);
  };
// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.appendFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`File ${fileName} has been saved.`);
    });
};

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
      .then((answers) => writeToFile('README.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
