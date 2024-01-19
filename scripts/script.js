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
  var Views = []
  for (i in experiences)
  {
    Views.push(
      view.getExpView(experiences[i].title, experiences[i].logo, experiences[i].company, experiences[i].type, 
        experiences[i].from, experiences[i].to, experiences[i].summary)
    )
  }
  $('#experience').html(Views)

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
  </div><hr>`

  return experTag
  }

}
