const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");

const engineer = new Engineer("Joe", 1, "joe@gmail.com", "git");

console.log(engineer);

function promptUser() {
    return inquirer.prompt([
        {
            type: "confirm",
            name: "employed",
            message: "Are you an employee?"
        }
    ]).then(function ({ employed }) {
//This if statement isn't reading variable, condition not being met
        if (employed = true) { 
            inquirer.prompt([
                {
                    type: "list",
                    name: "position",
                    message: "What is your position?",
                    choices: [
                        "Engineer",
                        "Intern",
                        "Manager",
                        "Ainslee"
                    ]
                }
            ]);
        }
    });

};

promptUser();
