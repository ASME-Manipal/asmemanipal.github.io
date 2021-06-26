var $flagg = 0;
$(window).on("load", function () {

    $(window).scroll(function () {
        

        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".blog-head").each(function () {
            

            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();

            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                $('.blog-head').addClass('blog-head-ani');
                $('.blog-vbc').addClass('blog-vbc-ani');
                // $('.sliderr .slide-track .slide img').addClass('b-img-ani');
                // $('.sliderr2 .slide-track-rev .slide img').addClass('b-img-ani');
                $('.sliderr').addClass('b-img-ani');
                $('.sliderr2').addClass('b-img-ani');

                    $flagg = 1;
            }
        });
    }).scroll(); //invoke scroll-handler on page-load
});