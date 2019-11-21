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

const htmlFooter = `
</div>
</body>
</html>`;

let htmlHeader = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      href="https://fonts.googleapis.com/css?family=Quicksand&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./style.css" />
    <title>Employee Roster</title>
  </head>
  <body class="ff-quicksand">
    <header class="d-f jc-c">
      <h1>Employee Roster</h1>
    </header>
    <div class="d-f jc-c flw-w m-a maw-80">`;

//make team members array of objects
const prompt = inquirer.createPromptModule();
const teamMembers = [];

const sara = new Manager("Sara", 1, "sara@email.com", "6-218");
const beth = new Engineer("Beth", 2, "beth@email.com", "bhub");
const tim = new Intern("Timmy", 3, "timothy@email.com", "UIC");

teamMembers.push(sara, beth, tim);

//make a function to create team "team member type question inquq" then run set of questions assoctiated with the info needed for each class
const init = () => {
  prompt(employeeType).then(({ employee }) => {
    if (employee === "manager") {
      managerQuestionnaire();
    }
    if (employee === "engineer") {
      engineerQuestionnaire();
    }
    if (employee === "intern") {
      internQuestionnaire();
    }
  });
};

const managerQuestionnaire = () =>
  prompt(managerQuestions).then(ans => {
    teamMembers.push(
      new Manager(ans.name, ans.id, ans.email, ans.officeNumber)
    );
    console.log("User Sucessfully Added");
    addNewEmpoyeeOrCreateSection(ans);
  });

const engineerQuestionnaire = () =>
  prompt(engineerQuestions).then(ans => {
    teamMembers.push(new Engineer(ans.name, ans.id, ans.email, ans.github));
    console.log("User Sucessfully Added");
    addNewEmpoyeeOrCreateSection(ans);
  });

const internQuestionnaire = () =>
  prompt(internQuestions).then(ans => {
    teamMembers.push(new Intern(ans.name, ans.id, ans.email, ans.school));
    console.log("User Sucessfully Added");
    addNewEmpoyeeOrCreateSection(ans);
  });

addNewEmpoyeeOrCreateSection = data => {
  if (data.addEmployee === true) {
    init();
  } else {
    createSection();
  }
};

createSection = () => {
  teamMembers.forEach(teamMem => {
    //console.log(teamMem);
    let uniqueId = `Office Number: ${teamMem.officeNumber}`;
    if (teamMem.officeNumber === undefined && teamMem.school === undefined) {
      uniqueId = `GitHub:  <div class="fw-n">  ${teamMem.github}</div> `;
    } else if (
      teamMem.officeNumber === undefined &&
      teamMem.github === undefined
    ) {
      uniqueId = `School: <div class="fw-n"> ${teamMem.school}</div>`;
    } else if (teamMem.school === undefined) {
      uniqueId = `Office Number:  <div class="fw-n"> ${teamMem.officeNumber} </div> `;
    }

    const section = `<section class="bxsh-0-5-15-0 m-1  w-20">
        <div class=" bgc-var-main p-.5">
          <h3 class="p-.5">
            ${teamMem.name} <br />
            ${teamMem.title}
          </h3>
        </div>
        <div class="m-1 p-.5">
          <div class="d-f fw-b p-.5">
            <div>
              ID:&nbsp;  
            </div >  
            <div class="fw-n">
            ${teamMem.id}
            </div>
          </div>
          <div class="fw-b p-.5">
            <div>
              Email: 
            </div>  
            <div class="fw-n">
            ${teamMem.email}
            </div>
          </div>
          <div class="fw-b p-.5">
            <div>
              ${uniqueId}
            </div>
              
          </div>
        </div>
      </section>`;

    htmlHeader = htmlHeader + section;
  });
  createHtml();
};

createHtml = () => {
  finalHtml = htmlHeader + htmlFooter;

  fs.writeFile("index.html", finalHtml, function(err) {
    if (err) {
      return console.log(err);
    }
  });
};

init();

//if user chose engineer call engineer inq and engineer func to be built

// then ({info}) to pplot new Engineer and make html

//create inter()

//createManager(

//push engineer to team memebers oblect
