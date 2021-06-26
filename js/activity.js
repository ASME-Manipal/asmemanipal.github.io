var $flagg = 0;
$(window).on("load", function () {

    $(window).scroll(function () {
        

        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade2").each(function () {
            

            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();

            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                // if ($(this).css("opacity") == 0 && $flagg == 0) {
                    $(this).addClass('shake');
                    // $('.act-img').addClass('images');
                    // $('.left-p').addClass('left-para');
                    // $('.right-p').addClass('right-para');

                    $flagg = 1;
            }
        });
    }).scroll(); //invoke scroll-handler on page-load
});

var $flagg = 0;
$(window).on("load", function () {

    $(window).scroll(function () {
        

        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".events").each(function () {
            

            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();

            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                $('.activities-head').addClass('images-delay');

                    $('.events-img').addClass('images-delay');
                    $('.events-desc').addClass('left-para-delay');
                    setTimeout(function(){
                        $('.events .appear').delay(80000).addClass('slide-up1');
                    }, 1500);
                    $flagg = 1;
            }
        });
    }).scroll(); //invoke scroll-handler on page-load
});
//transition-delay
$(".events-desc .act-desc .heading .appear").each(function(index){
    $(this).css({
         'animation-delay' : (index*200) + 'ms'
    });
})

$(".compt-desc .act-desc .heading .appear").each(function(index){
    $(this).css({
         'animation-delay' : (index*200) + 'ms'
    });
})

$(".work-desc .act-desc .heading .appear").each(function(index){
    $(this).css({
         'animation-delay' : (index*200) + 'ms'
    });
})

$(".webinar-desc .act-desc .heading .appear").each(function(index){
    $(this).css({
         'animation-delay' : (index*200) + 'ms'
    });
})

var $flagg = 0;
$(window).on("load", function () {

    $(window).scroll(function () {
        

        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".events").each(function () {
            

            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();

            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)

                    $('.compt-img').addClass('images-delay');
                    $('.compt-desc').addClass('right-para-delay');
                    setTimeout(function(){
                        $('.compt .appear').addClass('slide-up1');
                    }, 1500);
                    

                    $flagg = 1;
            }
        });
    }).scroll(); //invoke scroll-handler on page-load
});

var $flagg = 0;
$(window).on("load", function () {

    $(window).scroll(function () {
        

        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".work").each(function () {
            

            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();

            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)

                    $('.work-img').addClass('images');
                    $('.work-desc').addClass('left-para');
                    $('.work .appear').addClass('slide-up1');


                    $flagg = 1;
            }
        });
    }).scroll(); //invoke scroll-handler on page-load
});


var $flagg = 0;
$(window).on("load", function () {

    $(window).scroll(function () {
        

        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".webinar").each(function () {
            

            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();

            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                // if ($(this).css("opacity") == 0 && $flagg == 0) {
                    $('.webinar-img').addClass('images2');
                    $('.webinar-desc').addClass('right-para2');
                    // $('.right-p2').addClass('right-para2');
                    $('.webinar .appear').addClass('slide-up1');


                    $flagg = 1;
                    
               // }



            }



            // else { //object goes out of view (scrolling up)
            //   if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
            // }
        });


    }).scroll(); //invoke scroll-handler on page-load
    

});
