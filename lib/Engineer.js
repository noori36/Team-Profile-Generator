const Employee = require('./Employee');

// class for the engineer that extends the employee class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    // Overridden to return 'Engineer'
    getRole() {
        return "Engineer";
    }



}

module.exports = Engineer;