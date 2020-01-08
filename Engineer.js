const Employee = require("./Employee")

class Engineer extends Employee {
    constructor (github, role) {
        super("Annie", 1, "annie@gmail.com");
        this.github = github;
        this.role = role;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;