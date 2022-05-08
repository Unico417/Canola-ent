$('.slick-fade').slick({
    arrows: false,
    dots: false,
    autoplay: true,
    pauseOnHover: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    zIndex: 5
});

$("#gnav .mobile-gnav .top .humburger-menu").click(function () {
    $(this).toggleClass('active');
    $("#gnav .mobile-gnav .navi").toggleClass('active');
});