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

        service_cruise: "Cargo Ship Services",
        service_cruise_p1:"PT. Bunga Laut Mandiri provides cargo transportation services using cargo ships to support inter-island logistics and industrial project needs across Indonesia.This service is designed to provide a safe, efficient, and reliable maritime transportation solution for companies that require large-scale cargo delivery or project logistics support.",
        
        service_excursion: "Types of Vessels",
        service_excursion_p1:"Our fleet consists of various types of vessels designed to support maritime transportation and logistics activities safely and efficiently.Motor Vessel (MV) – A cargo vessel used for transporting various types of goods such as general cargo, project materials, and inter-port logistics with large cargo capacity.Landing Craft Tank (LCT) – A vessel equipped with a ramp door at the bow, allowing easy loading and unloading of vehicles, heavy equipment, and project materials directly to docks or beaches.Crew Boat – A fast vessel used for transporting crew members and operational personnel to offshore work locations such as offshore terminals, platforms, and other maritime operational areas.Our fleet is operated by professional and experienced crew members and supported by high maritime safety standards to ensure safe, reliable, and timely sea transportation services.",
        
        service_stevedoring: "Types of Cargo",
        service_stevedoring_p1:"We handle the transportation of various types of cargo including heavy equipment such as excavators, bulldozers, and cranes, project vehicles and trucks,construction materials, containers, general cargo, and industrial equipment required for project logistics operations.",
        
        service_forwarding: "Operational Areas",
        service_forwarding_p1:"Our cargo transportation services cover various maritime regions across Indonesia including Sumatra, Java, Kalimantan, Sulawesi, and Eastern Indonesia.With a wide operational network, we are able to support logistics distribution to various ports and industrial areas throughout the country.",
        service_agency: "Service Advantages",
        service_agency_p1:"PT. Bunga Laut Mandiri is committed to providing professional and reliable cargo transportation services. Our fleet is well-maintained and ready for operation, supported by experienced and certified crew members. We ensure efficient loading and unloading processes while prioritizing safety and punctuality in every operational activity.",

        visi_title:"Vision and Mission",
        vision_name:"vision",
        vision_text:"To become a trusted and professional shipping company in providing safe, efficient, and sustainable maritime transportation and logistics services in Indonesia.",
        mission_name:"mission",
        mission_1:"Developing competent, professional, and high-integrity human resources to support company growth.",
        mission_2:"Operating high-quality vessels that comply with international maritime safety standards.",
        mission_3:"Providing reliable, safe, and timely maritime transportation services to meet customer needs.",
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

        service_cruise: "Layanan Kapal Kargo",
        service_cruise_p1: "PT. Bunga Laut Mandiri menyediakan layanan pengangkutan barang menggunakan kapal kargo (Cargo Ship) untuk mendukung kebutuhan logistik antar pulau maupun berbagai proyek industri di seluruh wilayah Indonesia. Layanan ini dirancang untuk memberikan solusi transportasi laut yang aman, efisien, dan dapat diandalkan bagi perusahaan yang membutuhkan pengiriman barang dalam jumlah besar maupun kebutuhan logistik proyek.",

        service_excursion: "Jenis Kapal",
        service_excursion_p1: "Armada kami terdiri dari berbagai jenis kapal yang dirancang untuk mendukung kegiatan transportasi laut dan logistik maritim secara aman dan efisien.Motor Vessel (MV) – Kapal kargo yang digunakan untuk pengangkutan berbagai jenis barang seperti general cargo, material proyek, dan logistik antar pelabuhan dengan kapasitas muatan yang besar.Landing Craft Tank (LCT) – Kapal yang dilengkapi dengan ramp door di bagian depan sehingga memudahkan proses bongkar muat kendaraan, alat berat, dan material proyek langsung ke dermaga maupun pantai.Crew Boat – Kapal cepat yang digunakan untuk transportasi kru dan personel operasional menuju lokasi kerja di laut seperti terminal offshore, platform, dan area operasional maritim.Armada kami dioperasikan oleh crew profesional dan berpengalaman, serta didukung dengan standar keselamatan pelayaran yang tinggi untuk memastikan layanan transportasi laut yang aman, tepat waktu, dan terpercaya.",


        service_stevedoring: "Jenis Muatan",
        service_stevedoring_p1: "Kami melayani pengangkutan berbagai jenis muatan seperti alat berat (excavator,bulldozer, crane), kendaraan proyek dan truk operasional, material konstruksi,container, serta berbagai jenis general cargo dan peralatan industri yang dibutuhkan dalam kegiatan logistik proyek.",


        service_forwarding: "Area Operasi",
        service_forwarding_p1: "Layanan pengangkutan kami mencakup berbagai wilayah pelayaran di Indonesia termasuk Sumatera, Jawa, Kalimantan, Sulawesi, serta kawasan Indonesia Timur.Dengan jaringan operasional yang luas, kami mampu mendukung distribusi logistik ke berbagai pelabuhan dan wilayah industri di Indonesia.",


        service_agency: "Keunggulan Layanan",
        service_agency_p1: "PT. Bunga Laut Mandiri berkomitmen untuk memberikan layanan pengangkutancargo yang profesional dan dapat diandalkan. Armada kapal kami selalu dalam kondisi terawat dan siap operasi, didukung oleh crew kapal yang berpengalaman dan bersertifikasi. Kami juga memastikan proses bongkar muat dilakukan secara efisien dengan mengutamakan keselamatan dan ketepatan waktu dalam setiap kegiatan operasional.",

        visi_title: "Visi dan Misi",
        vision_name: "Visi",
        vision_text: "Menjadi perusahaan pelayaran yang terpercaya dan profesional dalam menyediakan layanan transportasi laut dan logistik maritim yang aman, efisien, dan berkelanjutan di Indonesia.",

        mission_name: "Misi",
        mission_1: "Mengembangkan sumber daya manusia yang kompeten, profesional, dan berintegritas untuk mendukung pertumbuhan perusahaan.",
        mission_2: "Mengoperasikan armada kapal yang berkualitas dan memenuhi standar keselamatan pelayaran internasional.",
        mission_3: "Menyediakan layanan transportasi laut yang handal, aman, dan tepat waktu untuk memenuhi kebutuhan pelanggan.",
        
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

