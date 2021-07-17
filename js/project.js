var $flag = 0;
$(window).on("load", function () {
    $(window).scroll(function () {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each(function () {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
            {    // if ($(this).css("opacity") == 0 && $flag == 0) {
                    $(this).addClass('shake');
                    // $(this).delay(2000).removeClass('p_fadeInUp');
                    // $(this).delay(2000).fadeOut(1000);
                    // $(this).delay(2000).removeClass('p_fadeInUp');
                    // $(this).addClass('p_fadeOut');
                    // $(this).delay(2000).removeClass('p_fadeInUp');
                    // $(this).addClass('p_fadeOut');
                    // $('#myProj').delay(2000).fadeOut('slow');
                    $flag = 1;
                }
            }
            // else { //object goes out of view (scrolling up)
            //   if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
            // }
        });
    }).scroll(); //invoke scroll-handler on page-load
});
