//TEAM-SLIDER
const prevArrow = document.querySelector('.arrow--left')
const nextArrow = document.querySelector('.arrow--right')

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }

    slides[slideIndex - 1].style.display = 'flex'
    slides[slideIndex - 1].style.width = 'auto'

}

nextArrow.addEventListener('click', plusSlide)
prevArrow.addEventListener('click', minusSlide)