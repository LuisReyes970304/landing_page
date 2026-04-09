const burger = document.querySelector(".burger");
const burger_nav = document.querySelector(".burger_nav");

burger.addEventListener("click", (e) => {
    e.stopPropagation();
    burger_nav.classList.toggle("show");
});

burger_nav.addEventListener("click", (e) => {
    e.stopPropagation();
});

window.addEventListener("click", () => {
    burger_nav.classList.remove("show");
});