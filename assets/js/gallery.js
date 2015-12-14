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

window.addEventListener('scroll', function() {
    //var l = $('*').length;
    //for(var i = 0; i < l; i++) {
    //    var elem = $('*:eq(' + i + ')');
    //    if(elem.scrollTop() > 0) {
    //        console.log(elem, elem.scrollTop());
    //    }
    //}



    //console.log(frames.top.scrollY)
    //console.log($('body').scrollTop())
    if (window.scrollY > 100) {
        //$("#img_logo_shoe").fadeOut('slow');
        ////$("#img_logo_letters").show();
        ////$("#img_logo_shoe").opacity = 0;
        $("#img_logo_shoe").css({ opacity: 0.0 });
        $('nav').removeClass('navbar-large');
        $('nav').addClass('navbar-small');
    } else {
        $("#img_logo_shoe").css({ opacity: 1.0 });
        //$("#img_logo_shoe").fadeIn("slow");
        ////$("#img_logo_letters").hide();
        //$("#img_logo_shoe").opacity = 1;
        $('nav').addClass('navbar-large');
        $('nav').removeClass('navbar-small');
    }
});

$(document).ready(function(){
    // cache the window object
    $window = $(window);

    $('section[data-type="gallery"]').each(function(){
        // declare the variable to affect the defined data-type
        var $scroll = $(this);

        $(window).scroll(function() {
            // HTML5 proves useful for helping with creating JS functions!
            // also, negative value because we're scrolling upwards
            var yPos = ($window.scrollTop() / $scroll.data('speed'));

            // background position
            var coords = yPos + 'px';

            // move the background
            $scroll.css({ top: coords });
        }); // end window scroll
    });  // end section function
}); // close out script