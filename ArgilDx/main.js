const onresize = function () {
    width = document.body.clientWidth;
    if (width => 768) document.querySelector(".modal-box.slide-menu").classList.remove("is-open");
}
let docVarialbles = {
    toggleMenu: document.querySelector(".slide-menu"),
    overlay: document.querySelector(".slide-overlay"),
    menuBtn: document.querySelector("button.menu-toggle-icon a"),
    searchModal: document.querySelector(".search__modal")
}
const showSideMenu = e => {
    docVarialbles.toggleMenu.classList.add("is-open");
    docVarialbles.overlay.classList.remove("hidden");
}
const showSearchModal = e => {
    docVarialbles.searchModal.classList.add("is-open");
    docVarialbles.overlay.classList.remove("hidden");
}
const hideSideMenu = e => {
    let parentEl = e.target.parentElement.parentElement.getAttribute("id")
    document.getElementById(parentEl).classList.remove("is-open");
    docVarialbles.overlay.classList.add("hidden");
}
docVarialbles.overlay.addEventListener('click', () => {
    docVarialbles.overlay.classList.add("hidden");
    document.querySelectorAll('.modal-box').forEach(el => el.classList.remove("is-open"))
});
document.querySelectorAll(".btn-close").forEach(item => {
    item.addEventListener('click', hideSideMenu, event)
})
document.querySelectorAll(".searchField i").forEach(item => {
    item.addEventListener('click', showSearchModal, event)
})

document.querySelector(".searchField i")
window.addEventListener("resize", onresize);
docVarialbles.menuBtn.addEventListener('click', showSideMenu, event);


