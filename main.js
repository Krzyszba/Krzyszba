var menuham = document.querySelector(".menu")
var navlinks = document.querySelector(".nav-links")
var links = document.querySelector(".lien")

menuham.addEventListener('click',() => {
        navlinks.classList.toggle('mobile-menu')
        menuham.classList.toggle('active')
    });

links.addEventListener('click',() => {
        navlinks.classList.remove('mobile-menu')
});


