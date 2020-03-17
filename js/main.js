(function ($) {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });

  $('a[href^="#"]').on("click", function (evt) {
    evt.preventDefault();
    if ($(this).attr("href") === "none") {
      return;
    }
    let anchor = $(this).attr("href");

    $('html, body').animate({
      scrollTop: $(anchor).offset().top - 80
    }, 1000, 'easeOutExpo');
  });

  $(".navbar-collapse a").on('click', function () {
    $(".navbar-collapse").removeClass('in');
    $(".navbar-collapse").addClass('collapse');
  });

  // fancybox
  $(".fancybox").fancybox();

  //parallax
  var isMobile = false;
  if (Modernizr.mq('only all and (max-width: 1024px)')) {
    isMobile = true;
  }
  if (isMobile == false && ($('#parallax1').length || isMobile == false && $('#parallax2').length)) {
    $(window).stellar({
      responsive: true,
      scrollProperty: 'scroll',
      parallaxElements: false,
      horizontalScrolling: false,
      horizontalOffset: 0,
      verticalOffset: 0
    });
  }

  // //nicescroll
  // $("html").niceScroll({
  //   zindex: 999,
  //   cursorborder: "",
  //   cursorborderradius: "2px",
  //   cursorcolor: "#191919",
  //   cursoropacitymin: .5
  // });

  // function initNice() {
  //   if ($(window).innerWidth() <= 960) {
  //     $('html').niceScroll().remove();
  //   } else {
  //     $("html").niceScroll({
  //       zindex: 999,
  //       cursorborder: "",
  //       cursorborderradius: "2px",
  //       cursorcolor: "#191919",
  //       cursoropacitymin: .5
  //     });
  //   }
  // }

  Holder.addTheme("dark", {
    bg: "#000",
    fg: "#aaa",
    size: 11,
    font: "Monaco",
    fontweight: "normal"
  });

  $(window).load();
  $(window).resize();

})(jQuery);

$(window).load(function () {
  // portfolio
  // if ($('.isotopeWrapper').length) {

  //   var $container = $('.isotopeWrapper');
  //   var $resize = $('.isotopeWrapper').attr('id');
  //   // initialize isotope

  //   $container.isotope({
  //     itemSelector: '.isotopeItem',
  //     resizable: false, // disable normal resizing
  //     masonry: {
  //       columnWidth: $container.width() / $resize
  //     }

  //   });

  //   $('#filter a').click(function () {

  //     $('#filter a').removeClass('current');
  //     $(this).addClass('current');
  //     var selector = $(this).attr('data-filter');
  //     $container.isotope({
  //       filter: selector,
  //       animationOptions: {
  //         duration: 1000,
  //         easing: 'easeOutQuart',
  //         queue: false
  //       }
  //     });
  //     return false;
  //   });


  //   $(window).smartresize(function () {
  //     $container.isotope({
  //       // update columnWidth to a percentage of container width
  //       masonry: {
  //         columnWidth: $container.width() / $resize
  //       }
  //     });
  //   });
  // }
});