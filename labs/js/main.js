jQuery(function($) {

	//Preloader
	var preloader = $('.preloader');
	$(window).load(function(){
		preloader.remove();
	});
	

	//#main-slider
	var slideHeight = $(window).height();
	$('#home-slider .item').css('height',slideHeight);

	$(window).resize(function(){'use strict',
		$('#home-slider .item').css('height',slideHeight);
	});
	
	//Scroll Menu
	$(window).on('scroll', function(){
		if( $(window).scrollTop()>slideHeight ){
			$('.main-nav').addClass('navbar-fixed-top');
		} else {
			$('.main-nav').removeClass('navbar-fixed-top');
		}
	});
	
	// Navigation Scroll
	$(window).scroll(function(event) {
		Scroll();
	});

	$('.navbar-collapse ul li a').on('click', function() {  
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
		return false;
	});

	// User define function
	function Scroll() {
		var contentTop      =   [];
		var contentBottom   =   [];
		var winTop      =   $(window).scrollTop();
		var rangeTop    =   200;
		var rangeBottom =   500;
		$('.navbar-collapse').find('.scroll a').each(function(){
			contentTop.push( $( $(this).attr('href') ).offset().top);
			contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
		})
		$.each( contentTop, function(i){
			if ( winTop > contentTop[i] - rangeTop ){
				$('.navbar-collapse li.scroll')
				.removeClass('active')
				.eq(i).addClass('active');			
			}
		})
	};

	$('#tohash').on('click', function(){
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
		return false;
	});
	
	//Initiat WOW JS
	new WOW().init();
	//smoothScroll
	smoothScroll.init();
	
	// Progress Bar
	$('#about-us').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$.each($('div.progress-bar'),function(){
				$(this).css('width', $(this).attr('aria-valuetransitiongoal')+'%');
			});
			$(this).unbind('inview');
		}
	});

	//Countdown
	$('#features').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$(this).find('.timer').each(function () {
				var $this = $(this);
				$({ Counter: 0 }).animate({ Counter: $this.text() }, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
			});
			$(this).unbind('inview');
		}
	});
    //tariff basic plan
            $('#bweek').hide();
            $('#bmonth').hide();
            $('#bqua').hide();
            $('#byer').hide();
    $('#tar').change(function(){
       if($('#tar').val()==='bd'){
            $('#bday').show();
            $('#bweek').hide();
            $('#bmonth').hide();
            $('#bqua').hide();
            $('#byer').hide();
        }else if($('#tar').val()==='bw'){
            $('#bweek').show();
            $('#bday').hide();
            $('#bmonth').hide();
            $('#bqua').hide();
            $('#byer').hide();
        }else if($('#tar').val()==='bm'){
            $('#bweek').hide();
            $('#bday').hide();
            $('#bmonth').show();
            $('#bqua').hide();
            $('#byer').hide();
        }else if($('#tar').val()==='bq'){
            $('#bweek').hide();
            $('#bday').hide();
            $('#bmonth').hide();
            $('#bqua').show();
            $('#byer').hide();
        }else if($('#tar').val()==='by'){
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
    $('#tar1').change(function(){
        if($('#tar1').val()==='bbd'){
            $('#bbday').show();
            $('#bbweek').hide();
            $('#bbmonth').hide();
            $('#bbqua').hide();
            $('#bbyer').hide();
        }else if($('#tar1').val()==='bbw'){
            $('#bbweek').show();
            $('#bbday').hide();
            $('#bbmonth').hide();
            $('#bbqua').hide();
            $('#bbyer').hide();
        }else if($('#tar1').val()==='bbm'){
            $('#bbweek').hide();
            $('#bbday').hide();
            $('#bbmonth').show();
            $('#bbqua').hide();
            $('#bbyer').hide();
        }else if($('#tar1').val()==='bbq'){
            $('#bbweek').hide();
            $('#bbday').hide();
            $('#bbmonth').hide();
            $('#bbqua').show();
            $('#bbyer').hide();
        }else if($('#tar1').val()==='bby'){
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
        $('#tar2').change(function(){
             if($('#tar2').val()==='bbbd'){
            $('#bbbday').show();
            $('#bbbweek').hide();
            $('#bbbmonth').hide();
            $('#bbbqua').hide();
            $('#bbbyer').hide();
        }else if($('#tar2').val()==='bbbw'){
            $('#bbbweek').show();
            $('#bbbday').hide();
            $('#bbbmonth').hide();
            $('#bbbqua').hide();
            $('#bbbyer').hide();
        }else if($('#tar2').val()==='bbbm'){
            $('#bbbweek').hide();
            $('#bbbday').hide();
            $('#bbbmonth').show();
            $('#bbbqua').hide();
            $('#bbbyer').hide();
        }else if($('#tar2').val()==='bbbq'){
            $('#bbbweek').hide();
            $('#bbbday').hide();
            $('#bbbmonth').hide();
            $('#bbbqua').show();
            $('#bbbyer').hide();
        }else if($('#tar2').val()==='bbby'){
            $('#bbbweek').hide();
            $('#bbbday').hide();
            $('#bbbmonth').hide();
            $('#bbbqua').hide();
            $('#bbbyer').show();
        }
        });
    // Porfolio filer
       $("#portfolios-flters li").click ( function() {
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
});
