var menu = document.querySelector(".mobile-menu");

function toggle() {
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
  }

window.onresize = function() {
    if(window.innerWidth >= 767) {
        menu.style.display = "block";
    }
}
