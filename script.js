let menu = document.querySelector('#menu-item');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Typing Text Code
var typed = new Typed('.mutliple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Blockchain Developer', 'Web Designer', 'Photographer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
  });