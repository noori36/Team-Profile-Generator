const createHTML = require('./src/createHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const fs = require('fs'); 
const inquirer = require('inquirer');


const team = []; 

// manager prompts 
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("You need to provide the manager's name:");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the manager's ID.",
            validate: idInput => {
                if  (idInput) {
                    return true;
                } else {
                    console.log ("You need to provide the manager's ID:")
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the manager's email.",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log ('You need to provide an email:')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the manager's office number:",
            validate: numInput => {
                if  (numInput) {
                    return true;
                } else {
                    console.log ('You need to provide an office number:')
                    return false; 
                }
            }
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        team.push(manager); 
        console.log(manager); 
    })
};

const addEmployee = () => {

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "What's employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("You need to provide an employee's name:");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the employee's ID.",
            validate: idInput => {
                if  (idInput) {
                    return true;
                } else {
                    console.log ("You need to provide the employee's ID!")
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the employee's email.",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log ('You need to provide an email:')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: githubInput => {
                if (githubInput ) {
                    return true;
                } else {
                    console.log ("You need to provide the employee's github username:")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!")
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }

        team.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(team); 
        } else {
            return team;
        }
    })

};


// function to create HTML
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profile has been created. check out the index.html")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(team => {
    return createHTML(team);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });