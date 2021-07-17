
$(document).ready(function() {
//     $('body').css('overflow', 'hidden');
// setTimeout(function() {
//     $('body').css('overflow', 'scroll');
// }, 10000); // 5 seconds

'use strict';
 var c, currentScrollTop = 0,
     navbar = $('.navbar');
 $(window).scroll(function () {
    var a = $(window).scrollTop();
    var b = navbar.height();
    currentScrollTop = a;
    if (c < currentScrollTop && a > b + b) {
      navbar.addClass("scrollUp");
    } else if (c > currentScrollTop && !(a <= b)) {
      navbar.delay(100000).removeClass("scrollUp");
    }
    c = currentScrollTop;
   console.log(a);
});


setTimeout(function(){
  $('html, body')
  .css({
    'overflow': 'visible'
  })
},
// 17500);
10);


  $('video').each(function(){
if ($(this).is(":in-viewport")) {
$(this)[0].play();
} else {$(this)[0].pause();}
})
});
