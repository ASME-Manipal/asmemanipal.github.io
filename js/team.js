/* meet the team side heading */
$(window).on("load", function () {
  $(window).scroll(function () {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $('.members').each(function () {
          /* Check the location of each desired element */
          var objectBottom = $(this).offset().top + $(this).outerHeight();
          /* If the element is completely within bounds of the window, fade it in */
          if ($(this).offset().top < windowBottom) { //object comes into view (scrolling down)
                  $('.t-head').addClass('t-animation');}
      });
  }).scroll(); //invoke scroll-handler on page-load
});

/* fade in images */
/* meet the team side heading */
$(window).on("load", function () {
  $(window).scroll(function () {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $('.fadein-team').each(function () {
          /* Check the location of each desired element */
          var objectBottom = $(this).offset().top + $(this).outerHeight();
          /* If the element is completely within bounds of the window, fade it in */
          if ($(this).offset().top < windowBottom) { //object comes into view (scrolling down)
                  $('.members').addClass('mytable');}
      });
  }).scroll(); //invoke scroll-handler on page-load
});

$(document).on("scroll", function () {
  const topOffset = $(".wrap").offset().top;
  const scrollTop = window.scrollY;
  const rightValue = Math.max(80 - .05 * (topOffset - scrollTop), 60);
  const opacityValue = Math.max(0.0022 * (topOffset - scrollTop), 0);
      $(".h11").css("left", rightValue + "%");
      $(".h11").css("opacity", Math.max(opacityValue,0));
});

$(document).on("scroll", function () {
  const topOffset = $(".wrap").offset().top;
  const scrollTop = window.scrollY;
  const rightValue = Math.max(40 - .05 * (topOffset - scrollTop), 20);
  const opacityValue = Math.max(0.0022 * (topOffset - scrollTop), 0);
      $(".h22").css("right", Math.min(rightValue, 40) + "%");
      $(".h22").css("opacity", Math.max(opacityValue,0));
      $(".h22").css("-moz-opacity", Math.max(opacityValue,0));
      $(".h22").css("-webkit-opacity", Math.max(opacityValue,0));
});


$(document).on("scroll", function () {
  const topOffset = $(".wrap").offset().top;
  const scrollTop = window.scrollY;
  console.log("value ", topOffset - scrollTop);
  const rightValue = Math.max(64 - 0.15 * (topOffset - scrollTop), 0);
  console.log("height ",rightValue);
      $(".team-c").css("height", Math.min(rightValue, 50) + "vh");
});

$(document).on("scroll", function () {
  const topOffset = $(".wrap").offset().top;
  const scrollTop = window.scrollY;
  const rightValue = Math.max(80 - .05 * (topOffset - scrollTop), 60);
  const opacityValue = Math.max(0.0022 * (topOffset - scrollTop), 0);
      $(".h33").css("left", rightValue + "%");
      $(".h33").css("opacity", Math.max(opacityValue,0));
});

$('.wrap').css('height', $('h1').outerWidth() * 4)
