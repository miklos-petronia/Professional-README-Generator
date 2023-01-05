// Collection needed for this APP
const inquirer = require('inquirer');
const fs = require('fs');
const createMarkdown = require('./utils/generateMarkdown.js');

// Question for user suggestions; Array
const questions = [
{
    type:'input',
    name: 'title',
    messege: 'What is your project title'?
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
    messege:'Please provide your Github username',
    validate: inputGithub => {
        if (inputGithub) {
            return true;
        } else {
            console.log('Enter Github username');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    messege: 'Please enter your email adress',
    validate: (inputGithub) => {
        if (inputGithub) {
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
    validate: inputWhat => {
        if (inputWhat) {
            return true;
        } else {
            console.log(' Please enter the details of your project');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'why',
    message: 'Why have you developed this project ?',
    validate: inputWhy => {
        if (inputWhy) {
            return true;
        } else {
            console.log('Please enter why you have developed this project');
            return false;
        }

    }

},
{
    type: 'input',
    name: 'installation',
    message: 'Please inlist the installations details for your project.',
    validate: inputInstall => {
        if (inputInstall) {
        return true; 
    } else {
        console.log('Please provide your installation requirements');
        return false;
        }
    }
},
{
    type: 'list',
    name: 'license',
    message: 'What type of licence will you be using for your project?',
    choice: ['mit', 'agpl', 'gpl', 'no license']
},
{
    type: 'input',
    name: 'contribute',
    message: 'Please provide information guidelines for contribution',
    when: ({confirmContribution}) => {
        if (confirmContribution) {
            return true;
        } else { 
            return false;
        }
    }
},
{
validate: contributerInput => {
    if (contributerInput) {
        return true;
    } else {
        console.log('Enter contributers processes');
        return false;
        }
    }
},
{
    type: 'input',
    name: 'test',
    message: 'please provide the detail processes on how to test the application',
    validate: inputTest => {
        if (inputTest) {
            return true;
        } else {
            console.log('Enter your test application processes');
            return false;
        }
    }
}

];

// application to write the README file
const writteFile = fileContent => {
    return new Promises((resolve, reject) => {
        fs.writtenFile('./dist/generated-README.md', fileContent, err => {
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

//Promt Questions & store users inputs
const init = () => {
    return inquirer.prompt(questions)
    .then(readmeInfo => {
        return readmeInfo;
    })
}

//Application to initialization
init()
.then(readmeInfo => {
    console.log(readmeInfo);
    return createMarkdown(readmeInfo);
})
.then(pageMD => {
    return writteFile(pageMD);
})
.then(pageMD => {
    return writteFile(pageMD);
})
.then(writeFileFeedback => {
    console.log(writeFileFeedback.message);    
})
.catch(err => {
    console.log(err);
})