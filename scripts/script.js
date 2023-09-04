/*the following was borrowed & tweaked frm w3schools.com :)*/
function toggleHamburger() {
  var x = document.getElementById("nav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
