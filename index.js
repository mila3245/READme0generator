const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const writeToFile = require("./utils/writeToFile.js");
//licenses
const GPLv3 = "GNU General Public License, version 3 (GPLv3)";
const apache2 = "Apache License 2.0";
const bsd3 = "BSD 3-Clause License";
const mit = "MIT License";

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
    {
    type: 'input',
    name: 'description',
    message: 'Describe your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How to install your app/project?',
      },
    {
    type: 'input',
    name: 'usage',
    message: 'How to use it?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Your email: ',
      },
    {
    type: 'input',
    name: 'tests',
    message: 'How to run the test?',
    },
    {
        type: 'input',
        name: 'github_URL',
        message: 'Your GitHub url:',
      },
    {
    type: 'checkbox',
    name: 'license',
    message: 'License:',
    choices: [GPLv3, apache2, bsd3, mit ]
    }

];

const badges = {
GPLv3_B: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,

apache2_B: `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,

bsd3_B: `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`,

mit_B: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

}

const {GPLv3_B, apache2_B, bsd3_B, mit_B } = badges;

// function to initialize program

// function call to initialize program
init();
