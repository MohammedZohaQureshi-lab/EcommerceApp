const showSlides = () => {
    let slideItems = document.getElementsByClassName("carousal__container-slideItems");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slideItems.length; i++) {
        slideItems[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > slideItems.length) { slideIndex = 1 };
    slideItems[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
    //setTimeout(showSlides, 5000);
}
const nextSlide = n => {
    slideIndex += n - 1
    showSlides();
}

const currentSlide = e => {
    slideIndex = e.target.getAttribute("data-slide") - 1;
    showSlides();
}
const pageScrollUpdate = () => {
    if (window.pageYOffset > (headerOffset.offsetTop + 160)) {
        header.classList.add("sticky");
    }

    else if (window.pageYOffset > 100) {
        toTop.classList.add("visible")
    }
    else {
        header.classList.remove("sticky");
        toTop.classList.remove("visible")
    }
}
let slideIndex = 0;
let header = document.querySelector(".site-header");
let headerOffset = document.querySelector(".header-offset");
let toTop = document.querySelector(".scroll-to-top");
if (window.pageYOffset > 100) {
    toTop.classList.add("visible")
}
showSlides();
document.querySelectorAll(".dot-block .dot").forEach(element => {
    element.addEventListener('click', currentSlide, event)
});
window.addEventListener('scroll', pageScrollUpdate);