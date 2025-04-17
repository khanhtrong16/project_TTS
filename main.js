const totalSlides = 3;
let currentIndex = 0;

function showSlide(index) {
    const wrapper = document.getElementById("sliderWrapper");
    wrapper.style.transform = `translateX(-${index * 100}%)`;

    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

function currentSlide(index) {
    currentIndex = index;
    showSlide(index);
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}, 3000);
const menu = document.getElementById("menu-toggle");
menu.addEventListener("click", function () {
    const menu_mobile = document.getElementById("mobile-menu");
    if (menu_mobile.classList.contains("show")) {
        menu_mobile.classList.remove("show");
    } else {
        menu_mobile.classList.add("show");
    }
});

const stickyMenuToggle = document.getElementById("menu-toggle-sticky");
const stickyMobileMenu = document.getElementById("mobile-menu-sticky");

stickyMenuToggle.addEventListener("click", () => {
    stickyMobileMenu.classList.toggle("show");
});
const stickyNav = document.getElementById("stickyMenu");
const banner = document.querySelector(".banner");

window.addEventListener("scroll", () => {
    const bannerBottom = banner.offsetTop + banner.offsetHeight;
    if (window.scrollY > bannerBottom) {
        stickyNav.classList.remove("sticky-hidden");
        stickyMobileMenu.classList.remove("show");
    } else {
        stickyNav.classList.add("sticky-hidden");
    }
});
