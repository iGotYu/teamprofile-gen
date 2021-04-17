// TODO: Write code to define and export the Employee class
// The first class is an Employee parent class with the following properties and methods:

// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole()—returns 'Employee'

class Employee{
    constructor(name, id, email){
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = "Employee";
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return this.role;
    }
}

module.exports = Employee;