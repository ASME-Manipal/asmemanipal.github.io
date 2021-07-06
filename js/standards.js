var $flagg = 0;
$(window).on("load", function () {
    $(window).scroll(function () {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".st1").each(function () {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                    $(".st1").addClass('st1-fadein');
                    $(".st2").addClass('st2-fadein');
                    $(".st3").addClass('st3-fadein');
                    $flagg = 1;
            }
        });
    }).scroll(); //invoke scroll-handler on page-load
});
