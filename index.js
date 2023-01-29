const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "root1234",
    database: "tracker",
  },
  console.log(`Connected to the tracker database.`)
);

// Query database
function viewDepartments() {
  db.query("SELECT * FROM department", function (err, results) {
    console.log(results);
    return results;
  });
  console.log("Success");
}

function viewRoles() {
  db.query("SELECT * FROM role", function (err, results) {
    console.log(results);
  });
}

function viewEmployees() {
  db.query("SELECT * FROM employee", function (err, results) {
    console.log(results);
  });
}
function addDepartments() {
  inquirer
    .prompt([
      {
        message: "Enter department name",
        name: "name",
      },
    ])
    .then((response) => {
      db.query("INSERT INTO department SET ?", response.name, function (err, results) {
        console.log("Department added");
      });
    });
}

function addRoles() {
  db.query("SELECT * FROM department", function (err, results) {
    const departments = results.map((department) => ({ name: department.name, value: department.id }));
    console.log(departments);

    inquirer
      .prompt([
        {
          message: "What is the title?",
          name: "title",
        },
        {
          message: "What is the salary?",
          name: "salary",
        },
        {
          message: "What department does this role belong to?",
          name: "department_id",
          choices: departments,
        },
      ])
      .then((response) => {
        db.query("INSERT INTO department SET ?", response, function (err, results) {
          console.log("Role added");
        });
      });
  });
}

inquirer
  .prompt([
    {
      type: "list",
      message: "What would you like to do?",
      name: "choice",
      choices: [
        { name: "View all departments", value: "VIEW DEPARTMENTS" },
        { name: "View all roles", value: "VIEW ROLES" },
        { name: "View all employees", value: "VIEW EMPLOYEES" },
        { name: "Add a department", value: "ADD DEPARTMENT" },
        { name: "Add a role", value: "ADD ROLE" },
        { name: "Exit?", value: "EXIT" },
      ],
    },
  ])
  .then((response) => {
    console.log(response.choice);
    if (response.choice === "VIEW_DEPARTMENTS") {
      viewDepartments();
    }
    if (response.choice === "VIEW_ROLES") {
      viewRoles();
    }
    if (response.choice === "VIEW_EMPLOYEES") {
      viewEmployees();
    }
    if (response.choice === "ADD_DEPARTMENTS") {
      addDepartments();
    }
    if (response.choice === "ADD_ROLE") {
      addRole();
    }
    if (response.choice === "EXIT") {
      Exit();
    } else {
      addAnother();
    }
  });
