const inquirer = require("inquirer");
const fs = require("fs");

const generateReadme = 
({name, email, location, github, linkedin,
motivation, reason, problemSolving, learn, standOut}) =>

`# README file Generator
This is README file Genertor, which you can easily create your own README file by answing some simple questions.

## 🏆 About the developer

* My name is ${name}.

* My email adress is ${email}.

* I'm from ${location}.

* My GitHub username is ${github}.

* My LinkedIn: ${linkedin}

## 💡 About the README file Generator

* My motivation to create this app is: ${motivation}.

* The reason I create this app is: ${reason}.

* This app could solve the problem: ${problemSolving}.

* What I have learnt from creating this app is: 

${learn}.

* This app is outstanding because: ${standOut}.

`;

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email adress?",
    },
    {
        type: "list",
        name: "location",
        message: "Where are you from?",
        choices:['NSW', 'VIC', 'SA', 'WA'],
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username",
    },
    {
        type: "input",
        name: "linkedin",
        message: "Enter your LinkedIn URL.",
    },
    {
        type: "input",
        name: "motivation",
        message: "What was your motivation?",
    },
    {
        type: "input",
        name: "reason",
        message: "Why did you build this project?",
    },
    {
        type: "input",
        name: "problemSolving",
        message: "What problem does it solve?",
    },
    {
        type: "input",
        name: "learn",
        message: "What did you learn?",
    },
    {
        type: "input",
        name: "standOut",
        message: "What makes your project stand out?",
    },
    
  ])
  .then((answers) => {
    const readmeContent = generateReadme(answers);

    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log("Successfully created README.md!")
    );
  });
