const swiperBg = new Swiper(".swiper-bg", {
    spaceBetween: 30,
    effect: "fade",
    navigation: false,
    pagination: false,
});

const swiperInfo = new Swiper('.swiper-info', {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: false,
    pagination: {
        el: '.swiper-pagination-fraction',
        type: 'fraction',
        formatFractionCurrent: function(number) {
            return number.toString().padStart(2, '0');
        },
        formatFractionTotal: function(number) {
            return number.toString().padStart(2, '0');
        },
    },
    on: {
        slideChange: function() {
            swiperBg.slideTo(this.activeIndex);
        }
    }
});