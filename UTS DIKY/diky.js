const menu = document.querySelector('.navbar #menu');
const nav = document.querySelector('.navbar .navbar-top');

menu.addEventListener('click',function(){
    nav.classList.toggle('active');
});