// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// const { type } = require('os');

const generateReadme = ({title, description, installation, credits, license, usage }) =>
`
# ${title}

## ${description}

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## ${installation}

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## ${usage}

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    md
    ![alt text](assets/images/screenshot.png)
    

## ${credits}

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## ${license}

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).`;

writeToFile(fileName, answers)


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
        message: 'Add a detailed description for your README.'
    }, 
    {
        type: 'input',
        name: 'installation',
        message: 'Add installation instructions for your README.'
    }, 
    {
        type: 'input',
        name: 'usage',
        message: 'Explain how your website is meant to be used.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Add any collaborators, if any, with links to their Github profiles.'
    },
    {
        type: 'input',
        name: 'license',
        message: 'The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).'
    }
   
    ];

inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateReadme(answers);
    console.log(JSON.stringify(answers, null, '  '));
});


// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        } else {
            console.log(`File ${fileName} has been saved.`);
        }
    });
}

const fileName = 'README.md';
const data = `# Professional README Template\n 
## Description`;

writeToFile(fileName, data)


// TODO: Create a function to initialize app
function init() { }







// Function call to initialize app
init();





// get answers and send them to the template function
// makeTemplate(answwers) = {}
// make one big template literal that has the answer variables in ${answer.name} -- format -- \n (new line) 