const showBtn = document.querySelector(".show-menu")
const closeBtn = document.querySelector(".close")
const menu = document.querySelector(".navbar-collapse ")

showBtn.addEventListener("click", () => {
    menu.classList.add("show")
});
closeBtn.addEventListener("click", () => {
    menu.classList.remove("show")
})