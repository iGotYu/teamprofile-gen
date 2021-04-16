// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, email, id, officeNumber){
        this.id = id;
        this.name = name;
        this.email = email;
        this.officeNumber = officeNumber;
        this.role = 'Manager';
}

getOfficeNumber() {
    return this.officeNumber;
}
}

module.exports = Manager;