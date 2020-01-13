const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");

function startTeam() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your manager's name?"
        }, {
            type: "input",
            name: "id",
            message: "What is their ID?"
        }, {
            type: "input",
            name: "email",
            message: "What is their email?"
        }, {
            type: "input",
            name: "office",
            message: "What is their office number?"
        }
    ]).then(function (managerAns) {
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
             switch(answer.position) {
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
        }
        function addEngineer() {
            console.log("Congrats, Engineer");
        }
        function constructTeam() {
            console.log("Congrats, Team");
        }

       
    })
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



