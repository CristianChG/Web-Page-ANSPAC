// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
}


// hide navbar

let navbar = document.querySelectorAll('.nav-link');
let navbarCollapse = document.querySelector('.navbar-collapse.collapse');
navbar.forEach(function (a) {
    a.addEventListener("click", function () {
        navbarCollapse.classList.remove("show");
    })
});


//Cuenta regresiva

var countDownDate = new Date("July 20, 2025 20:44:20").getTime();

        // Actualizar la cuenta regresiva cada 1 segundo
        var x = setInterval(function() {
            // Obtener la fecha y la hora de hoy
            var now = new Date().getTime();
            
            // Encuentre la distancia entre ahora y la fecha de la cuenta regresiva
            var distance = countDownDate - now;
            
            // Cálculos de tiempo para días, horas, minutos y segundos.
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Muestra el countdown
            document.getElementById("dias").innerHTML = days;
            document.getElementById("horas").innerHTML = hours;
            document.getElementById("minutos").innerHTML = minutes;
            document.getElementById("segundos").innerHTML = seconds;
 
        }, 1000);