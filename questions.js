const employeeType = {
  type: "list",
  name: "employee",
  message: "Select role:",
  choices: ["Manager", "Engineer", "Intern"],
  filter: function(val) {
    return val.toLowerCase();
  }
};

module.exports = { employeeType };
