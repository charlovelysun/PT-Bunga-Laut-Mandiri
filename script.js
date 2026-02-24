
// Inisialisasi EmailJS
(function () {
    emailjs.init("K03XaO_pdl9X1yo-a");
})();

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        status.innerHTML = "Sending...";
        status.style.color = "white";

        emailjs.sendForm(
            "service_m9qtywf",
            "template_smawvda",
            this
        )
        .then(function () {

            status.innerHTML = "Message sent successfully!";
            status.style.color = "lightgreen";
            form.reset();

        }, function () {

            status.innerHTML = "Failed to send message. Please try again.";
            status.style.color = "red";

        });

    });

});


document.addEventListener("DOMContentLoaded", function () {

    /* =======================
       SLIDER
    ======================== */
    const track = document.querySelector(".slider-track");
    const slides = document.querySelectorAll(".slider-track img");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    if (track && slides.length > 0 && nextBtn && prevBtn) {

        let index = 0;
        const totalSlides = slides.length;
        let autoSlide = setInterval(goNext, 4000);

        function updateSlider() {
            track.style.transform = `translateX(-${index * 100}%)`;
        }

        function goNext() {
            index = (index + 1) % totalSlides;
            updateSlider();
        }

        function goPrev() {
            index = (index - 1 + totalSlides) % totalSlides;
            updateSlider();
        }

        function stopAutoSlide() {
            clearInterval(autoSlide);
        }

        nextBtn.addEventListener("click", function() {
            stopAutoSlide();
            goNext();
        });

        prevBtn.addEventListener("click", function() {
            stopAutoSlide();
            goPrev();
        });
    }

    /* =======================
       HAMBURGER MENU
    ======================== */
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    /* =======================
       CONTACT FORM
    ======================== */
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    if (form) {
        form.addEventListener("submit", function (event) {

            event.preventDefault();

            status.innerHTML = "Sending...";
            status.style.color = "white";

            emailjs.sendForm(
                "service_m9qtywf",
                "template_smawvda",
                this
            )
            .then(function () {
                status.innerHTML = "Message sent successfully!";
                status.style.color = "lightgreen";
                form.reset();
            }, function () {
                status.innerHTML = "Failed to send message. Please try again.";
                status.style.color = "red";
            });

        });
    }

});

/* =======================
   NAVBAR SCROLL EFFECT
======================= */
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");

    if (!header) return;

    if (window.scrollY > 50) {
        header.style.background = "#081726";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
        header.style.padding = "12px 60px";
    } else {
        header.style.background = "rgba(10, 31, 51, 0.7)";
        header.style.boxShadow = "none";
        header.style.padding = "18px 60px";
    }
});