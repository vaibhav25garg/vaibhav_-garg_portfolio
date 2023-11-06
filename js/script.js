document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.oneclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}