
function login() {
  const password = document.getElementById("password").value;
  if (password === "eren123") {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("main-container").style.display = "flex";
  } else {
    alert("Yanlış şifre!");
  }
}
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "none" ? "block" : "none";
}
function showSection(sectionId) {
  const sections = document.getElementsByClassName("section");
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }
  document.getElementById(sectionId).style.display = "block";
}
