setTimeout(setHeader, 1500);
setTimeout(setTitle, 3000);
setTimeout(setProjectsHeader, 4000);
setTimeout(setProjects, 4500);
setTimeout(setAboutMeHeader, 5500);
setTimeout(setAboutMe, 6000);

function setHeader() {
  document.getElementById("header").style.opacity = 1;
}

function setTitle() {
  document.getElementById("transition").style.opacity = 1;
}

function setProjectsHeader() {
  document.getElementById("projects-header").style.opacity = 1;
}

function setProjects() {
  document.getElementById("projects").style.opacity = 1;
}

function setAboutMeHeader() {
  document.getElementById("about-me-header").style.opacity = 1;
}

function setAboutMe() {
  document.getElementById("about-me").style.opacity = 1;
}
