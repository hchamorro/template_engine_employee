class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.title = "Employeee";
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    console.log(this.email);
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;

// const exampleOne = new Employee("jim", 123, "exapmleOne@email");

// exampleOne.getEmail();
