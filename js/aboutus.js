function splitScroll(){
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    duration: "100%",
    triggerElement: '.au-left',
    triggerHook: 0
  })
  .setPin('.au-left')
  .addTo(controller);}
splitScroll();

$(window).on("load", function () {
  $(window).scroll(function () {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $('.right-sec2').each(function () {
          /* Check the location of each desired element */
          var objectBottom = $(this).offset().top + $(this).outerHeight();
          /* If the element is completely within bounds of the window, fade it in */
          if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                  $('.under').addClass('underlined');
          }
      });
  }).scroll(); //invoke scroll-handler on page-load
});

if (window.chrome)
    $("[type=video\\\/mp4]").each(function()
    {$(this).attr('src', $(this).attr('src').replace(".mp4", "_c.mp4"));});
