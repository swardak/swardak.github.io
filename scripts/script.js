/*the following was borrowed & tweaked frm w3schools.com :)*/
function toggleHamburger() {
    var x = document.getElementById("nav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

  var navbar = document.getElementById("nav");
  var navItem = navbar.getElementsByClassName("nav-item");
  for (var i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace("active", "");
      this.className += " active";
    });
  }