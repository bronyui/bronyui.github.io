
let slideIndex = 1;
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlide() {
    showSlides(slideIndex += 1);
    
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
/*function previousSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливаем текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
    
}

/* Функция перелистывания */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    
    if (n > slides.length) {
      slideIndex = 1
    }
    /*if (n < 1) {
        slideIndex = slides.length
    }
  
  // Проходим по каждому слайду в цикле for */
    for (let slide of slides) {
        slide.style.display = "none";
    }   
    slides[slideIndex - 1].style.display = "block"; 
    
}



//$('a').append(Math.random());

  /*  $(window).bind({
        beforeunload: function(ev) {
            ev.preventDefault();
        },
        unload: function(ev) {
            ev.preventDefault();
        }
    });*/

$('.next').on('click', function (e) { e.preventDefault(); nextSlide() });

$(document).ready(function(){
    $('.next').click(function(event){
        event.preventDefault();
        nextSlide();
    })
});
    