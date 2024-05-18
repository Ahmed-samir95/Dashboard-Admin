//  get nav elements
let navSvg = document.querySelector(".prs-icon")
let navSvgSec = document.querySelector(".prs-icon-2")
let notifications = document.querySelector(".dropdown-menu")
console.log(navSvgSec);

// navSvg.onclick =  () => {
//   // notifications.classList.toggle("show")
//   console.log("red");
// }

navSvg.onclick = show
navSvgSec.onclick = show
function show() {
  console.log("good");
  notifications.classList.toggle("show")
}


