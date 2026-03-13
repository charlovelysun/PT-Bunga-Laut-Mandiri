// =======================
// EMAILJS INIT
// =======================
(function () {
    emailjs.init("K03XaO_pdl9X1yo-a");
})();

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

        nextBtn.addEventListener("click", function () {
            stopAutoSlide();
            goNext();
        });

        prevBtn.addEventListener("click", function () {
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


    /* =======================
       LOAD SAVED LANGUAGE
    ======================== */

    const savedLang = localStorage.getItem("language") || "en";
    setLanguage(savedLang);

});



/* =======================
   NAVBAR SCROLL EFFECT
======================= */

window.addEventListener("scroll", function () {

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



// ================= TRANSLATION DATA =================

const translations = {

    en: {

        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_gallery: "Gallery",
        nav_contact: "Contact",

        hero_title: "Professional Logistics & Maritime Solutions",
        hero_text: "We provide port services, shipping, and logistics management with international standards and experienced teams.",
        hero_button: "View Services",

        about_title: "About PT. Bunga Laut Mandiri",
        about_p1: "PT. BUNGA LAUT MANDIRI is comprised of experienced professionals with strong expertise in the maritime and logistics industry. We are committed to safeguarding our clients’ interests anddelivering reliable, high-quality shipping solutions.",
        about_p2: "With over 10 years of management experience, we understand the complexity and competitiveness of the maritime sector.We proactively anticipate challenges and provide tailored solutions that ensure efficiency and operational excellence.",
        about_exp: "Years Experience",
        about_port: "Port Operations",
        about_support: "Operational Support",

        services_title: "Our Services",
        services_desc: "PT. Bunga Laut Mandiri is a full-service maritime agency with more than 15 years of experience in the Indonesian shipping industry.",

        service_cruise: "Cruise Ship",
        service_excursion: "Shore Excursions",
        service_stevedoring: "Stevedoring",
        service_forwarding: "Freight Forwarding",
        service_agency: "Shipping Agency",

        gallery_title: "Our Gallery",

        contact_title: "Contact Us",
        contact_send: "Send Message"
    },

    id: {

        nav_home: "Beranda",
        nav_about: "Tentang",
        nav_services: "Layanan",
        nav_gallery: "Galeri",
        nav_contact: "Kontak",

        hero_title: "Solusi Logistik & Maritim Profesional",
        hero_text: "Kami menyediakan layanan pelabuhan, pengiriman, dan manajemen logistik dengan standar internasional.",
        hero_button: "Lihat Layanan",

        about_title: "Tentang PT. Bunga Laut Mandiri",
        about_p1: "PT. BUNGA LAUT MANDIRI terdiri dari para profesional berpengalaman dengan keahlian yang kuat di industri maritim dan logistik. Kami berkomitmen untuk melindungi kepentingan klien kami dan memberikan solusi pengiriman yang andal dan berkualitas tinggi",
        about_p2: "Dengan pengalaman manajemen lebih dari 10 tahun, kami memahamikompleksitas dan daya saing sektor maritim.Kami secara proaktif mengantisipasi tantangan dan menyediakan solusi yang disesuaikan untuk memastikan efisiensi dan keunggulan operasional.",

        about_exp: "Tahun Pengalaman",
        about_port: "Operasi Pelabuhan",
        about_support: "Dukungan Operasional",

        services_title: "Layanan Kami",
        services_desc: "PT. Bunga Laut Mandiri adalah agen maritim dengan pengalaman lebih dari 15 tahun di industri pelayaran Indonesia.",

        service_cruise: "Kapal Pesiar",
        service_cruise_p1: "PT. Bunga Laut Mandiri adalah agen layanan penuh yang memiliki tenaga profesional yang berkualitas dan berpengetahuan luas dengan pengalaman panjang di industri maritim, baik di laut maupun di darat.",
        service_cruise_p2: "Sebagai agen pelabuhan tertua yang telah berdiri lebih dari 15 tahun, kami telah melayani semua jenis kapal, termasuk kapal pesiar. Tim kami yang berpengalaman dan multi-bahasa memberikan layanan penuh untuk kapal dan memastikan penanganan yang cepat serta efisien untuk semua detail yang terlibat dalam operasi kapal di pelabuhan Indonesia.",

        service_excursion: "Wisata Darat",
        service_excursion_p1: "Nikmati tur pulau yang santai dengan bus eksekutif, rasakan berlayar yang mendebarkan di perairan biru jernih, bersnorkel atau menyelam di banyak terumbu yang penuh warna, mendaki melalui pegunungan, dan kagumi keajaiban geologi Indonesia.",
        service_excursion_p2: "Kami menyediakan tur berkualitas tinggi dan sangat profesional untuk tamu Anda yang dapat disesuaikan dengan kebutuhan khusus Anda",

        service_stevedoring: "Stevedoring",
        service_stevedoring_p1: "PT. Bunga Laut Mandiri menyediakan layanan stevedoring terpadu kepada klien industri di seluruh wilayah, dilengkapi dengan peralatan bongkar/muat yang disesuaikan dengan kondisi kargo.",
        service_stevedoring_p2: "Bersama dengan perusahaan anak kami, bongkar muat adalah sebuah disiplin yang membutuhkan dukungan dari elemen lain dalam lingkup keseluruhan industri transportasi.",

        service_forwarding: "Pengiriman Barang",
        service_forwarding_p1: "Kami mengontrak dengan perusahaan pengangkut untuk memfasilitasi pergerakan barang.",
        service_forwarding_p2: "Kargo dapat dipesan pada berbagai jenis pengangkut.",

        service_agency: "Agen Pelayaran",
        service_agency_p1: "Layanan Agen Pengiriman melibatkan pelaksanaan operasi yang berkaitan dengan penumpang, kargo, pemeliharaan, pasokan, pergantian awak, dan lainnya",
        service_agency_p2: "Kami berpengalaman dalam menangani formalitas bea cukai, kepabeanan, dan logistik untuk arus barang.",
        gallery_title: "Galeri Kami",

        contact_title: "Hubungi Kami",
        contact_send: "Kirim Pesan"
    }

};


// ================= CHANGE LANGUAGE =================

function changeLanguage(lang) {

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.getAttribute("data-i18n");

        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }

    });

}


// ================= BUTTON LANGUAGE =================

document.querySelectorAll("[data-lang]").forEach(button => {

    button.addEventListener("click", () => {

        const lang = button.getAttribute("data-lang");
        changeLanguage(lang);

    });

});


// ================= DROPDOWN LANGUAGE =================

const langBtn = document.querySelector(".lang-btn");
const langMenu = document.querySelector(".lang-menu");

langBtn.addEventListener("click", () => {
    langMenu.classList.toggle("show");
});

document.addEventListener("click", function (e) {

    if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
        langMenu.classList.remove("show");
    }

});

