const generateManager = (data) => {
console.log(data.name);
};

const generateIntern = (data) => {
    return console.log("Hey Intern");
};

const generateEngineer = (data) => {
    return console.log("Hey Engineer");
};

module.exports = {
     generateManager : generateManager,
     generateIntern : generateIntern,
     generateEngineer : generateEngineer
};

