var element = document.getElementById("hdr1");
var element1 = document.getElementById("scroll-top-button");
$(function () {
    var $window = $(window);
    $window.scroll(function () {
        $(this).scrollTop();
    });
});
var swiperV = new Swiper('.swiper-container0', {
    direction: 'vertical',
    mousewheel: true,
    speed: 600,
    spaceBetween: 0,
});



$(".arrow-top").on('click', function () {
    swiperV.mousewheel.enable();
    swiperV.slideTo(0, 1000, true);
});

$(".btnslide1").on('click', function () {
    swiperV.slideTo(5, 1000, true);
});


$(".btnslide2").on('click', function () {
    swiperV.slideTo(6, 1000, true);
});

$("#topupslide, #topupslide1, #topupslide2").on('click', function () {
    swiperV.slideTo(0, 1000, true);
});



swiperV.on('scroll', function () {
    if (swiperV.realIndex > 0)  {element.classList.add("mystyle"); element1.classList.remove("display-none");  }
    else {element.classList.remove("mystyle"); element1.classList.add("display-none");}
});
swiperV.on('slideChange', function () {
    if (swiperV.realIndex > 0) {element.classList.add("mystyle"); element1.classList.remove("display-none"); }
    else {element.classList.remove("mystyle"); element1.classList.add("display-none"); }
});


swiperV.on('transitionEnd', function () {

    if (swiperV.realIndex > 0) element.classList.add("mystyle");
    else element.classList.remove("mystyle");


    if (swiperV.realIndex == 2)
        setTimeout(sayHi, 40);
    else swiperV1.mousewheel.disable();


    if (swiperV.realIndex == 4)
        setTimeout(sayHi1, 40);
    else swiperV2.mousewheel.disable();
});

function sayHi() {
    swiperV1.mousewheel.enable();
}
function sayHi1() {
    swiperV2.mousewheel.enable();
}
var swiperV1 = new Swiper('.swiper-container-v1', {
    direction: 'vertical',
    slidesPerView: "auto",
    freeMode: true,
    nested: true,

    /*   breakpoints: {
     320: {
         mousewheel: false,
     
 
       allowTouchMove:true,
     },
     980: {
         mousewheel: true,
       allowTouchMove:true,
     }
 }*/
});

swiperV.on('transitionEnd', function () {

    if (swiperV1.realIndex < 3 && swiperV.realIndex == 2) swiperV.mousewheel.disable();

    if (swiperV2.realIndex < 2 && swiperV.realIndex == 4) swiperV.mousewheel.disable();


    //console.log('VTPR', swiperV1.realIndex);

});
swiperV1.on('scroll', function () {



    if (swiperV1.realIndex == 0) swiperV.mousewheel.enable();
    else if (swiperV1.realIndex >= 2) swiperV.mousewheel.enable();
    else swiperV.mousewheel.disable();




    //console.log('ВТОРОСТЕПЕННЫЙ СЛАЙДЕР', swiperV1.realIndex);
});


var swiperV2 = new Swiper('.swiper-container-v2', {
    nested: true,
    direction: 'vertical',
    slidesPerView: 'auto',
    freeMode: true,
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    mousewheel: false,
});
swiperV2.on('scroll', function () {



    if (swiperV2.realIndex == 0) swiperV.mousewheel.enable();
    else if (swiperV2.realIndex >= 1) swiperV.mousewheel.enable();
    else swiperV.mousewheel.disable();
});

var swiper1 = new Swiper('.swiper-container1', {
    paginationClickable: true,
    centeredSlides: true,
    slidesPerView: 5,
    nested: true,
    spaceBetween: 5,
    loop: true,

    paginationClickable: true,
    grabCursor: true,

    speed: 500,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {

        100: {
            slidesPerView: 1.9,
        }
        ,
        665: {
            slidesPerView: 3,
            spaceBetween: 10,

        },
        1180: {
            slidesPerView: 5,
            spaceBetween: 10,
        }
    }

});

var swiper1 = new Swiper('.swiper-container3', {

    slidesPerView: 'auto',
    nested: true,
    spaceBetween: 5,


    speed: 500,

    breakpoints: {

        320: {
            slidesPerView: 2,
        }
        ,
        650: {
            slidesPerView: 3,
        },
        1025: {
            slidesPerView: 4,
            spaceBetween: 5,
        }
    }
});


var swiperLine = new Swiper('.swiper-containerLine', {
    nested: true,
    spaceBetween: 0,
    freeMode: true,

    direction: "horizontal",
    slidesPerView: "auto",
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    mousewheel: true,
    speed: 500,


});



var swiperLine = new Swiper('.swiper-containerLine', {
    nested: true,
    spaceBetween: 0,
    freeMode: true,

    direction: "horizontal",
    slidesPerView: "auto",
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    mousewheel: true,
    speed: 500,


});