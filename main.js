
window.onscroll = function() {nav_menu()};
function nav_menu(){
    const menu = document.getElementById("menu-icon");
    const navbar = document.getElementsByClassName('nav-links')[0];

    menu.classList.toggle('.menu-icon');
    navbar.classList.toggle('open');

}














