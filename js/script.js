(function () {

    "use strict";

    var video_inner = $('.video-inner');
    var video = $('.video');
    var headerHeight = $('header').outerHeight();
    var c, currentScrollTop = 0,
        navbar = $('nav');

    //smooth scroll
    $('.slider-down').click(function(e){
        var linkHref = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight
        },1000);
        e.preventDefault();
    });

    //Video autoplay
    $(window).on('load', function () {
        video_inner.get(0).play();
    });
    video_inner.attr('loop', 'loop');
    video_inner.attr('autoplay', 'autoplay');

    //autoload video
    if($(window).width() < 800){
        $('.hide-body').show();
        $('.video').hide();
    }else{
        $('.hide-body').hide();
        $(window).on('load', function () {
            video.get(0).play();
            $('body').css('background-color', '#ffffff');
            $('.hide-body').hide();
        });
        video.on('ended', function () {
            $(this).addClass('move');
            $('body').css('background-color', 'white');
            setTimeout(function () {
                $('.hide-body').show();
                $('.video').hide();
            }, 1500);
        });
    }
    
    //add and remove css
    $('.navbarImg').hide();
    $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = navbar.height();

        currentScrollTop = a;

        if (c < currentScrollTop && a > b + b) {
            navbar.addClass("scrollUp");
            $('.navbarImg').show();

        } else if (currentScrollTop == 0) {
            navbar.removeClass("scrollUp");
            $('.navbarImg').hide();
        }
        c = currentScrollTop;
    });

    
})();