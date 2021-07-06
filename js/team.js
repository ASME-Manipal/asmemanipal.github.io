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
  // const rightValue = Math.max(1200 - .35 * (topOffset - scrollTop), 1100);

  // if (rightValue < 1200) {
  //     $("h1").css("left", rightValue + "px");

  // }
  const rightValue = Math.max(80 - .05 * (topOffset - scrollTop), 60);
  const opacityValue = Math.max(0.0022 * (topOffset - scrollTop), 0);


  // if (rightValue < 80) {
      $(".h11").css("left", rightValue + "%");
      $(".h11").css("opacity", Math.max(opacityValue,0));

  // }
});

$(document).on("scroll", function () {
  const topOffset = $(".wrap").offset().top;
  const scrollTop = window.scrollY;
  // const rightValue = Math.max(300 - .35 * (topOffset - scrollTop), 200);

  // if (rightValue < 300) {
  //     $("h2").css("right", rightValue + "px");
  // }
  const rightValue = Math.max(40 - .05 * (topOffset - scrollTop), 20);
  const opacityValue = Math.max(0.0022 * (topOffset - scrollTop), 0);


  // if (rightValue < 20) {
      $(".h22").css("right", Math.min(rightValue, 40) + "%");
      $(".h22").css("opacity", Math.max(opacityValue,0));
      $(".h22").css("-moz-opacity", Math.max(opacityValue,0));
      $(".h22").css("-webkit-opacity", Math.max(opacityValue,0));

  // }
});

// $(document).on("scroll", function () {
//   const topOffset = $(".wrap").offset().top;
//   const scrollTop = window.scrollY;
//   console.log("value ", topOffset - scrollTop);

//   const rightValue = Math.max(500 - 1.2 * (topOffset - scrollTop), 0);
//   console.log("height ",rightValue);

//   // if (rightValue <= 500) {
//       $(".team-c").css("height", Math.min(rightValue, 500) + "px");

//   // }
//   // else {
//   //   $(".team-c").css("height: 550px !important");

//   // }

// });

$(document).on("scroll", function () {
  const topOffset = $(".wrap").offset().top;
  const scrollTop = window.scrollY;
  console.log("value ", topOffset - scrollTop);

  const rightValue = Math.max(64 - 0.15 * (topOffset - scrollTop), 0);
  console.log("height ",rightValue);

  // if (rightValue <= 500) {
      $(".team-c").css("height", Math.min(rightValue, 64) + "%");

  // }
  // else {
  //   $(".team-c").css("height: 550px !important");

  // }

});

$(document).on("scroll", function () {
  const topOffset = $(".wrap").offset().top;
  const scrollTop = window.scrollY;
  // const rightValue = Math.max(1200 - .35 * (topOffset - scrollTop), 1100);

  // if (rightValue < 1200) {
  //     $("h3").css("left", rightValue + "px");
  // }
  const rightValue = Math.max(80 - .05 * (topOffset - scrollTop), 60);
  const opacityValue = Math.max(0.0022 * (topOffset - scrollTop), 0);


  // if (rightValue < 80) {
      $(".h33").css("left", rightValue + "%");
      $(".h33").css("opacity", Math.max(opacityValue,0));

  // }

});

$('.wrap').css('height', $('h1').outerWidth() * 4)

//   $(function(){
//     $(window).scroll(function() {    //scroll event is bound to the window object
//         var $myDiv = $('#myDiv');    //create a jquery variable pointing to the div
//         var st = $(this).scrollTop();//capture the the number hidden pixels, from view above the scrollable area
//         $myDiv.height( st );         //increase the height of the div by the same, number of hidden pixels
//         if( st == 0 ) {              //this if is not neccessary but just hides div when height is zero
//             $myDiv.hide();
//         } else {
//             $myDiv.show();
//         }
//     })
//     .scroll();                     //Fire the scroll even when the page loads; without this the #myDiv would show
//                                    //even though it's height is zero per the css
// })
