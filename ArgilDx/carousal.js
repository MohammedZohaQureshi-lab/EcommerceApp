var slideIndex = 0;
showSlides();
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    //setTimeout(showSlides, 2000); // Change image every 2 seconds
}

window.onscroll = function () { myFunction() };

// Get the header
var header = document.querySelector(".site-header");
var headerOffset = document.querySelector(".header-offset");
var toTop = document.querySelector(".scroll-to-top");
if (window.pageYOffset > 100) {
    toTop.classList.add("visible")
}
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
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