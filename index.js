// Collection needed for this APP
const inquirer = require('inquirer');
const fs = require('fs');
const createMarkdown = require('./utils/createMarkdown.js');
// Question for user suggestions; Array
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project name');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github user name',
        message: 'Please provide your Github username?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email adress',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('please provide your email adress');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'what',
        message: 'Please provide the details of your project and what kind of problem will it solve',
        validate: whatInput => {
            if (whatInput) {
                return true;
            } else {
                console.log('Please enter the details of your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why have you developed this project ?',
        validate: whyInput => {
            if (whyInput) {
                return true;
            } else {
                console.log('Please enter why you have developed this project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'how',
        message: 'How would a person use this?',
        validate: howInput => {
            if (howInput) {
                return true;
            } else {
                console.log('Please enter the details of your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please inlist the installations details for your project.',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please provide your installation requirements');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide a list of instructions and suggestions for the usage.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter your your list of instructions');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of licence will you be using for your project?',
        choices: ['mit', 'apache', 'agpl', 'no license']
    },
    {
        type: 'confirm',
        name: 'confirmContributers',
        message: 'Would you like to allow other creators to make contribution?',
        default: true
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please inlist guidelines for contributors.',
        when: ({ confirmContributers }) => {
            if (confirmContributers) {
                return true;
            } else {
                return false;
            }
        },
        validate: contributerInput => {
            if (contributerInput) {
                return true;
            } else {
                console.log('Enter contributor processes');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please inlist instructions to test the application.',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter your use test processes!');
                return false;
            }
        }
    }
];
// function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/generated-README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};
// function to prompt questions and store user inputs
const init = () => {
    return inquirer.prompt(questions)
        .then(readmeData => {
            return readmeData;
        })
}
// Function call to initialize app
init()
    .then(readmeData => {
        console.log(readmeData);
        return createMarkdown(readmeData);
    })
    .then(pageMD => {
        return writeFile(pageMD);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse.message);
    })
    .catch(err => {
        console.log(err);
    })