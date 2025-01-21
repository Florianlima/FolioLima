document.addEventListener("DOMContentLoaded", function () {
    // Initialisation du Swiper principal
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

    // Initialisation du Swiper des miniatures
    const swiper2 = new Swiper('.mySwiper2', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        loop: true,
    });

    // Lier les deux Swipers
    swiper.thumbs.swiper = swiper2;
    swiper.thumbs.init();
});
