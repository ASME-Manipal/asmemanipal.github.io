<!-- <script id="rendered-js">
  var $slider = $('.slideshow .slider'),
      maxItems = $('.item', $slider).length,
      dragging = false,
      tracking,
      rightTracking;

  $sliderRight = $('.slideshow').clone().addClass('slideshow-right').appendTo($('.split-slideshow'));

  rightItems = $('.item', $sliderRight).toArray();
  reverseItems = rightItems.reverse();
  $('.slider', $sliderRight).html('');
  for (i = 0; i < maxItems; i++) {
      if (window.CP.shouldStopExecution(0)) break;
      $(reverseItems[i]).appendTo($('.slider', $sliderRight));
  } window.CP.exitedLoop(0);

  var $flagg = 0;
$(window).on("load", function () {

  $(window).scroll(function () {



      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".projects").each(function () {


          /* Check the location of each desired element */
          var objectBottom = $(this).offset().top + $(this).outerHeight();

          /* If the element is completely within bounds of the window, fade it in */
          if ($(this).offset().top < windowBottom) { //object comes into view (scrolling down)
              $(".slideshow-left").slick('slickPlay');


                  $flagg = 1;
          }
      });
  }).scroll(); //invoke scroll-handler on page-load
});
  $slider.addClass('slideshow-left');
  $('.slideshow-left').slick({
      autoplay: false,
      autoplaySpeed: 1000,
      vertical: true,
      verticalSwiping: true,
      arrows: false,
      infinite: true,
      dots: true,
      speed: 500,
      pauseOnHover: false,
      pauseOnFocus: false,
      withInertia: true,
      freeModeMomentumRatio: 5,
      grabCursor: true,
      //   prevArrow: '<div class="slick-prev">prev</div>',
      //     nextArrow: '<div class="slick-next">next</div>',
      cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
  }).
      on('beforeChange', function (event, slick, currentSlide, nextSlide) {

          if (currentSlide > nextSlide && nextSlide == 0 && currentSlide == maxItems - 1) {
              $('.slideshow-right .slider').slick('slickGoTo', -1);
              $('.slideshow-text').slick('slickGoTo', maxItems);
          } else if (currentSlide < nextSlide && currentSlide == 0 && nextSlide == maxItems - 1) {
              $('.slideshow-right .slider').slick('slickGoTo', maxItems);
              $('.slideshow-text').slick('slickGoTo', -1);
          } else {
              $('.slideshow-right .slider').slick('slickGoTo', maxItems - 1 - nextSlide);
              $('.slideshow-text').slick('slickGoTo', nextSlide);
          }
      }).on("mousewheel", function (event) {
          event.preventDefault();
          if (event.deltaX > 0 || event.deltaY < 0) {
              $(this).slick('slickNext');
          } else if (event.deltaX < 0 || event.deltaY > 0) {
              $(this).slick('slickPrev');
          };
      }).on('mousedown touchstart', function () {
          dragging = true;
          tracking = $('.slick-track', $slider).css('transform');
          tracking = parseInt(tracking.split(',')[5]);
          rightTracking = $('.slideshow-right .slick-track').css('transform');
          rightTracking = parseInt(rightTracking.split(',')[5]);
      }).on('mousemove touchmove', function () {
          if (dragging) {
              newTracking = $('.slideshow-left .slick-track').css('transform');
              newTracking = parseInt(newTracking.split(',')[5]);
              diffTracking = newTracking - tracking;
              $('.slideshow-right .slick-track').css({ 'transform': 'matrix(1, 0, 0, 1, 0, ' + (rightTracking - diffTracking) + ')' });
          }
      }).on('mouseleave touchend mouseup', function () {
          dragging = false;
      });

  $('.slideshow-right .slider').slick({
      swipe: false,
      vertical: true,
      arrows: true,
      infinite: true,
      speed: 500,
      cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
      initialSlide: maxItems - 1,
      grabCursor: true,

  });

  $('.slideshow-text').slick({
      swipe: false,
      vertical: true,
      arrows: true,
      infinite: true,
      speed: 500,
      cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
      grabCursor: true,

  });
//# sourceURL=pen.js
</script> -->
