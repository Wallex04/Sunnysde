const navIcon = document.querySelector(".header--navIcon");
const nav = document.querySelector(".header--nav");
navIcon.onclick = () => {
  console.log("i was clicked");
  nav.classList.toggle("show--nav");
};
