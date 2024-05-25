const menu = document.querySelector('#menu-movil');
const menuLinks = document.querySelector('.barranave__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})