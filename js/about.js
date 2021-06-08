var element = document.getElementById("hdr1");
var element1 = document.getElementById("scroll-top-button");
var swiperV = new Swiper('.swiper-container0', {
    direction: 'vertical',
    mousewheel: true,
    speed: 600,
    spaceBetween: 0,
    /*  spaceBetween: 0,
      breakpoints: {
    320: {
        grabCursor: true,
        allowTouchMove:true,
    },
    1025: {
        grabCursor: false,
        allowTouchMove:false,
    }}
    */
});



$(".arrow-top ").on('click', function () {
    swiperV.slideTo(0, 1000, true);
});
$(".btnslide1").on('click', function () {

    swiperV.slideTo(3, 1000, true);
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


var swiper1 = new Swiper('.swiper-container4', {
    paginationClickable: true,

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
        320: {
            slidesPerView: 1,
        },
        725: {
            slidesPerView: 2,
        }
    }
});
