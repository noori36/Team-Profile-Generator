const Employee = require('./Employee');

// class for the manager that extends the employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }
    // Overridden to return 'Manager'
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;