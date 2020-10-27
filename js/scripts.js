(function ($) {
  "use strict";
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
      this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length
        ? target
        : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  $("body").scrollspy({
    target: "#sideNav",
  });


  $(".collapse.show").each(function(){
    $(this).prev().find("svg").addClass("fa-minus").removeClass("fa-plus");
  });

  // Toggle plus minus icon on show hide of collapse element
  $(".collapse").on('show.bs.collapse', function(){
    $(this).prev().find("svg").removeClass("fa-plus").addClass("fa-minus");
  }).on('hide.bs.collapse', function(){
    $(this).prev().find("svg").removeClass("fa-minus").addClass("fa-plus");
  });
})(jQuery);

