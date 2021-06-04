$(document).ready(function() {
    $(".navbar").hide();
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 200) {
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        });
    });

    $("#myModal").modal('show');
    // Porfolio filer
    $("#portfolios-flters li").click(function() {
        $("#portfolios-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');
        var selectedFilter = $(this).data("filter");
        $("#portfolios-wrapper").fadeTo(100, 0);
        $(".portfolios-item").fadeOut().css('transform', 'scale(0)');
        setTimeout(function() {
            $(selectedFilter).fadeIn(100).css('transform', 'scale(1)');
            $("#portfolios-wrapper").fadeTo(300, 1);
        }, 300);
    });
    // Page scroll
    $('a.page-scroll').click(function() {
        //          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        //            var target = $(this.hash);
        //            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        //            if (target.length) {
        //              $('html,body').animate({
        //                scrollTop: target.offset().top - 40
        //              }, 900);
        //              return false;
        //            }
        //          }
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target ||
                $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body')
                    .animate({ scrollTop: targetOffset }, 1000);
                return false;
            }
        }
    });
    //Scroll
    $('body').scrollspy({
        target: '.navbar-default',
        offset: 80
    });
    $('#tohash,.btn-start').on('click', function() {
        $('html, body').animate({ scrollTop: $(this.hash).offset().top - 5 }, 1000);
        return false;
    });
    new WOW().init();
    //magnific pop
    $('.single-video,.filter-app').magnificPopup({
        delegate: 'a',
        type: 'iframe'
    });

    //tariff basic plan
    $('#bweek').hide();
    $('#bmonth').hide();
    $('#bqua').hide();
    $('#byer').hide();
    $('#tar').change(function() {
        if ($('#tar').val() === 'bd') {
            $('#bday').show();
            $('#bweek').hide();
            $('#bmonth').hide();
            $('#bqua').hide();
            $('#byer').hide();
        } else if ($('#tar').val() === 'bw') {
            $('#bweek').show();
            $('#bday').hide();
            $('#bmonth').hide();
            $('#bqua').hide();
            $('#byer').hide();
        } else if ($('#tar').val() === 'bm') {
            $('#bweek').hide();
            $('#bday').hide();
            $('#bmonth').show();
            $('#bqua').hide();
            $('#byer').hide();
        } else if ($('#tar').val() === 'bq') {
            $('#bweek').hide();
            $('#bday').hide();
            $('#bmonth').hide();
            $('#bqua').show();
            $('#byer').hide();
        } else if ($('#tar').val() === 'by') {
            $('#bweek').hide();
            $('#bday').hide();
            $('#bmonth').hide();
            $('#bqua').hide();
            $('#byer').show();
        }
    });
    // tarif plan drone lab
    $('#bbweek').hide();
    $('#bbmonth').hide();
    $('#bbqua').hide();
    $('#bbyer').hide();
    $('#tar1').change(function() {
        if ($('#tar1').val() === 'bbd') {
            $('#bbday').show();
            $('#bbweek').hide();
            $('#bbmonth').hide();
            $('#bbqua').hide();
            $('#bbyer').hide();
        } else if ($('#tar1').val() === 'bbw') {
            $('#bbweek').show();
            $('#bbday').hide();
            $('#bbmonth').hide();
            $('#bbqua').hide();
            $('#bbyer').hide();
        } else if ($('#tar1').val() === 'bbm') {
            $('#bbweek').hide();
            $('#bbday').hide();
            $('#bbmonth').show();
            $('#bbqua').hide();
            $('#bbyer').hide();
        } else if ($('#tar1').val() === 'bbq') {
            $('#bbweek').hide();
            $('#bbday').hide();
            $('#bbmonth').hide();
            $('#bbqua').show();
            $('#bbyer').hide();
        } else if ($('#tar1').val() === 'bby') {
            $('#bbweek').hide();
            $('#bbday').hide();
            $('#bbmonth').hide();
            $('#bbqua').hide();
            $('#bbyer').show();
        }
    });
    //tarif plan arvr lab
    $('#bbbweek').hide();
    $('#bbbmonth').hide();
    $('#bbbqua').hide();
    $('#bbbyer').hide();
    $('#tar2').change(function() {
        if ($('#tar2').val() === 'bbbd') {
            $('#bbbday').show();
            $('#bbbweek').hide();
            $('#bbbmonth').hide();
            $('#bbbqua').hide();
            $('#bbbyer').hide();
        } else if ($('#tar2').val() === 'bbbw') {
            $('#bbbweek').show();
            $('#bbbday').hide();
            $('#bbbmonth').hide();
            $('#bbbqua').hide();
            $('#bbbyer').hide();
        } else if ($('#tar2').val() === 'bbbm') {
            $('#bbbweek').hide();
            $('#bbbday').hide();
            $('#bbbmonth').show();
            $('#bbbqua').hide();
            $('#bbbyer').hide();
        } else if ($('#tar2').val() === 'bbbq') {
            $('#bbbweek').hide();
            $('#bbbday').hide();
            $('#bbbmonth').hide();
            $('#bbbqua').show();
            $('#bbbyer').hide();
        } else if ($('#tar2').val() === 'bbby') {
            $('#bbbweek').hide();
            $('#bbbday').hide();
            $('#bbbmonth').hide();
            $('#bbbqua').hide();
            $('#bbbyer').show();
        }
    });
});