const render = (team) => {
  const arrayTeamHTML = team.map((employee) => {
    switch (employee.role) {
      case "Manager":
        return `
                <div class="card employee-card shadow">
                    <div class="card-header bg-primary text-white">
                    <h3 class="card-title">${employee.getName()}</h3>
                    <h4 class="card-title">
                        <i class="fas fa-chess-king"></i> ${employee.role}
                    </h4>
                    </div>
                    <div class="card-body bg-light">
                    <ul class="list-group" >
                        <li class="list-group-item">ID: ${employee.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                        <li class="list-group-item">Office Number: ${employee.getOfficeNumber()}</li>
                    </ul>
                    </div>
                </div>
                `;
      case "Engineer":
        return `
                    <div class="card employee-card shadow">
                    <div class="card-header bg-primary text-white">
                    <h3 class="card-title">${employee.getName()}</h3>
                    <h4 class="card-title">
                        <i class="fas fa-chess-rook"></i> ${employee.role}
                    </h4>
                    </div>
                    <div class="card-body bg-light">
                    <ul class="list-group" >
                        <li class="list-group-item">ID: ${employee.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${employee.getGithub()}/" target = "_blank">${employee.getGithub()}</a></li>
                    </ul>
                    </div>
                </div>
                `;
      case "Intern":
        return `
                    <div class="card employee-card shadow">
                    <div class="card-header bg-primary text-white">
                    <h3 class="card-title">${employee.getName()}</h3>
                    <h4 class="card-title">
                        <i class="fas fa-chess-pawn"></i> ${employee.role}
                    </h4>
                    </div>
                    <div class="card-body bg-light">
                    <ul class="list-group" >
                        <li class="list-group-item">ID: ${employee.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                        <li class="list-group-item">School: ${employee.getSchool()}</li>
                    </ul>
                    </div>
                </div>
                `;
      default:
        break;
    }
  });

  const finalHTML = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
          crossorigin="anonymous"
        />
        
        <link rel="stylesheet" href="style.css"/>
    
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    
        <title>My Team</title>
      </head>
      <body>
      <div class="jumbotron bg-dark text-white">
        <div class="container">
          <h3 class="display-4">My Team</h3>
        </div>
      </div>
    
        <main>
          <div class="container">
            <div class="row">
              <div class="team-members col-12 d-flex justify-content-center">
                ${arrayTeamHTML.join("")}
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
    `;
  return finalHTML;
};

module.exports = render;
