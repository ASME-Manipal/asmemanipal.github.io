jQuery(document).ready(function ($) {

  $('#customers-testimonials').owlCarousel({
    nav: true,
    navText: ['<img class="nav-prev" src="images/right.png" height="50em" style="transform:  rotate(180deg);">', '<img class="nav-next" src="images/right.png" height="50em">'],
    items: 3,
    loop: true,
    center: true,
     autoplay: true,
    autoplayTimeout: 8000,
    responsive: {
      100: { items: 1 },
      768: { items: 2 },
      1170: { items: 3 },
    },
    touchDrag: false,
    mouseDrag: false,
    smartSpeed: 300
  });

  $('#customers-testimonials2').owlCarousel({
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    loop: true,
    center: true,
    items: 1,
    margin: 30,
    autoplay: true,
    dots: true,
    nav: true,
    navText: false,
    autoplayTimeout: 8000,
    smartSpeed: 2000,
    touchDrag: false,
    mouseDrag: false,

  });

//   var owl1 = $('#customers-testimonials');
//   var owl2 = $('#customers-testimonials2');


//   $('.testimonials').on("mouseenter", function(e) {
//     owl.trigger('autoplay.play.owl1', 7000);
//     //Not owl.trigger('play.owl.autoplay', [1000]);
// })

// $('.testimonials').on("mouseenter", function(e) {
//   owl.trigger('autoplay.play.owl2', 7000);
//   //Not owl.trigger('play.owl.autoplay', [1000]);
// })



  // jQuery('.more').readmore({
  //   speed: 300,
  //   collapsedHeight: 70,
  //   moreLink: '<a href="#" class="more e1" onclick="return change(this)" style="color: white; text-decoration:none"> + </a>',
  //   lessLink: '<a href="#" class="more" style="color: white; text-decoration:none"> - </a>',
  //   heightMargin: 16
  // });

  // jQuery('.more2').readmore({
  //   speed: 300,
  //   collapsedHeight: 70,
  //   moreLink: '<a href="#" class="more2" style="color: white; text-decoration:none"> + </a>',
  //   lessLink: '<a href="#" class="more" style="color: white; text-decoration:none"> - </a>',
  //   heightMargin: 16
  // });
  // jQuery('.more3').readmore({
  //   speed: 300,
  //   collapsedHeight: 70,
  //   moreLink: '<a href="#" class="more3" style="color: white; text-decoration:none"> + </a>',
  //   lessLink: '<a href="#" class="more" style="color: white; text-decoration:none"> - </a>',
  //   heightMargin: 16
  // });



  

  $('.owl-carousel').find('.owl-nav').removeClass('disabled');
  $('.owl-carousel').on('changed.owl.carousel', function (event) {
    $(this).find('.owl-nav').removeClass('disabled');
  });
});

  
function change(el) {
  el.innerHTML = "new_text";
}



var o1 = $('#customers-testimonials'), o2 = $('#customers-testimonials2');

//Sync o2 by o1
o1.on('click', '.owl-next', function () {
  o2.trigger('next.owl.carousel')
});
o1.on('click', '.owl-prev', function () {
  o2.trigger('prev.owl.carousel')
});
//Sync o1 by o2
o2.on('click', '.owl-next', function () {
  o1.trigger('next.owl.carousel')
});
o2.on('click', '.owl-prev', function () {
  o1.trigger('prev.owl.carousel')
});


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//animations

// var $flag = 0;
// $(window).on("load", function () {

//     $(window).scroll(function () {
        

//         var windowBottom = $(this).scrollTop() + $(this).innerHeight();
//         $(".testimonials").each(function () {
            
//             var objectBottom = $(this).offset().top + $(this).outerHeight();

//             /* If the element is completely within bounds of the window, fade it in */
//             if (objectBottom < windowBottom) { //object comes into view (scrolling down)
//             {    // if ($(this).css("opacity") == 0 && $flag == 0) {
//               $('.testi-head').addClass('testi-head-ani');
//               setTimeout(function(){
//                  $('.testi-head').css('opacity','1');
//               }, 1000);

//                     $('.avatar1').addClass('avatar1-ani');
//                     setTimeout(function(){
//                        $('.avatar1').css('opacity','1');
//                     }, 2000);
//                     $('.avatar3').addClass('avatar3-ani');
//                     setTimeout(function(){
//                       $('.avatar3').css('opacity','1');
//                    }, 500);
//                     $('.avatar2').addClass('avatar2-ani');
//                     setTimeout(function(){
//                       $('.avatar2').css('opacity','1');
//                    }, 1000);

//                    $('.t-name').addClass('title-ani');
//                     setTimeout(function(){
//                       $('.t-name').css('opacity','1');
//                    }, 2000);
//                    $('.t-pos').addClass('title-ani');
//                     setTimeout(function(){
//                       $('.t-pos').css('opacity','1');
//                    }, 2000);


//                    $('.more').addClass('more-ani');
//                     setTimeout(function(){
//                       $('.more').css('opacity','1');
//                    }, 2000);
//                    $('.more2').addClass('more-ani');
//                     setTimeout(function(){
//                       $('.more2').css('opacity','1');
//                    }, 2000);
//                    $('.more3').addClass('more-ani');
//                     setTimeout(function(){
//                       $('.more3').css('opacity','1');
//                    }, 2000);

//                    $('.nav-prev').addClass('dots-ani-prev');
//                     setTimeout(function(){
//                       $('.nav-prev').css('opacity','1');
//                    }, 2000);
//                    $('.nav-next').addClass('dots-ani');

//                    setTimeout(function(){
//                     $('.nav-next').css('opacity','1');
//                  }, 2000);


                    
//                     $flag = 1;
                    
//                 }



//             }

//         });


//     }).scroll(); //invoke scroll-handler on page-load
    

// });