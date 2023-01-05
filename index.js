// Collection needed for this APP
const inquirer = require('inquirer');
const fs = require('fs');
const {message} = require('statuses');

//Inquirer to create questions
inquirer.prompt (
    [
        {
        Type: 'input',
        message: 'What is your project title?',
        name: 'title',
        validate: (value)=>{ if (value){return true} else {return'I need a value to continue'}},
        },
        {
            Type: 'input',
            message: 'Please provide your Github username',
            name: 'github user name',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },

        },

        {
            Type: 'input',
            message: 'Please enter your email adress',
            name: 'email',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },

        },
        {
            Type: 'input',
            message: 'Please provide the details of your project and what kind of problem will it solve',
            name: 'what',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },

        },
        {
            Type: 'input',
            message: 'Why have you developed this project ?',
            name: 'why',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },

        },
        {
            Type: 'input',
            message: 'Please inlist the installations details for your project.',
            name: 'installation',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },

        },
        {
            type: 'list',
            name: 'license',
            message: 'What type of licence will you be using for your project?',
            choice: ['mit', 'agpl', 'gpl', 'no license'],
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
        },
        {
            type: 'list',
            name: 'contribute',
            message: 'Please provide information guidelines for contribution',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
        },
        {
            type: 'input',
            name: 'test',
            message: 'please provide the detail processes on how to test the application',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
        }

    ]
    
).then({
    title, 
    installation,
    instruction,
    credit,
    license,
    git,
    email,
    contribution,
    usage, 
})={
    //template to be used
    const template =`# ${title}
    *[Installation](#installation)
    *[Usage](#usage)
    *[Contribution](#contribution)
    *[License](#licence)
    #Instalation
    ${installation} 
    ##Usage
    ${usage}
    ##Contribution
    ${contribution}
    ### instructions
    ${instructions}
    ## Credits
    ${credits}
    ##License
    ${license}

    #Contact
    *GitHub :${Git}
    *Linkdin :${Linkdin}
    *E-mail :${email}`,

//Function to create readme using fs
createNewFile(title,template);
},

//develop create new file function
function createNewFile(fileName,data){
    //fs
    fs.writeFile(`${fileName.toLowerCase().split('').join('')}.nd`,data,(err)=>{
        if(err){
            console.log(err)
        }
        console.log('Your README had been generated');
})
}