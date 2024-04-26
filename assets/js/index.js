// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { type } = require('os');
// const { type } = require('os');

const generateReadme = ({ title, description, installation, credits, license, usage, github, email, contents, questions }) =>
    ` 
    # ${title}

    ## Description
    ${description}
    
    
    ## Table of Contents
    ${contents}
    
    
    ## Installation
    ${installation}
    
    
    
    ## Usage
    ${usage}
    
   
    
    ## Credits
    ${credits}
    
    List your collaborators, if any, with links to their GitHub profiles.
    
    If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    
    If you followed tutorials, include links to those here as well.
    
    ## License
    ${license}
    
    
    ## Questions
    ${questions}
    
    Here's a link to my github profile [Github profile](https://github.com/${github}), if you have any questions. 
    You can also email me at ${email}, for whatever assistance you may need.
    
    
    ## Tests
    
    Go the extra mile and write tests for your application. Then provide examples on how to run them here.
    A GitHub profile with consistently high-quality README files is sure to help you stand out among the crowd of developers putting their work on GitHub, so make sure you give these important files the time and attention they deserve.
    
    This page was updated 4 months ago
    © 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
    
    Category: github
    
    Tagged under: github, guide,
    
   
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
        message: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
        - What was your motivation?
        - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
        - What problem does it solve?
        - What did you learn?`
    },
    {
        type: 'input',
        name: 'contents',
        message: `If your README is long, add a table of contents to make it easy for users to find what they need.
    
        - [Installation](#installation)
        - [Usage](#usage)
        - [Credits](#credits)
        - [License](#license)'`
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
    },
    {
        type: 'input',
        name: 'usage',
        message: `Provide instructions and examples for use. Include screenshots as needed.
    
        To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
        
            \`\`\`md
            ![alt text](assets/images/screenshot.png)
            \`\`\`
            `
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Add any collaborators, if any, with links to their Github profiles.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license',
        choices: [
            `MIT License

            Copyright (c) [year] [fullname]
            
            Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the "Software"), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:
            
            The above copyright notice and this permission notice shall be included in all
            copies or substantial portions of the Software.
            
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.`,
            `This is free and unencumbered software released into the public domain.

            Anyone is free to copy, modify, publish, use, compile, sell, or
            distribute this software, either in source code form or as a compiled
            binary, for any purpose, commercial or non-commercial, and by any
            means.
            
            In jurisdictions that recognize copyright laws, the author or authors
            of this software dedicate any and all copyright interest in the
            software to the public domain. We make this dedication for the benefit
            of the public at large and to the detriment of our heirs and
            successors. We intend this dedication to be an overt act of
            relinquishment in perpetuity of all present and future rights to this
            software under copyright law.
            
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
            IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
            OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
            ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
            OTHER DEALINGS IN THE SOFTWARE.
            
            For more information, please refer to <https://unlicense.org>`
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
    }

];

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
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateReadme(answers);
        writeToFile('README.md', readmeContent)
    })
}

// Function call to initialize app
init();


// get answers and send them to the template function
// makeTemplate(answwers) = {}
// make one big template literal that has the answer variables in ${answer.name} -- format -- \n (new line) 