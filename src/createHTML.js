// create Manager display
const createManager = (manager) => {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <i class="fas fa-mug-hot"></i>
                <div class="text">
                    <h4>Manager</h4>
                </div>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

// create Engineer display
const createEngineer = (engineer) => {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <i class="fa-solid fa-glasses"></i>
                <div class="text">
                    <h4>Engineer</h4>
                </div>
                
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}

// create Intern display
const createIntern = (intern) => {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <i class="fas fa-user-graduate"></i>
                <div class="text">
                    <h4>Intern</h4>
                </div>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
    
</div>
<span class="material-symbols-outlined">
school
</span>
    `
};

// push array 
createHTML = (data) => {

    displayArr = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();


        if (role === 'Manager') {
            const manager = createManager(employee);

            displayArr.push(manager);
        }

        if (role === 'Engineer') {
            const engineer = createEngineer(employee);

            displayArr.push(engineer);
        }
 
        if (role === 'Intern') {
            const intern = createIntern(employee);

            displayArr.push(intern);
        }

    }

    const employeeDisplays = displayArr.join('')

    const createTeam = createTeamPage(employeeDisplays);
    return createTeam;

}

// generate html page 
const createTeamPage = (employeeDisplays) => {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Team Profile Generator</title>

      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">My Team</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Displays-->
                  ${employeeDisplays}
              </div>
          </div>
      </main>
      
  </body>
  </html>
`;
}

// export to index
module.exports = createHTML;