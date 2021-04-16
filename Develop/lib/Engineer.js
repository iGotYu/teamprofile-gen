// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, email, id, github){
        this.id = id;
        this.name = name;
        this.email = email;
        this.github = github;
        this.role = 'Engineer';
}

getGithub() {
    return this.github;
}
}

module.exports = Engineer;