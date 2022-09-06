const Employee = require('./Employee');

// class for the intern that extends the employee class
class Intern extends Employee {
    constructor(name, id, email, school) {

        //call the employee class
        super(name, id, email);
        this.school = school;
    }
    // return school
    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;