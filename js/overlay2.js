$(document).ready(function () {
    // $('#toggle').click(function () {
    //     $(this).toggleClass('active');
    //     $('#overlay').toggleClass('open');
    // });
    // $("#fulloverlay a").on("click", function () {
    //     $('#toggle').toggleClass('active');
    //     $('#overlay').toggleClass('open');
    // });
    //     if ($('#toggle').hasClass('active')) {
    //         $('body').css('overflow','auto !important');
    //         $('body').css('position','fixed');
    //     }
    // let toggleOverlay = () => {
    //     $('#toggle').toggleClass('active');
    //     $('#overlay').toggleClass('open');
    //     $('body').toggleClass('no-scroll');
    //   }
    //   $("#toggle, .fulloverlay a").on("click", toggleOverlay);
    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
        $('body').toggleClass('no-scroll');
      });
    $("#fulloverlay a").on("click", function() {
        $('#toggle').toggleClass('active');
        $('#overlay').toggleClass('open');
        $('body').toggleClass('no-scroll');
     });
});
