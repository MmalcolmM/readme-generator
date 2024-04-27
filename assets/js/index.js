// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { type } = require('os');
// const { type } = require('os');
const renderLicenseBadge = require('./generateMarkdown');


const generateReadme = ({ title, description, installation, credits, license, usage, github, email, tests }) =>
    `
# ${title}

## Table of Contents
- [Installation](#installation)
- [Description](#description)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)
- [Tests](#tests)

## Installation
${installation}

## Description
${description} 

## Usage
${usage}
 
## Credits
${credits}
  
## License
${renderLicenseBadge(license)}
  
## Questions

Here's a link to my github profile [Github profile](https://github.com/${github}), if you have any questions. 
You can also reach me by [email](mailto:${email}), for whatever assistance you may need.
   
## Tests
${tests}
    `;


// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What\'s the title of your README file?',
    },
    {
        type: 'input',
        name: 'description',
        message: `Provide a short description explaining the what, why, and how of your project.`
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
    },
    {
        type: 'input',
        name: 'usage',
        message: `Provide instructions and examples for use. Include screenshots as needed.`
    },
    {
        type: 'input',
        name: 'credits',
        message: ' List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use?',
        choices: [
            "MIT",
            "BSD",
            "Apache"
        ]
    },
    {
        type: 'input',
        name: 'github',
        message: 'Whats your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Whats your email address'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Add tests to your README'
    }

];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // console.log(readmeContent);
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        } else {
            console.log(`File ${fileName} has been saved.`);
        }
    });
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateReadme(answers);
        console.log(readmeContent);

        writeToFile('README.md', readmeContent)
    })
}

// Function call to initialize app
init();


// get answers and send them to the template function
// makeTemplate(answwers) = {}
// make one big template literal that has the answer variables in ${answer.name} -- format -- \n (new line) 