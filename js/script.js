/** ************************* <БУРГЕР> ************************* **/
$(document).ready(function () {
    $('.header-burger').click(function (event) {
        $('.header-burger, .header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
/** ************************* <SLIDER> ************************* **/
    $('.slider-items').slick({
        arrows: false,
        slidesToShow: 1
    });

    $(".slider-arrows__left").on("click", function (event) {
        event.preventDefault();

        $('.slider-items').slick("slickPrev");
    });

    $(".slider-arrows__right").on("click", function (event) {
        event.preventDefault();

        $('.slider-items').slick("slickNext");
    });
/** ************************* <SLIDER2> ************************* **/
$(function () {
    let addListener = function (slider) {
        let link = $('.toggle-slick');

        link.on('click', function () {
            let slid = $(this).attr('data-slide');

            slider.slick('slickGoTo', slid);
        })
    };

    let init = function () {
        let $slickContainer = $('.slider2-body');

        //Обработчик события init
        $slickContainer.on('init', function (event, slick, currentSlide, nextSlide) {
            let $slider = $(this);

            addListener($slider);
        });

        //Инициализация слайдера
        $('.slider2-body').slick({
            slidesToShow: 1,
            infinite: false,
            arrows: false,
            dots: true,
        });
    };
    init();
});