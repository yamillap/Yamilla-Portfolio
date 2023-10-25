const menu;
const navbar;
window.onscroll = function() {nav_menu()};
function nav_menu(){
    menu =  document.getElementById("menu-icon");
    navbar = document.getElementsByClassName('nav-links')[0];
    menu.classList.toggle('.menu-icon');
    navbar.classList.toggle('open');

}














