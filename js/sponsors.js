var $flagg = 0;
$(window).on("load", function () {
    $(window).scroll(function () {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".sp-head").each(function () {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            var objectBottom1 = $(this).offset().top;
            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                    $(".c1").addClass('c11');
                    $(".c2").addClass('c22');
                    $(".i1").addClass('i11');
                    $(".i2").addClass('i22');
                    $(".sp-head").addClass('i11');
                    $(".snow").addClass('snowContainer');
                    $(".snowContainer").removeClass('snow');
                    $(".sponsors-title").addClass('sponsors-title-ani');
                    $(".sp-hr-before").addClass('sp-hr');
                    $flagg = 1;
            }
        });
    }).scroll(); //invoke scroll-handler on page-load
});
