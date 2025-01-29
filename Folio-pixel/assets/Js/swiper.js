document.addEventListener("DOMContentLoaded", function () {
    
    const swiper = new Swiper('.mySwiper', {
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
           
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const swiper2 = new Swiper('.mySwiper2', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        loop: true,
    });

    
    swiper.thumbs.swiper = swiper2;
});