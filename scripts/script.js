// import { Views } from "./views";

document.addEventListener("DOMContentLoaded", function () {
  fetch("./config/config.json")
    .then(response => response.json())
    .then(data => {
      var currentYear = new Date().getFullYear();
      var view = new Views()
      $("#year").html(currentYear);
      loadAbout(data.intro);
      loadCert(data.certificates, view)
      loadExper(data.experiences, view)
      loadProjects(data.projects, view)
    })
    .catch(error => console.error("Error fetching config:", error));
});

function loadAbout(intro) {
  document.getElementById("name").innerText = intro.name;
  document.getElementById("jobTitle").innerText = intro.jobTitle;
  document.getElementById("about").innerText = intro.about;
  document.querySelector("#calendly a").href = intro.calendly;
  document.querySelector("#linkedin").href = intro.linkedin;
  document.querySelector("#github").href = intro.github;
}

function loadProjects(projects, view) {
  var views = []
  let lastIndex = projects.length - 1
  for (i in projects)
  {
    // title, img, github, summary, from, to, skills
    views.push(
      view.getProject(projects[i].title, projects[i].img, projects[i].github, projects[i].summary, 
        projects[i].from, projects[i].to, projects[i].skills)
    )
    if (i != lastIndex)
    {
      views.push("<hr>")
    }
  }
  $('#project').html(views)
}


function loadData(data, view, id) {
  var certViews = []
  for (i in certificates)
  {
    certViews.push(
      view.getCertView(certificates[i].title, certificates[i].provider, certificates[i].cred, certificates[i].from, 
        certificates[i].to, certificates[i].logo)
    )
  }
  $('#certificates').html(certViews)
}


function loadCert(certificates, view) {
  var certViews = []
  for (i in certificates)
  {
    certViews.push(
      view.getCertView(certificates[i].title, certificates[i].provider, certificates[i].cred, certificates[i].from, 
        certificates[i].to, certificates[i].logo)
    )
  }
  $('#certificates').html(certViews)
}

function loadExper(experiences, view)
{
  var views = []
  let lastIndex = experiences.length - 1

  for (i in experiences)
  {
    views.push(
      view.getExpView(experiences[i].title, experiences[i].logo, experiences[i].company, experiences[i].type, 
        experiences[i].from, experiences[i].to, experiences[i].summary)
    )
    if (i != lastIndex)
    {
      views.push("<hr>")
    }
    
  }
  $('#experience').html(views)
}

class Views {
  getCertView(title, provider, link, from, to, imgSrc) {
    var certTag = `<div class="d-flex flex-row mb-3">
    <div class="me-3">
      <img
        src=${imgSrc} style="height: 100px; width: 100px;" alt="...">
    </div>
    <div>
      <span class="fw-bold">${title}</span>
      <p>${provider}</p>
      <p>issued ${from}, Expires ${to}</p>
      <a href=${link}>
        Show Credentials
      </a>
    </div>
  </div>`
    return certTag
  }

  getExpView(title, logo, company, type, from, to, summary)
  {
    var experTag = `<div class="d-flex flex-row">
    <div class="me-3">
      <img
        src=${logo}
        style="height: 100px; width: 100px;" alt="company logo/tradmark">
    </div>
    <div>
      <span class="fw-bold">${title}</span>
      <p>${company}, ${type}</p>
      <p>${from} - ${to}</p>
      <p>${summary}</p>
    </div>
  </div>`
  return experTag
  }

  getProject(title, img, github, summary, from, to, skills)
  {
    let projectView = `<div class="d-flex flex-row">
    <div class="me-3">
      <img
        src=${img}
        style="height: 100px; width: 100px;" alt="project image">
    </div>
    <div>
      <span class="fw-bold">${title}</span>
      <span class="text-center ms-2">
        <a href=${github} class="link">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" class="bi bi-github"
            viewBox="0 0 16 16">
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
      </span>
      <p>${summary} </p>
      <p>${from} - ${to}</p>
      <p>
        <b>Skills:</b>
        ${skills}
      </p>
    </div>
  </div>`

  return projectView
  }

}
