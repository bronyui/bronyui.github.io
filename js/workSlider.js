//WORK-SLIDER
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
    let slides = document.getElementsByClassName("work__slider__item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active')
    }

    slides[slideIndex - 1].classList.toggle('active')

}

nextArrow.addEventListener('click', plusSlide)
prevArrow.addEventListener('click', minusSlide)