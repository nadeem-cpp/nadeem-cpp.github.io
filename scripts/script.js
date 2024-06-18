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
  for (i in projects) {
    // title, img, github, summary, from, to, skills
    views.push(
      view.getProject(projects[i].title, projects[i].img, projects[i].github, projects[i].summary,
        projects[i].from, projects[i].to, projects[i].skills)
    )
    if (i != lastIndex) {
      views.push("<hr>")
    }
  }
  $('#project').html(views)
}


function loadData(data, view, id) {
  var certViews = []
  for (i in certificates) {
    certViews.push(
      view.getCertView(certificates[i].title, certificates[i].provider, certificates[i].cred, certificates[i].from,
        certificates[i].to, certificates[i].logo)
    )
  }
  $('#certificates').html(certViews)
}


function loadCert(certificates, view) {
  var certViews = []
  for (i in certificates) {
    certViews.push(
      view.getCertView(certificates[i].title, certificates[i].provider, certificates[i].cred, certificates[i].from,
        certificates[i].to, certificates[i].logo)
    )
  }
  $('#certificates').html(certViews)
}

function loadExper(experiences, view) {
  var views = []
  let lastIndex = experiences.length - 1

  for (i in experiences) {
    views.push(
      view.getExpView(experiences[i].title, experiences[i].logo, experiences[i].company, experiences[i].type,
        experiences[i].from, experiences[i].to, experiences[i].summary)
    )
    if (i != lastIndex) {
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

  getExpView(title, logo, company, type, from, to, summary) {
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

  getProject(title, img, github, summary, from, to, skills) {
    let projectView = `
    <div class="row mt-4">
    <div class=" col-md-6">
      <img  src=${img}
        style="object-fit: fill; width: 100%; height: 100%;"
        alt="project image">
    </div>
    <div class="col-md-6 d-flex flex-column">
      <span class="fw-bold">${title}</span>
      <span class="btn btn-success" style="width: 100px">
        <a href=${github} class="link"> Github </a>
      </span>
      <p>${summary} </p>
      <p>${from} - ${to}</p>
      <p>
        <b>Skills:</b>
        ${skills}
      </p>
      <button class="btn btn-danger">See Details</button>
    </div>
  </div>`

    return projectView
  }

}
