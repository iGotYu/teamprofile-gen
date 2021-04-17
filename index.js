const { prompt } = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./lib/htmlRender");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const team = [];

const questionsForManager = [
  {
    type: "input",
    name: "name",
    message: "What is Manager name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is Manager id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is Manager email?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is Manager officeNumber?",
  },
];

const questionsForIntern = [
  {
    type: "input",
    name: "name",
    message: "What is Intern name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is Intern id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is Intern email?",
  },
  {
    type: "input",
    name: "school",
    message: "What is Intern school?",
  },
];

const questionsForEngineer = [
  {
    type: "input",
    name: "name",
    message: "What is Engineer name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is Engineer id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is Engineer email?",
  },
  {
    type: "input",
    name: "github",
    message: "What is Engineer github?",
  },
];

const addEmployee = () => {
  prompt([
    {
      type: "list",
      name: "myChoice",
      message: "Do you want more employees?",
      choices: ["Manager", "Intern", "Engineer", "Nah!"],
    },
  ]).then(({ myChoice }) => {
    switch (myChoice) {
      case "Manager":
        generateManagerObj();
        break;
      case "Intern":
        generateInternObj();
        break;
      case "Engineer":
        generateEngineerObj();
        break;
      default:
        writeHTMl();
        break;
    }
  });
};

const generateManagerObj = () => {
  //ask questions
  prompt(questionsForManager).then((answers) => {
    //use answers to create manager object using the constructor
    const newManagerObj = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    //push new Manager OBJ into team
    team.push(newManagerObj);
    //check to see if user wants to add more teammates
    addEmployee();
  });
};

const generateInternObj = () => {
  //ask questions
  prompt(questionsForIntern).then((answers) => {
    //use answers to create Intern object using the constructor
    const newInternObj = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    //push new Intern OBJ into team
    team.push(newInternObj);
    //check to see if user wants to add more teammates
    addEmployee();
  });
};

const generateEngineerObj = () => {
  //ask questions
  prompt(questionsForEngineer).then((answers) => {
    //use answers to create Engineer object using the constructor
    const newEngineerObj = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );
    //push new Engineer OBJ into team
    team.push(newEngineerObj);
    //check to see if user wants to add more teammates
    addEmployee();
  });
};

addEmployee();

const writeHTMl = () => {
    fs.writeFileSync(path.join(__dirname,"output/teamInfo.html"),render(team),"utf-8");
}