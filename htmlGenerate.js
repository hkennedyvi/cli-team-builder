const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require("fs");


const managerCard = generateManagerCard = (managerData) => {
    return `<div class="column col-md-3">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${managerData[i].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">getRole : Manager
                <i class="fas fa-coffee"></i>
            </h6>
            <p class="card-text">
                <ul>
                    <li>ID: ${managerData[i].id}</li>
                    <li>EMAIL: ${managerData[i].email}</li>
                    <li>OFFICE: ${managerData[i].officeNumber}</li>
                </ul>
            </p>
        </div>
    </div>
</div>`;
};

const internCard = generateInternCard = (internData) => {
    return `<div class=" column col-md-3">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${internData[0].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">getRole : Intern
                <i class="fas fa-user-graduate"></i>
            </h6>
            <p class="card-text">
                <ul>
                    <li>ID: ${internData[0].id}</li>
                    <li>EMAIL: ${internData[0].email}</li>
                    <li>SCHOOL: ${internData[0].school}</li>
                </ul>
            </p>
        </div>
    </div>
</div>`;
};

const engineerCard = generateEngineerCard = (engineerData) => {
    return `<div class="column col-md-3">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${engineerData[0].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">getRole : Engineer
                <i class="fas fa-cogs"></i>
            </h6>
            <p class="card-text">
                <ul>
                    <li>ID: ${engineerData[0].id}</li>
                    <li>EMAIL: ${engineerData[0].email}</li>
                    <li>GITHUB: ${engineerData[0].github}</li>
                </ul>
            </p>
        </div>
    </div>
</div>`;
};

const generateHTML = (managerCard, engineerCard, internCard) => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
        <title>Team Builder</title>
    </head>
    <style>
        header {
            text-align: center;
            background-color: aquamarine;
            color: white;
            font-weight: 300;
            padding-bottom: 10px;
        }
    
        main {
            background-color: lightsteelblue;
            height: 750px;
        }
    
        .card {
            margin: 25px;
        }
    
        .column {
            margin: 20px;
        }
    </style>
    
    <body>
        <header>
            <h1>YOUR TEAM</h1>
        </header>
        <main>
            <div class="container">
                <div class="row">
                    ${managerCard}
    
                    ${internCard}
    
                    ${engineerCard}
                </div>
            </div>
    
        </main>
    
    </body>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>
    <script src="app.js"></script>
    <script src="htmlGenerate.js"></script>
    
    </html>`
}

html = generateHTML(managerCard, internCard, engineerCard);

fs.writeFile("myTeam.html", html, function(err){
    if (err) {
        return console.log(err);
    }
});



module.exports = {
    generateManagerCard: generateManagerCard,
    generateInternCard: generateInternCard,
    generateEngineerCard: generateEngineerCard,
};

