var $flagg = 0;
$(window).on("load", function () {

    $(window).scroll(function () {
        

        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".d1").each(function () {
            

            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();

            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                    $(".d1").addClass('d11');
                    $(".d2").addClass('d22');
                    $(".d3").addClass('d33');
                    $(".d4").addClass('d44');
                    $(".d5").addClass('d56');
                    $(".d6").addClass('d56');

                    $flagg = 1;
            }
        });
    }).scroll(); //invoke scroll-handler on page-load
    
});