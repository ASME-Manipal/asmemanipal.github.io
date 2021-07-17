 $(document).ready(function () {
  $('#menu-toggle, #right>a').click(function (e) {
    var $toggle = $(this);
    var $menu = $('#' + $(this).attr('aria-controls'));

    if ($menu.attr('aria-hidden') == 'true') {
      $('.overlay').addClass('open');
      $menu.attr('aria-hidden', 'false');
      $toggle.attr('aria-expanded', 'true');
      document.getElementById("mySidenav").style.width = "100%";
      //document.getElementsByClassName("overlay open").style.overflow = "hidden";
      document.body.scroll = "no";

    }
    else if ($menu.attr('aria-hidden') == 'false') {
      $('.overlay').removeClass('open');
      $menu.attr('aria-hidden', 'true');
      $toggle.attr('aria-expanded', 'faremove');
      document.getElementById("mySidenav").style.width = "0";
      //document.getElementsByClassName("overlay open").style.overflow = "scroll";
      document.body.scroll = "yes";
    }

    $("#right a").on("click", function() {
      $('.overlay').removeClass('open');
          $menu.attr('aria-hidden', 'true');
          $toggle.attr('aria-expanded', 'faremove');
          document.getElementById("mySidenav").style.width = "0".slow();
          document.body.style.overflow = 'scroll';
          document.body.scroll = "yes";
    });
  });
});
