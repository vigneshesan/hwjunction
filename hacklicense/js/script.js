$(document).ready(function () {
  
    'use strict';
    
     var c, currentScrollTop = 0,
     navbar = $('nav');
     var headerHeight = $('header').outerHeight();
    $('.navbarImg').hide();
    
    
    //smooth scroll
    $('.slider-down').click(function(e){
      var linkHref = $(this).attr('href');
      $('html,body').animate({
          scrollTop: $(linkHref).offset().top - headerHeight
      },1000);
      e.preventDefault();
  });
    
    $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = navbar.height();
       
        currentScrollTop = a;
       
        if (c < currentScrollTop && a > b + b) {
          navbar.addClass("scrollUp");
          $('.navbarImg').show();
         } 
        else if (currentScrollTop == 0) {
          navbar.removeClass("scrollUp");
          $('.navbarImg').hide();
        }
        c = currentScrollTop;
    });


   
    
});