const menubtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-brading');
const navItems = document.querySelectorAll(".nav-item");
// set The initial state to overLay if it close or open thats a boolean

let showmenu = false;

menubtn.addEventListener('click', togglemenu);
function togglemenu(){
    if(!showmenu){
        menubtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        showmenu = true;
    }
    else{
        menubtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showmenu = false;
    }
}