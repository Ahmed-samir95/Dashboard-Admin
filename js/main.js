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
// dashboard-content
let brIcon = document.querySelector(".br-icon")
let dashboardMenu = document.querySelector(".dashboard-menu")
console.log(brIcon);

brIcon.onclick = function () {
  dashboardMenu.classList.toggle("hide-dashboard-content")
}


