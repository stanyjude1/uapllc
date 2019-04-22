(function($) {

    'use strict';

    

    /*-----------------------------------------------------------------------------------*/
    /*  Initialize
    /*-----------------------------------------------------------------------------------*/

    new WOW().init(); 

    /*-----------------------------------------------------------------------------------*/
    /*  Preloader
    /*-----------------------------------------------------------------------------------*/

    $(window).load(function() { 
        $('#status').fadeOut(); 
        $('#preloader').delay(350).fadeOut('fast'); 
        $('body').delay(350).css({'overflow':'visible'});

    });

    $(window).height(function(){
        $('.onscreen, .slides li').css('height', window.innerHeight - 84);
    });

    $(document).ready(function() {

        // TESTIMONIAL PAGE
        $('#masonry').masonry({
            columnWidth: 585,
            itemSelector:'.tbox'
        }); 		

   	});

    $(window).load(function(){

        // FLEXSLIDER METHOD
        $('.featured-slider .flexslider').flexslider({
            animation: "fade",
            controlNav: false
        });

        $('.service-flexslider').flexslider({
            animation: "fade",
            controlNav: "thumbnails"
        });
        
    });


})(jQuery);