AOS.init({ once: true });

let menulist = document.querySelector(".menu-list");
let menuicon = document.querySelector(".menu-icon");
let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line-center");
let line3 = document.querySelector(".line3");

menuicon.addEventListener("click", function () {
    menulist.classList.toggle("right-0");
    menulist.classList.toggle("-right-full");
    line2.classList.toggle("hidden");
    line1.classList.toggle("rotate-45");
    line3.classList.toggle("-rotate-45");
    line3.classList.toggle("top-0");
    line3.classList.toggle("bottom-0");
    menuicon.classList.toggle("top-3");
});


const preloader = document.querySelector(".preloader");

preloader.style.display = "grid";

setTimeout(() => {
    preloader.style.display = "none"
}, 1000);

let scroll1 = document.querySelector(".scrolltop");

scroll1.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

function toggleScroll1() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scroll1.style.display = "grid";
    } else {
        scroll1.style.display = "none";
    }
};

document.body.scrollTop = document.documentElement.scrollTop = 0;

window.addEventListener("scroll", toggleScroll1);