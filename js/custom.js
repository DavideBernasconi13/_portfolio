/* -------------------------------------------------------------------------------- */
/* ! Go to top */
/* -------------------------------------------------------------------------------- */
const mybutton = document.getElementById("goToTop");

// quando la finestra scorre, chiama la funzione
window.onscroll = function () { scrollFunction() };


function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


/* -------------------------------------------------------------------------------- */
/* ! Responsive menu */
/* -------------------------------------------------------------------------------- */

let navbar = document.querySelector('.navbar');
let nav = document.querySelector('.nav-menu');
navbar.addEventListener("click", function () {
    nav.classList.toggle('open');
});

/*
// funzione per determinare la classe active nel menu 
window.addEventListener('scroll', function () {
    // Ottieni tutti i link del menu
    const menuLinks = document.querySelectorAll('.menu-link');

    // Ottieni tutte le sezioni
    const sections = document.querySelectorAll('section');

    let currentSection = '';


    // Loop attraverso le sezioni per trovare quella visibile
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    // Rimuovi la classe "active" da tutti i link
    menuLinks.forEach(link => {
        link.classList.remove('active');
        

        // Aggiungi la classe "active" al link corrispondente alla sezione visibile
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
});
*/