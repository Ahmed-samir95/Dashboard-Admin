//  get nav elements
let navSvg = document.querySelector(".prs-icon")
let navSvgSec = document.querySelector(".prs-icon-2")
let notifications = document.querySelector(".dropdown-menu")
let msgdropdown = document.querySelectorAll("ul")[1]
console.log(msgdropdown);

navSvg.onclick = show
function show() {
  console.log("good");
  notifications.classList.toggle("show")
}
navSvgSec.onclick = msgdropdownMenu
function msgdropdownMenu() {
  msgdropdown.classList.toggle("show")
}
