/**
 * Created by estin on 21/11/15.
 */
$(document).ready(function(){
    $('.top-main-gallery').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 4000
    });
});
$('body').scroll(function() {
    if ($('body').scrollTop() > 50) {
        $('nav').removeClass('navbar-large');
        $('nav').addClass('navbar-small');
    } else {
        $('nav').addClass('navbar-large');
        $('nav').removeClass('navbar-small');
    }
});