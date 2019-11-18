const employeeType = {
  type: "list",
  name: "employee",
  message: "Select role:",
  choices: ["Manager", "Engineer", "Intern"],
  filter: function(val) {
    return val.toLowerCase();
  }
};

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Full Name: "
  },
  {
    type: "input",
    name: "id",
    message: "ID Number: ",
    validate: function(value) {
      var valid = !isNaN(value);
      return valid || "Please enter a number";
    }
  },
  {
    type: "input",
    name: "email",
    message: "Email Address: "
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Office Number: "
  }
];

module.exports = { employeeType, managerQuestions };
