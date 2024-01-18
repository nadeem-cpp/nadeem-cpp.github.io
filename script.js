document.addEventListener("DOMContentLoaded", function () {
  fetch("./config/config.json")
    .then(response => response.json())
    .then(data => {
      console.log(data.name)
      document.getElementById("name").innerText = data.name
      document.getElementById("jobTitle").innerText = data.jobTitle
      document.getElementById("about").innerText = data.about
      document.querySelector("#calendly a").href = data.calendly
      document.querySelector("#linkedin").href = data.linkedin
      document.querySelector("#github").href = data.github
    })
})

var currentYear = new Date().getFullYear();
$("#year").html(currentYear)