$(window).on("load", function () {

  $(window).scroll(function () {
      

      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $('footer').each(function () {
          

          /* Check the location of each desired element */
          var objectBottom = $(this).offset().top + $(this).outerHeight();

          /* If the element is completely within bounds of the window, fade it in */
          if (objectBottom * 0.99 < windowBottom) { //object comes into view (scrolling down)
                 
                  $('.f-left').addClass('f-ani');
                  $('.f-bottom').addClass('f-ani');
                  $('.map').addClass('f-ani');

                  
          }
      });
  }).scroll(); //invoke scroll-handler on page-load
  
});