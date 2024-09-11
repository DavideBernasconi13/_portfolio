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

