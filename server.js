var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "RemakeMyself2020&",
    database: "EmployeeTrackerDB"
});

connection.connect(function(err) {
    if (err) throw err;
    start();
});

function start() {
    inquirer
    .prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: [
        "Add departments?",
        "Add roles?",
        "Add employees?",
        "View departments?",
        "View roles?",
        "View employees?",
        "Update employee roles?",
        // "Quit?"
    ]
    })
    .then(function(answer) {
    switch (answer.action) {
    case "Add departments?":
        addDepartments();
        break;

    case "Add roles?":
        addRoles();
        break;

    case "Add employees?":
        addEmployees();
        break;

    case "View departments?":
        viewDepartments();
        break;

    case "Update departments?":
        updateDepartments();
        break;

    case "View roles?":
        viewRoles();
        break;

    case "View employees?":
        viewEmployees();
        break;

    case "Update employee roles?":
        updateRoles();
        break;
    // add default/quit here
    }
    });
}

//should run a GET first to display current departments, then allow for add
//add first then GET and display current departments
function addDepartments() {
    // prompt for what department to add
    inquirer
    .prompt([
        {
        name: "addDepartment",
        type: "input",
        message: "What department would you like to add?"
        },
    ])
    .then(function(answer) {
        // when finished prompting, insert a new department
        connection.query(
            "INSERT INTO department SET ?",
            {
                name: answer.addDepartment,
            },
            function(err) {
                if (err) throw err;
                console.log("Your department was added successfully!");
                // go back to start
                start();
            }
        );
    });
}

//add roles
function addRoles() {
    // prompt for what role to add
    inquirer
    .prompt([
        {
        name: "addRole",
        type: "input",
        message: "What role would you like to add?"
        },
        {
        name: "addSalary",
        type: "input",
        message: "What salary would you like this role to have?"
        },
    ])
    .then(function(answer) {
        // when finished prompting, insert a new role
        connection.query(
            "INSERT INTO role SET ?",
            {
                title: answer.addRole,
                salary: answer.addSalary,
            },
            function(err) {
                if (err) throw err;
                console.log("Your role was added successfully!");
                // go back to start
                start();
            }
        );
    });
}

//add employees - remember first and last name
function addEmployees() {
    // prompt for what employee to add
    inquirer
    .prompt([
        {
        name: "firstName",
        type: "input",
        message: "What is the employee's first name?"
        },
        {
        name: "lastName",
        type: "input",
        message: "What is the employee's last name?"
        }
        //add role question for new employee
    ])
    .then(function(answer) {
        // when finished prompting, insert a new employee with first and last name
        connection.query(
            "INSERT INTO employee SET ?",
            {
                first_name: answer.firstName,
                last_name: answer.lastName,
            },
            function(err) {
                if (err) throw err;
                console.log("The employee was added successfully!");
                // go back to start
                start();
            }
        );
    });
}

//view departments
function viewDepartments() {
    // show list of departments: query the database for all items departments
    connection.query("SELECT * FROM department", function(err, results) {
        console.table(results);
        if (err) throw err;

    // once you have the items, prompt the user for which they'd like to bid on
    inquirer
    .prompt({
        name: "startOver",
        type: "rawlist",
        message: "Would you like to start over or update departments?",
        choices: ["start over", "update departments"]
    })
    .then(function(answer) {
        // create update department
        if (answer.startOver === "start over") {
            start();
        }
        else if (answer.startOver === "update departments") {
            updateDepartments();
        } else{
            connection.end();
        }
    });
    });
}

//view roles
function viewRoles() {
    // view roles
    connection.query("SELECT * FROM role", function(err, results) {
        console.table(results);
        if (err) throw err;

    // once you have the items, prompt the user for which they'd like to bid on
    inquirer
    .prompt({
        name: "startOver",
        type: "list",
        message: "Would you like to start over or update departments?",
        choices: ["start over", "update departments"]
    })
    .then(function(answer) {
        // ???
        if (answer.startOver === "start over") {
            start();
        }
        else if (answer.startOver === "update departments") {
            updateDepartments();
        } else{
            connection.end();
        }
    });
    });
}

//view employees
function viewEmployees() {
    // view employees
    connection.query("SELECT * FROM employee", function(err, results) {
        console.table(results);
        if (err) throw err;

    // once you have the items, prompt the user for which they'd like to bid on
    inquirer
    .prompt({
        name: "startOver",
        type: "list",
        message: "Would you like to start over or update departments?",
        choices: ["start over", "update departments"]
    })
    .then(function(answer) {
        // ???
        if (answer.startOver === "start over") {
            start();
        }
        else if (answer.startOver === "update departments") {
            updateDepartments();
        } else{
            connection.end();
        }
    });
    });
}



//update roles
// Function updateRoles() 
//     connection.query("SELECT title FROM role", function(err, results) {
//         console.table(results);
//         if (err) throw err;
//       // once you have the items, prompt the user for which they'd like to bid on
//     inquirer
//     .prompt([
//         {
//         name: "choice",
//         type: "rawlist",
//         choices: function() {
//         var choiceArray = [];
//         for (var i = 0; i < results.length; i++) {
//         choiceArray.push(results[i].item_name);
//         }
//             return choiceArray;
//             },
//             message: "What role would you like to update?"
//         },

//         // ])
//         // .then(function(answer) {
//         // // get the information of the chosen item
//         // var chosenItem;
//         // for (var i = 0; i < results.length; i++) {
//         // if (results[i].item_name === answer.choice) {
//         // chosenItem = results[i];
//         // }
//         // }

//         .then(function (answer) {
//         connection.query("UPDATE role SET role_id = ? WHERE first_name = ?", [response.role_id, response.first_name],
//         function (err, data) {
//         // console.table(data);
//         console.log("Updated!")
//         start();
//         })