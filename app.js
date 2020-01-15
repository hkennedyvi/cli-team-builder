const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const joi = require("@hapi/joi");
const generate = require("./htmlGenerate");
const companyTeam = [];
const mgmtTeam = [];
const engineerTeam = [];
const internTeam = [];


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
        mgmtTeam.push(newManager);
        console.log("Here is your full team:");
        console.log(companyTeam);
        console.log("Here is your management team:");
        console.log(mgmtTeam);

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
                internTeam.push(newIntern);
                console.log("Here is your full team:");
                console.log(companyTeam);
                console.log("Here is your intern team:");
                console.log(internTeam);

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
                engineerTeam.push(newEngineer);
                console.log("Here is your full team:");
                console.log(companyTeam);
                console.log("Here is your engineer team:")
                console.log(engineerTeam);
                
                addTeamMember();
            });
        }
        function constructTeam() {
            
            console.log("Congrats, Team");
            console.log(companyTeam[0] instanceof Manager);
            // console.log(Object.keys(companyTeam[0));
            if (companyTeam[0] instanceof Manager) {
                generate.generateManager(companyTeam[0]);
            } else if (companyTeam[0] instanceof Intern) {
                generate.generateIntern();
            } else if (companyTeam[0] instanceof Engineer) {
                generate.generateEngineer();
            } else throw new Error("Missing team member");
        };


    });
};

startTeam();




// const questions = [
//     {
//         type: "confirm",
//         name: "employed",
//         message: "Are you an employee?"
//     },{
//         type: "list",
//         name: "position",
//         message: "What is your position?",
//         choices: [
//             "Engineer",
//             "Intern",
//             "Manager"
//         ]
//     },{
//         type: "input",
//         name: "school",
//         message: "What school did you attend?",
//         when : function(answers) {
//             if (answers.position === "Intern") {
//                 return questions.school;
//             };
//           }
//     }
// ]

// // const positionQ = [
// //     {
// //         type: "list",
// //         name: "position",
// //         message: "What is your position?",
// //         choices: [
// //             "Engineer",
// //             "Intern",
// //             "Manager"
// //         ],
// //         when : function(answers) {
// //             if (answers.employed == true) {
// //                 return positionQ;
// //             }
// //         }
// //     }
// // ]



// function promptApplicant () {
//     return inquirer.prompt(questions, function(answers) {
//         console.log(answers);
//     });
// };

// promptApplicant();


// // function promptUser() {
// //     return inquirer.prompt([
// //         {
// //             type: "confirm",
// //             name: "employed",
// //             message: "Are you an employee?"
// //         }
// //     ]).then(function (firstAnswer) {
// //         console.log(firstAnswer.employed);
// //         //This if statement isn't reading variable, condition not being met
// //         if (firstAnswer.employed = true) {
// //             return inquirer.prompt([
// //                 {
// //                     type: "list",
// //                     name: "position",
// //                     message: "What is your position?",
// //                     choices: [
// //                         "Engineer",
// //                         "Intern",
// //                         "Manager"
// //                     ]
// //                 }
// //             ]);
// //         }
// //     }).then(function (secondAnswer) {
// //         console.log(secondAnswer.position);
// //         //This if statement isn't reading variable, condition not being met
// //         if (secondAnswer.position = "Intern") {
// //             return inquirer.prompt([
// //                 {
// //                     type: "input",
// //                     name: "school",
// //                     message: "What school did you attend?"
// //                 }
// //             ])
// //         }
// //     });

// // };

// promptUser();



