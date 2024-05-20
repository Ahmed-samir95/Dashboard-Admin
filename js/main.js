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
  console.log("good");
  notifications.classList.toggle("show")
}
navSvgSec.onclick = msgdropdownMenu
function msgdropdownMenu() {
  msgdropdown.classList.toggle("show")
}
proileImg.onclick = profiledropdownMenu
function profiledropdownMenu() {
  profileDropdown.classList.toggle("show")
}
