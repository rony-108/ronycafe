/* =================================
   DARK / LIGHT THEME
================================= */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("cafeTheme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀";
} else {
    themeToggle.textContent = "☾";
}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    if (isDark) {
        themeToggle.textContent = "☀";
        localStorage.setItem("cafeTheme", "dark");
    } else {
        themeToggle.textContent = "☾";
        localStorage.setItem("cafeTheme", "light");
    }

});


/* =================================
   MOBILE NAVIGATION
================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    if (navMenu.classList.contains("open")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});


/* =================================
   BACK TO TOP
================================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =================================
   CONTACT FORM
================================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        formMessage.textContent =
            "Thank you! Your message has been received ☕";

        contactForm.reset();

    });

}