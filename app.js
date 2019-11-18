const fs = require("fs");
const inquirer = require("inquirer");
const Intern = require("./Intern");
const Engineer = require("./Enigneer");
const Manager = require("./Manager");

//make team members array of objects

const teamMembers = [];

let sam = new Manager("Sam", 1, "sam@email.com", 1);
teamMembers.push(sam);

//make a function to create team "team member type question inquq" then run set of questions assoctiated with the info needed for each class
inquirer
  .prompt([
    {
      type: "list",
      name: "employee",
      message: "Select role:",
      choices: ["Manager", "Engineer", "Intern"]
    }
  ])
  .then(reply => {
    console.log(reply);
  });

//if user chose engineer call engineer inq and engineer func to be built

// then ({info}) to pplot new Engineer and make html

//create inter()

//createManager(

//push engineer to team memebers oblect
