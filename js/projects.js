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
                    setTimeout(function() {
                        $('.projects-inner').fadeOut(1000);
                    }, 2000); //
                    $flag = 1;
                }
            }
        });
    }).scroll(); //invoke scroll-handler on page-load
});
