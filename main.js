const imgs = ["./image/banh3.png", "./image/banh4.png", "./image/banh5.png"];
let currentIndex = 0;
function showSlide(index) {
    const imageSlide = document.getElementById("imageSlide");
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
    imageSlide.src = imgs[index];
    setInterval(() => {
        currentIndex = (currentIndex + 1) % imgs.length;
        imageSlide.src = imgs[currentIndex];
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === currentIndex);
        });
    }, 2000);
}
function currentSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}
showSlide(currentIndex);

const menu = document.getElementById("menu-toggle");
menu.addEventListener("click", function () {
    const menu_mobile = document.getElementById("mobile-menu");
    if (menu_mobile.classList.contains("show")) {
        menu_mobile.classList.remove("show");
    } else {
        menu_mobile.classList.add("show");
    }
});

const stickyNav = document.getElementById("stickyMenu");
const banner = document.querySelector(".banner");

window.addEventListener("scroll", () => {
    const bannerBottom = banner.offsetTop + banner.offsetHeight;
    if (window.scrollY > bannerBottom) {
        stickyNav.classList.remove("sticky-hidden");
    } else {
        stickyNav.classList.add("sticky-hidden");
    }
});
const stickyToggle = document.getElementById("menu-toggle-sticky");
const stickyMobileMenu = document.getElementById("mobile-menu-sticky");

stickyToggle.addEventListener("click", () => {
    stickyMobileMenu.classList.toggle("d-none");
});
