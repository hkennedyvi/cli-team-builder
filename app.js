const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require("fs");
const inquirer = require("inquirer");
const joi = require("@hapi/joi");
const generate = require("./htmlGenerate");
const companyTeam = [];
let managerHTML;
let internHTML;
let engineerHTML;


function startTeam() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your manager's name?",
            validate: function validateName(name) {
                return name !== "";
            }
        }, {
            type: "input",
            name: "id",
            message: "What is their ID?",
        }, {
            type: "input",
            name: "email",
            message: "What is their email?"
        }, {
            type: "input",
            name: "office",
            message: "What is their office number?"
        }
    ]).then(function addManager(managerAns) {
        const newManager = new Manager(managerAns.name, managerAns.id, managerAns.email, managerAns.office);

        companyTeam.push(newManager);

    }).then(function addTeamMember() {
        inquirer.prompt([
            {
                type: "list",
                name: "position",
                message: "What team member position would you like to add?",
                choices: [
                    "Intern",
                    "Engineer",
                    "I don't want to add anymore team members"
                ]
            }
        ]).then(function (answer) {
            switch (answer.position) {
                case "Intern":
                    console.log("YOU ARE AN INTERN");
                    addIntern();// code block
                    break;
                case "Engineer":
                    console.log("YOU ARE AN ENGINEER");
                    addEngineer();// code block
                    break;
                default:
                    console.log("YOUR TEAM IS BUILT");
                    constructTeam();// code block
            }
        })
        function addIntern() {
            console.log("Congrats, Intern");
            inquirer.prompt([
                {
                    type: "input",
                    name: "intern_name",
                    message: "What is this intern's name?"
                }, {
                    type: "input",
                    name: "intern_id",
                    message: "What is their ID?"
                }, {
                    type: "input",
                    name: "intern_email",
                    message: "What is their email?"
                }, {
                    type: "input",
                    name: "intern_school",
                    message: "What school do they attend?"
                },
            ]).then(function (internAns) {
                const newIntern = new Intern(internAns.intern_name, internAns.intern_id, internAns.intern_email, internAns.intern_school);

                companyTeam.push(newIntern);

                addTeamMember();
            });
        };
        function addEngineer() {
            console.log("Congrats, Engineer");
            inquirer.prompt([
                {
                    type: "input",
                    name: "engineer_name",
                    message: "What is this engieneer's name?"
                }, {
                    type: "input",
                    name: "engineer_id",
                    message: "What is their ID?"
                }, {
                    type: "input",
                    name: "engineer_email",
                    message: "What is their email?"
                }, {
                    type: "input",
                    name: "engineer_github",
                    message: "What is their github username?"
                },
            ]).then(function (engineerAns) {
                const newEngineer = new Engineer(engineerAns.engineer_name, engineerAns.engineer_id, engineerAns.engineer_email, engineerAns.engineer_github);

                companyTeam.push(newEngineer);

                addTeamMember();
            });
        }
        function constructTeam() {

            console.log("Congrats, Team");
            // console.log(Object.keys(companyTeam[0));
            for (i = 0; i < companyTeam.length; i++) {
                if (companyTeam[i] instanceof Manager) {

                    mgmtTeam = [];
                    mgmtTeam.push(companyTeam[i]);
                    managerHTML = generate.generateManagerCard(mgmtTeam);

                } else if (companyTeam[i] instanceof Intern) {

                    internTeam = [];
                    internTeam.push(companyTeam[i]);
                    internHTML = generate.generateInternCard(internTeam);

                } else if (companyTeam[i] instanceof Engineer) {

                    engineerTeam = [];
                    engineerTeam.push(companyTeam[i]);
                    engineerHTML = generate.generateEngineerCard(engineerTeam);

                } else throw new Error("Missing team member");
            }
            html = generate.generateHTML(managerHTML, internHTML, engineerHTML);

            fs.writeFile("myTeam.html", html, function(err){
                if (err) {
                    return console.log(err);
                }
            });
        };

    });

};

startTeam();