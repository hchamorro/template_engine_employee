const fs = require("fs");
const inquirer = require("inquirer");
const Intern = require("./Intern");
const Engineer = require("./Enigneer");
const Manager = require("./Manager");
const questions = require("./questions");

const employeeType = questions.employeeType;
const managerQuestions = questions.managerQuestions;
const engineerQuestions = questions.engineerQuestions;
const internQuestions = questions.internQuestions;

//make team members array of objects
const prompt = inquirer.createPromptModule();
const teamMembers = [];

let sam = new Manager("Sam", 1, "sam@email.com", 1);
teamMembers.push(sam);

//make a function to create team "team member type question inquq" then run set of questions assoctiated with the info needed for each class
const init = () => {
  prompt(employeeType).then(({ employee }) => {
    if (employee === "manager") {
      managerQuestionaire();
    }
    if (employee === "engineer") {
      engineerQuestionaire();
    }
    if (employee === "intern") {
      internQuestionaire();
    }
  });
};

const managerQuestionaire = () =>
  prompt(managerQuestions).then(ans => {
    if (ans.addEmployee === true) {
      init();
    } else {
      teamMembers.push(
        new Manager(ans.name, ans.id, ans.email, ans.officeNumber)
      );
      createSection();
    }
  });

const engineerQuestionaire = () =>
  prompt(engineerQuestions).then(ans => {
    if (ans.addEmployee === true) {
      init();
    } else {
      teamMembers.push(new Engineer(ans.name, ans.id, ans.email, ans.github));
      createSection();
    }
  });

const internQuestionaire = () =>
  prompt(internQuestions).then(ans => {
    if (ans.addEmployee === true) {
      init();
    } else {
      teamMembers.push(new Intern(ans.name, ans.id, ans.email, ans.school));
      createSection();
    }
  });

createSection = () => {
  teamMembers.forEach(teamMem => {
    console.log(teamMem);
    let uniqueId = `Office Number: ${teamMem.officeNumber}`;
    if (teamMem.officeNumber === undefined) {
      uniqueId = `GitHub: ${teamMem.github}`;
    }
    if (teamMem.github === undefined) {
      uniqueId = `School: ${teamMem.school}`;
    }

    const section = `<section class="bxsh-0-5-15-0 m-1  w-20">
        <div class=" bgc-var-main p-.5">
          <h3 class="p-.5">
            ${teamMem.name} <br />
            ${teamMem.title}
          </h3>
        </div>
        <div class="m-1 p-.5">
          <div class="p-.5">
            ID: ${teamMem.id}
          </div>
          <div class="p-.5">
            Email: ${teamMem.id}
          </div>
          <div class="p-.5">
            ${uniqueId}
          </div>
        </div>
      </section>`;
    console.log(section);
  });
};

init();

//if user chose engineer call engineer inq and engineer func to be built

// then ({info}) to pplot new Engineer and make html

//create inter()

//createManager(

//push engineer to team memebers oblect
