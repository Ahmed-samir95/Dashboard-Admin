//  get nav elements
let navSvg = document.querySelector(".prs-icon")
let navSvgSec = document.querySelector(".prs-icon-2")
let proileImg = document.querySelector(".prs-img")
let notifications = document.querySelector(".dropdown-menu")
let msgdropdown = document.querySelectorAll("ul")[1]
let profileDropdown = document.querySelectorAll("ul")[2]

console.log(profileDropdown);

navSvg.onclick = show
function show() {
  notifications.classList.toggle("show")
  msgdropdown.classList.remove("show")
  profileDropdown.classList.remove("show")

}
navSvgSec.onclick = msgdropdownMenu
function msgdropdownMenu() {
  msgdropdown.classList.toggle("show")
  notifications.classList.remove("show")
  profileDropdown.classList.remove("show")

}
proileImg.onclick = profiledropdownMenu
function profiledropdownMenu() {
  profileDropdown.classList.toggle("show")
  msgdropdown.classList.remove("show")
  notifications.classList.remove("show")
}
// ----------------------------------------------------------------------------------------------
//  get dashboard-content elements
let dashboardContentHeading = document.querySelector(".dashboard-content .dashboard-menu .dashboard-item h3")
let dashboardLinks = document.querySelector(".dashboard-content .dashboard-menu .dashboard-item ul")
console.log(dashboardContentHeading);
console.log(dashboardLinks);
// dashboardContentHeading.onclick = dashboard
// function dashboard() {
//   // dashboardLinks.classList.toggle("show")
//   dashboardLinks.style.display = "block"

// }
// dashboardContentHeading.addEventListener("click", () => {
//   dashboardLinks.classList.toggle("show")
// })

dashboardContentHeading.addEventListener('click', () => {
  if (dashboardLinks.style.display === 'none') {
    dashboardLinks.style.display = 'block';
    dashboardLinks.style.transition = '.5s';
  } else {
    dashboardLinks.style.display = 'none';
  }
});





