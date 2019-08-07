(function ($) {
  "use strict";

  // *** On ready *** //
  $(document).on("ready", function () {
    responsiveClasses();
    dataCustomOptions();
    fitVideos();
    scrollProgress();
    fullscreenSection();
    bannerScrollEffect();
    imageBG();
    BGVideoYTPlayer();
    mobileMenu();
    superfishMenu();
    onePageNav();
    stickyNav();
    bannerSlider();
    ProjectSingleShare();
    introAboutSlider();
    counterStats();
    featuredProjectsSlider();
    testmonialsSlider();
    clientsSlider();
    sliderImageBG();
    optimizeSliderImageBG();
    lightboxImage();
    lightboxGallery();
    lightboxIframe();
    registerFormValidation();
  });

  // *** On load *** //
  $(window).on("load", function () {
    websiteLoading();
    sliderImageBG();
    parallaxStellar();
  });

  // *** On resize *** //
  $(window).on("resize", function () {
    optimizeSliderImageBG();
    responsiveClasses();
    fullscreenSection();
    parallaxStellar();
  });

  // *** On scroll *** //
  $(window).on("scroll", function () {
    scrollProgress();
    bannerScrollEffect();
    stickyNav();
    scrollTopButton();
  });

  // *** On Scroll In On load *** //
  $(window).on("load", function () {
    $(window).on("scroll", function () { });
  });

  // *** jQuery noConflict *** //
  var $ = jQuery.noConflict();

  // *** General Variables *** //
  var $window = $(window),
    $this = $(this),
    $body = $("body");

  // *** Data Custom Options *** //
  function dataCustomOptions() {
    $("*[data-pattern-overlay-darkness-opacity]").each(function () {
      var a = $(this).data("pattern-overlay-darkness-opacity");
      $(this).css("background-color", convertHex("#000000", a));
    }),
      $("*[data-pattern-overlay-background-image]").each(function () {
        "none" == $(this).data("pattern-overlay-background-image")
          ? $(this).css("background-image", "none")
          : "yes" == $(this).data("pattern-overlay-background-image") &&
          $(this).css("background-image");
      }),
      $("*[data-remove-pattern-overlay]").each(function () {
        "yes" == $(this).data("remove-pattern-overlay") &&
          $(this).css("background", "none");
      }),
      $("*[data-bg-color]").each(function () {
        var a = $(this).data("bg-color");
        $(this).css("background-color", a);
      }),
      $("*[data-bg-color-opacity]").each(function () {
        var a = $(this).data("bg-color-opacity"),
          b = $(this).css("background-color"),
          c = b.replace("rgb", "rgba").replace(")", ", " + a + ")");
        $(this).css("background-color", c);
      }),
      $("*[data-bg-img]").each(function () {
        var a = $(this).data("bg-img");
        $(this).css("background-image", "url('" + a + "')");
      }),
      $("*[data-parallax-bg-img]").each(function () {
        var a = $(this).data("parallax-bg-img");
        $(this).css(
          "background-image",
          "url('./images/files/parallax-bg/" + a + "')"
        );
      });
  }

  // *** Responsive Classes *** //
  function responsiveClasses() {
    var jRes = jRespond([
      {
        label: "smallest",
        enter: 0,
        exit: 479
      },
      {
        label: "handheld",
        enter: 480,
        exit: 767
      },
      {
        label: "tablet",
        enter: 768,
        exit: 991
      },
      {
        label: "laptop",
        enter: 992,
        exit: 1199
      },
      {
        label: "desktop",
        enter: 1200,
        exit: 10000
      }
    ]);
    jRes.addFunc([
      {
        breakpoint: "desktop",
        enter: function () {
          $body.addClass("device-lg");
        },
        exit: function () {
          $body.removeClass("device-lg");
        }
      },
      {
        breakpoint: "laptop",
        enter: function () {
          $body.addClass("device-md");
        },
        exit: function () {
          $body.removeClass("device-md");
        }
      },
      {
        breakpoint: "tablet",
        enter: function () {
          $body.addClass("device-sm");
        },
        exit: function () {
          $body.removeClass("device-sm");
        }
      },
      {
        breakpoint: "handheld",
        enter: function () {
          $body.addClass("device-xs");
        },
        exit: function () {
          $body.removeClass("device-xs");
        }
      },
      {
        breakpoint: "smallest",
        enter: function () {
          $body.addClass("device-xxs");
        },
        exit: function () {
          $body.removeClass("device-xxs");
        }
      }
    ]);
  }

  // *** Counter Stats *** //
  function counterStats() {
    $(".counter-stats").each(function () {
      var a = $(this),
        b = a.text(),
        c = b
          .toString()
          .replace(
            /(\d)/g,
            "<span class='digit'><span class='digit-value'>$1</span></span>"
          );
      a.html(c + "<div class='main'>" + b + "</span>"),
        a.find(".digit").each(function () {
          var a = $(this),
            b = a.find(".digit-value").text();
          a.append(
            "<div class='counter-animator' data-value='" +
            b +
            "'><ul><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li></ul></div>"
          );
        });
    }),
      $(".counter-stats").each(function (a) {
        var b = $(this);
        new Waypoint({
          element: b,
          handler: function (c) {
            setTimeout(function () {
              setTimeout(function () {
                $(window).width() > 1 &&
                  b.find(".counter-animator").each(function () {
                    var a = $(this),
                      b = 10 * a.data("value");
                    a.find("ul").css({
                      transform: "translateY(-" + b + "%)",
                      "-webkit-transform": "translateY(-" + b + "%)",
                      "-moz-transform": "translateY(-" + b + "%)",
                      "-ms-transform": "translateY(-" + b + "%)",
                      "-o-transform": "translateY(-" + b + "%)"
                    });
                  });
              }, 0 * a);
            }, 0);
          },
          offset: "90%"
        });
      });
  }

  // *** RTL Case *** //
  var HTMLDir = $("html").css("direction"),
    owlRtl;

  // If page is RTL
  if (HTMLDir == "rtl") {
    // Owl Carousel
    owlRtl = true;
  } else {
    owlRtl = false;
  }

  // *** Website Loading *** //
  function websiteLoading() {
    $("#website-loading")
      .find(".loader")
      .delay(0)
      .fadeOut(500);
    $("#website-loading")
      .delay(600)
      .fadeOut(300);
  }

  // *** Fit Videos *** //
  function fitVideos() {
    $("#full-container").fitVids();
  }

  // *** Image Background *** //
  function imageBG() {
    $(".img-bg").each(function () {
      var imgSrc = $(this)
        .find("img")
        .attr("src");
      $(this).css("background-image", "url('" + imgSrc + "')");
      $(this)
        .find("img")
        .css({ opacity: 0, visibility: "hidden" });
    });
  }

  // *** Fullscreen Section *** //
  function fullscreenSection() {
    $(".fullscreen").css("height", $(window).height());
    $("#banner.fullscreen").css(
      "height",
      $(window).height() - $("#header").height()
    );
  }

  // *** Scroll Progress *** //
  function scrollProgress() {
    var docheight = $(document).height();
    var winheight = $(window).height();
    var height = docheight - winheight;
    var scroll = $(document).scrollTop();
    var scrollperc = scroll / (height / 100);
    $("#scroll-progress").width(scrollperc + "%");
    $(".scroll-percent").text(scrollperc.toFixed(0) + "%");
  }

  // *** Scroll Top Button *** //
  function scrollTopButton() {
    var windowScroll = $(window).scrollTop();
    if ($(window).scrollTop() > 800) {
      $(".scroll-top").addClass("show");
    } else {
      $(".scroll-top").removeClass("show");
    }
  }

  $(".scroll-top, .scroll-top-btn").click(function (e) {
    e.preventDefault();
    console.log("button clicked....");
    $("html, body").animate(
      {
        scrollTop: 0
      },
      1200,
      "easeInOutExpo"
    ); //1200 easeInOutExpo
  });

  // *** Stellar Parallax *** //
  function parallaxStellar() {
    $(function () {
      if (
        $body.hasClass("device-lg") ||
        $body.hasClass("device-md") ||
        $body.hasClass("device-sm")
      ) {
        $.stellar({
          horizontalScrolling: false, // don't change this option
          // verticalScrolling: false,
          verticalOffset: 0,
          responsive: true // false
        });
      }
    });
  }

  // *** Mobile Menu *** //
  function mobileMenu() {
    // Cloning Main Menu to Mobile Menu
    $("#main-menu")
      .clone()
      .appendTo("#mobile-menu")
      .removeClass()
      .addClass("mobile-menu");

    // For Scroll Purpose
    var mobMenuScroll = document.querySelector("#mobile-menu");
    SimpleScrollbar.initEl(mobMenuScroll);

    // Dropdown
    $(".mobile-menu").superfish({
      popUpSelector: "ul, .megamenu",
      cssArrows: true,
      delay: 300,
      speed: 150,
      speedOut: 150,
      animation: { opacity: "show", height: "show" }, //  , height : "show"
      animationOut: { opacity: "hide", height: "hide" }
    });

    // Toggle Mobile Menu
    $(".mobile-menu-btn").on("click", function (e) {
      e.preventDefault();
      $(this).toggleClass("is-active");
      $(this)
        .nextAll("#mobile-menu")
        .stop()
        .slideToggle(250);
    });
  }

  // *** Dropdown Menu *** //
  function superfishMenu() {
    // Firing Superfish plugin
    $(".main-menu").superfish({
      popUpSelector: "ul",
      cssArrows: true,
      delay: 300,
      speed: 100,
      speedOut: 100,
      animation: { opacity: "show" }, //  , height : "show"
      animationOut: { opacity: "hide" }
    });
  }

  // *** One Page Nav *** //
  function onePageNav() {
    var headerStickyCases = $("#header").hasClass("style-1"),
      offsetDifference = !headerStickyCases ? 0 : 80;

    $.scrollIt({
      upKey: false,
      downKey: false,
      scrollTime: 0,
      activeClass: "current",
      onPageChange: null,
      topOffset: -offsetDifference
    });

    $("#main-menu li a, .scroll-to").on("click", function (e) {
      e.preventDefault();
      var $anchor = $(this);

      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - offsetDifference
          },
          1200,
          "easeInOutExpo"
        );

      var classCases =
        $body.hasClass("device-md") ||
        $body.hasClass("device-sm") ||
        $body.hasClass("device-xs") ||
        $body.hasClass("device-xxs");

      if (classCases) {
        $("#mobile-menu, .mobile-menu-sticky").slideUp(250);
        $(".mobile-menu-btn").removeClass("is-active");
      }
    });
  }

  // *** Sticky Nav *** //
  function stickyNav() {
    var headerTopDistance = $("#header").offset().top,
      windowScroll = $(window).scrollTop(),
      header = $("#header"),
      headerStickyHeight = parseInt($("#header-sticky").height(), 10),
      headerHeight = parseInt($("#header").height(), 10),
      bannerHeight = parseInt($(".banner-parallax").height(), 10),
      pageTitleHeight = parseInt($("#page-title").height(), 10);

    if (header.hasClass("style-1") || header.hasClass("style-2")) {
      if (windowScroll > header.offset().top) {
        header.addClass("sticky");
      } else {
        header.removeClass("sticky");
      }
    }
  }

  // *** Banner Slider *** //
  function bannerSlider() {
    var bannerSlider = $(".banner-slider > .owl-carousel");
    bannerSlider.owlCarousel({
      items: 1,
      rtl: owlRtl,
      autoplay: true,
      autoplaySpeed: 800, // Sliding autoplay speed
      autoplayTimeout: 4000, // Autoplay interval timeout.
      dragEndSpeed: 600, // Sliding speed by mouse drag
      autoplayHoverPause: true, // Stop autoplay on mouse hover
      loop: true,
      slideBy: 1, // Number of item are slided for each one transition
      margin: 10, // space between each item. Very useful!
      stagePadding: 0, // This used to see part of left an right items as preview style
      nav: true, // show prev and next buttons
      dots: true, // Show dots navigation
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>'
      ], // prev and next buttons content
      responsive: {
        0: {
          // items : 1
        },
        480: {
          // items : 2
        },
        768: {
          // items : 3
        }
      },
      autoHeight: false,
      autoWidth: false,
      animateOut: "owl-fadeUp-out",
      animateIn: "owl-fadeUp-in",
      navRewind: true,
      center: false, // It's used to make the carousel start from the centered item
      dotsEach: 1, // Number of items per dot
      dotData: false,
      lazyLoad: false, // img tag needs class="owl-lazy" and data-src="url-to-img" or/and data-src-retina="url-to-highres-img"
      smartSpeed: 600, // Sliding speed when hover next or prev nav
      fluidSpeed: 5000,
      navSpeed: 600,
      // fallbackEasing: "ease-in-out",
      dotsSpeed: 600 // Sliding speed by using dots
    });

    bannerSlider.on("translated.owl.carousel", function (a) {
      var b = bannerSlider.find(".owl-item.active .banner-center-box"),
        c = parseInt(b.children("h1, .description, .btn").css("top"), 10);
      0 != c &&
        (console.log("It's the next...."),
          console.log("Same Slide!"),
          setTimeout(function () {
            setTimeout(function () {
              b.children("h1, .separator-dots")
                .css("top", 100)
                .animate({ opacity: 1 }, { duration: 400, queue: !1 })
                .animate({ top: 0 }, { duration: 600, easing: "easeOutExpo" });
            }, 0),
              setTimeout(function () {
                b.children(".description")
                  .css("top", 100)
                  .animate({ opacity: 1 }, { duration: 400, queue: !1 })
                  .animate({ top: 0 }, { duration: 600, easing: "easeOutExpo" });
              }, 100),
              setTimeout(function () {
                b.children(".btn")
                  .css("top", 100)
                  .animate({ opacity: 1 }, { duration: 400, queue: !1 })
                  .animate({ top: 0 }, { duration: 600, easing: "easeOutExpo" });
              }, 200);
          }, 150));
    }),
      bannerSlider.on("drag.owl.carousel", function (a) {
        bannerSlider
          .find(".owl-item:not( .active )")
          .find(".banner-center-box > *")
          .animate({ opacity: 0 }, 150)
          .css("top", 1);
      }),
      bannerSlider.on("changed.owl.carousel", function (a) {
        bannerSlider
          .find(".banner-center-box > *")
          .animate({ opacity: 0 }, 150)
          .css("top", 1);
      }),
      bannerSlider.on("resized.owl.carousel", function (a) {
        bannerSlider
          .find(".banner-center-box > *")
          .animate({ opacity: 1 }, 150);
      });
  }

  // *** Banner Scroll Effect *** //
  function bannerScrollEffect() {
    var scrollingDistance = $(window).scrollTop(),
      banHeadVertDistance = $("#banner").height() + $("#header").height();

    if (
      $body.hasClass("device-lg") ||
      $body.hasClass("device-md") ||
      $body.hasClass("device-sm")
    ) {
      // Move Scroll Effect
      // if ( scrollingDistance > 120 ) {
      //   if (scrollingDistance < banHeadVertDistance) {
      //     $(".slide-content").css({
      //       transform: "translateY(" + scrollingDistance * 0.3 + "px)"
      //     });
      //   }
      // }
      // Opacity Scroll Effect
      //   if (scrollingDistance < banHeadVertDistance) {
      //     $(".slide-content").css({
      //       opacity: 1 - (scrollingDistance - 150) / 250
      //     });
      //   }
    }
  }

  // *** Slider Image BG *** //
  function sliderImageBG() {
    $(".slider-img-bg .owl-item > li").each(function () {
      var imgSrc = $(this)
        .find(".slide")
        .children("img")
        .attr("src");
      $(this).css({
        "background-image": "url('" + imgSrc + "')",
        "background-color": "#ccc",
        "background-position": "top center",
        "background-size": "cover",
        "background-repeat": "no-repeat"
      });
    });
  }

  // *** Optimize Slider Image BG *** //
  function optimizeSliderImageBG() {
    $(".slider-img-bg").each(function () {
      var imgHeight = $(this)
        .closest("div")
        .height();

      if ($(".banner-parallax").children(".banner-slider").length > 0) {
        $(".banner-parallax").height($(".banner-slider").height());
      }

      $(this)
        .find(".owl-item > li .slide")
        .children("img")
        .css({
          display: "block",
          height: imgHeight,
          opacity: 0
        });
    });
  }

  // *** Background Videos *** //
  function BGVideoYTPlayer() {
    $(".video-background").each(function () {
      $(this).YTPlayer({
        mute: false,
        autoPlay: true,
        opacity: 1,
        containment: ".video-background",
        showControls: false,
        startAt: 0,
        addRaster: true,
        showYTLogo: false,
        stopMovieOnBlur: false
      });
    });
  }

  // *** Intro About Slider *** //
  function introAboutSlider() {
    var introAboutSlider = $(".intro-about-slider > .owl-carousel");
    introAboutSlider.owlCarousel({
      // items: 3,
      rtl: owlRtl,
      autoplay: true,
      autoplaySpeed: 600, // Sliding autoplay speed
      autoplayTimeout: 3000, // Autoplay interval timeout.
      dragEndSpeed: 400, // Sliding speed by mouse drag
      autoplayHoverPause: true, // Stop autoplay on mouse hover
      loop: true,
      slideBy: 1, // Number of item are slided for each one transition
      margin: 30, // space between each item. Very useful!
      stagePadding: 0, // This used to see part of left an right items as preview style
      nav: false, // show prev and next buttons
      dots: false, // Show dots navigation
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>'
      ], // prev and next buttons content
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 1
        },
        768: {
          items: 2
        },
        1200: {
          items: 3
        }
      },
      autoHeight: false,
      autoWidth: false,
      // animateOut: 'goDownOut',
      // animateIn: 'goDownIn',
      navRewind: true,
      center: false, // It's used to make the carousel start from the centered item
      dotsEach: 1, // Number of items per dot
      dotData: false,
      lazyLoad: false, // img tag needs class="owl-lazy" and data-src="url-to-img" or/and data-src-retina="url-to-highres-img"
      smartSpeed: 600, // Sliding speed when hover next or prev nav
      fluidSpeed: 5000,
      navSpeed: 400,
      // fallbackEasing: "ease-in-out",
      dotsSpeed: 400 // Sliding speed by using dots
    });
  }

  // *** Featured Projects Slider *** //
  function featuredProjectsSlider() {
    var featuredProjectsSlider = $(".featured-projects-slider > .owl-carousel");
    featuredProjectsSlider.owlCarousel({
      // items: 3,
      rtl: owlRtl,
      autoplay: true,
      autoplaySpeed: 600, // Sliding autoplay speed
      autoplayTimeout: 3000, // Autoplay interval timeout.
      dragEndSpeed: 400, // Sliding speed by mouse drag
      autoplayHoverPause: true, // Stop autoplay on mouse hover
      loop: true,
      slideBy: 1, // Number of item are slided for each one transition
      margin: 30, // space between each item. Very useful!
      stagePadding: 0, // This used to see part of left an right items as preview style
      nav: false, // show prev and next buttons
      dots: false, // Show dots navigation
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>'
      ], // prev and next buttons content
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 1
        },
        768: {
          items: 2
        },
        1200: {
          items: 3
        }
      },
      autoHeight: false,
      autoWidth: false,
      // animateOut: 'goDownOut',
      // animateIn: 'goDownIn',
      navRewind: true,
      center: false, // It's used to make the carousel start from the centered item
      dotsEach: 1, // Number of items per dot
      dotData: false,
      lazyLoad: false, // img tag needs class="owl-lazy" and data-src="url-to-img" or/and data-src-retina="url-to-highres-img"
      smartSpeed: 600, // Sliding speed when hover next or prev nav
      fluidSpeed: 5000,
      navSpeed: 400,
      // fallbackEasing: "ease-in-out",
      dotsSpeed: 400 // Sliding speed by using dots
    });
  }

  // *** Project Single Share *** //
  function ProjectSingleShare() {
    $(".social-share").jsSocials({
      // shares: ["email", "twitter", "facebook", "googleplus", "linkedin", "pinterest", "stumbleupon", "whatsapp"]
      shareIn: "popup",
      showCount: false,
      showLabel: false,
      shares: ["twitter", "facebook", "googleplus", "linkedin", "pinterest"]
    });
  }

  // *** Lightbox Iframe *** //
  function lightboxIframe() {
    $(".lightbox-iframe").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
  }

  // *** Lightbox Image *** //
  function lightboxImage() {
    $(".lightbox-img").magnificPopup({
      type: "image",
      gallery: {
        enabled: false
      },
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
  }

  // *** Lightbox Gallery *** //
  function lightboxGallery() {
    $(".lightbox-gallery").magnificPopup({
      type: "image",
      gallery: {
        enabled: true
      },
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
  }

  // *** Testmonials Slider *** //
  function testmonialsSlider() {
    var testmonialsSlider = $(".testmonials-slider > .owl-carousel");
    testmonialsSlider.owlCarousel({
      // items: 3,
      rtl: owlRtl,
      autoplay: true,
      autoplaySpeed: 500, // Sliding autoplay speed
      autoplayTimeout: 5000, // Autoplay interval timeout.
      dragEndSpeed: 400, // Sliding speed by mouse drag
      autoplayHoverPause: true, // Stop autoplay on mouse hover
      loop: true,
      slideBy: 1, // Number of item are slided for each one transition
      margin: 30, // space between each item. Very useful!
      stagePadding: 0, // This used to see part of left an right items as preview style
      nav: false, // show prev and next buttons
      dots: false, // Show dots navigation
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>'
      ], // prev and next buttons content
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 1
        },
        768: {
          items: 2
        },
        1200: {
          items: 3
        }
      },
      autoHeight: false,
      autoWidth: false,
      // animateOut: 'goDownOut',
      // animateIn: 'goDownIn',
      navRewind: true,
      center: false, // It's used to make the carousel start from the centered item
      dotsEach: 1, // Number of items per dot
      dotData: false,
      lazyLoad: false, // img tag needs class="owl-lazy" and data-src="url-to-img" or/and data-src-retina="url-to-highres-img"
      smartSpeed: 600, // Sliding speed when hover next or prev nav
      fluidSpeed: 5000,
      navSpeed: 400,
      // fallbackEasing: "ease-in-out",
      dotsSpeed: 400 // Sliding speed by using dots
    });
  }

  // *** Clients Slider *** //
  function clientsSlider() {
    var clientsSlider = $(".clients-slider > .owl-carousel");
    clientsSlider.owlCarousel({
      items: 5,
      rtl: owlRtl,
      autoplay: 4000,
      autoplaySpeed: 500, // Sliding autoplay speed
      autoplayTimeout: 3000, // Autoplay interval timeout.
      dragEndSpeed: 400, // Sliding speed by mouse drag
      autoplayHoverPause: true, // Stop autoplay on mouse hover
      loop: true,
      slideBy: 1, // Number of item are slided for each one transition
      margin: 30, // space between each item. Very useful!
      stagePadding: 0, // This used to see part of left an right items as preview style
      nav: false, // show prev and next buttons
      dots: false, // Show dots navigation
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>'
      ], // prev and next buttons content
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 4
        },
        1200: {
          items: 5
        }
      },
      autoHeight: false,
      autoWidth: false,
      // animateOut: 'goDownOut',
      // animateIn: 'goDownIn',
      navRewind: true,
      center: false, // It's used to make the carousel start from the centered item
      dotsEach: 1, // Number of items per dot
      dotData: false,
      lazyLoad: false, // img tag needs class="owl-lazy" and data-src="url-to-img" or/and data-src-retina="url-to-highres-img"
      smartSpeed: 600, // Sliding speed when hover next or prev nav
      fluidSpeed: 5000,
      navSpeed: 400,
      // fallbackEasing: "ease-in-out",
      dotsSpeed: 400 // Sliding speed by using dots
    });
  }

  // *** Contact Form *** //
  function registerFormValidation() {
    $("#register-form").validate({
      // rules
      rules: {
        rfName: {
          required: true,
          minlength: 3
        },
        rfEmail: {
          required: true,
          email: true
        },
        rfPhoneNum: {
          required: true,
          number: true,
          minlength: 12,
          maxlength: 12
        }
      }
    });

    var errorMsgData = $(".rf-notifications").data("error-msg"),
      errorMsgDefault = "Please Follow Error Messages and Complete as Required",
      errorMsg = errorMsgData ? errorMsgData : errorMsgDefault;

    // Submit event
    $("#register-form").on("submit", function (event) {
      if (event.isDefaultPrevented()) {
        var errorContent =
          '<i class="rf-error-icon fa fa-close"></i>' + errorMsg;
        rfSubmitMSG(false, errorContent);
        rfError();
      } else {
        event.preventDefault();
        rfSubmitForm();
      }
    });
  }

  function rfSubmitForm() {
    var a = $("#rfName").val(),
      b = $("#rfEmail").val(),
      c = $("#rfPhoneNum").val();
    $.ajax({
      type: "POST",
      url: "./php/rf-process.php",
      data: "rfName=" + a + "&rfEmail=" + b + "&rfPhoneNum=" + c,
      success: function (a) {
        "success" == a ? rfSuccess() : (rfError(), rfSubmitMSG(!1, a));
      }
    });
  }
  function rfSuccess() {
    var a = $(".rf-notifications").data("success-msg"),
      b = "Thank you for your submission :)",
      c = a ? a : b;
    $("#register-form")[0].reset();
    var d = '<i class="rf-success-icon fa fa-check"></i>' + c;
    rfSubmitMSG(!0, d),
      $(".rf-notifications-cont").addClass("sent"),
      $(".rf-notifications").css("opacity", 0),
      $(".rf-notifications")
        .slideDown(300)
        .animate({ opacity: 1 }, 300)
        .delay(5e3)
        .slideUp(400);
  }
  function rfError() {
    $(".rf-notifications").css("opacity", 0),
      $(".rf-notifications")
        .slideDown(300)
        .animate({ opacity: 1 }, 300),
      $(".rf-notifications-cont").removeClass("sent");
  }
  function rfSubmitMSG(a, b) {
    var c;
    (c = "shake animated"),
      $(".rf-notifications")
        .delay(300)
        .addClass(c)
        .one(
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
          function () {
            $(this).removeClass("shake bounce animated");
          }
        ),
      $(".rf-notifications")
        .children(".rf-notifications-cont")
        .html(b);
  }
})(jQuery);

function convertHex(hex, opacity) {
  // "use strict";
  // var r, g, b, result;
  hex = hex.replace("#", "");
  r = parseInt(hex.substring(0, 2), 16);
  g = parseInt(hex.substring(2, 4), 16);
  b = parseInt(hex.substring(4, 6), 16);

  result = "rgba(" + r + ", " + g + ", " + b + ", " + opacity + ")";
  return result;
}
