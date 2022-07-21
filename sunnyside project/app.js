let mobMenu = document.getElementById('mob-menu');
let arrow = document.getElementById('arrow');

mobMenu.style.display = "none";

function menu() {
    if (mobMenu.style.display==="none") {
        mobMenu.style.display = "flex";
        arrow.style.display = "none"
    } else {
        mobMenu.style.display = "none"
        arrow.style.display = "flex";
    }
}