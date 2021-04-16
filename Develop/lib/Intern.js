// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(name, email, id, school){
        this.id = id;
        this.name = name;
        this.email = email;
        this.school = school;
        this.role = 'Intern';
}

getSchool() {
    return this.school;
}
}

module.exports = Intern;