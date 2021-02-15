/* ===========================================================
 * jquery-onepage-scroll.js v1.3.1
 * ===========================================================
 * Copyright 2013 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * Create an Apple-like website that let user scroll
 * one page at a time
 *
 * Credit: Eike Send for the awesome swipe event
 * https://github.com/peachananr/onepage-scroll
 *
 * License: GPL v3
 *
 * ========================================================== */

!function ($) {

  var defaults = {
    sectionContainer: "section",
    easing: "ease",
    animationTime: 1000,
    pagination: true,
    updateURL: false,
    keyboard: true,
    beforeMove: null,
    afterMove: null,
    loop: true,
    responsiveFallback: false,
  };


  $.fn.onepage_scroll = function (options) {
    var settings = $.extend({}, defaults, options),
        main_el = $(this),
        sections = $("." + settings.sectionContainer),
        total = sections.length,
        lastAnimation = 0,
        quietPeriod = 500,
        paginationList = "";

    $.fn.transformPage = function (next_el, index) {
      // if (typeof settings.beforeMove == 'function') settings.beforeMove(index);
      // main_el.css({
      //   "-webkit-transition": "all " + settings.animationTime + "ms " + settings.easing,
      //   "-moz-transition": "all " + settings.animationTime + "ms " + settings.easing,
      //   "-ms-transition": "all " + settings.animationTime + "ms " + settings.easing,
      //   "transition": "all " + settings.animationTime + "ms " + settings.easing
      // });

      next_el[0].scrollIntoView({behavior: "smooth", block: "center"});

      // main_el.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function (e) {
      //   if (typeof settings.afterMove == 'function') settings.afterMove(index);
      // });
    };

    $.fn.moveDown = function () {
      index = $("." + settings.sectionContainer + ".active").data("index");
      current = $("." + settings.sectionContainer + "[data-index='" + index + "']");
      next = $("." + settings.sectionContainer + "[data-index='" + (index + 1) + "']");

      if (next.length < 1) {
        if (settings.loop == true) {
          next = $("." + settings.sectionContainer + "[data-index='1']");
        } else {
          return
        }
      }

      current.removeClass("active");
      next.addClass("active");

      if (settings.pagination == true) {
        $(".onepage-pagination li a" + "[data-index='" + index + "']").removeClass("active");
        $(".onepage-pagination li a" + "[data-index='" + next.data("index") + "']").addClass("active");
      }

      if (history.replaceState && settings.updateURL == true) {
        var href = window.location.href.substr(0, window.location.href.indexOf('#')) + "#" + (index + 1);
        history.pushState({}, document.title, href);
      }

      main_el.transformPage(next, next.data("index"));
    };

    $.fn.moveUp = function () {
      index = $("." + settings.sectionContainer + ".active").data("index");
      current = $("." + settings.sectionContainer + "[data-index='" + index + "']");
      next = $("." + settings.sectionContainer + "[data-index='" + (index - 1) + "']");

      if (next.length < 1) {
        if (settings.loop == true) {
          next = $("." + settings.sectionContainer + "[data-index='" + total + "']");
        } else {
          return
        }
      }

      current.removeClass("active");
      next.addClass("active");
      if (settings.pagination == true) {
        $(".onepage-pagination li a" + "[data-index='" + index + "']").removeClass("active");
        $(".onepage-pagination li a" + "[data-index='" + next.data("index") + "']").addClass("active");
      }

      if (history.replaceState && settings.updateURL == true) {
        var href = window.location.href.substr(0, window.location.href.indexOf('#')) + "#" + (index - 1);
        history.pushState({}, document.title, href);
      }
      main_el.transformPage(next, next.data("index"));
    };

    $.fn.moveTo = function (page_index) {
      current = $("." + settings.sectionContainer + ".active");
      next = $("." + settings.sectionContainer + "[data-index='" + (page_index) + "']");

      if (next.length < 1) {
        return
      }

      current.removeClass("active");
      next.addClass("active");

      if (settings.pagination == true) {
        $(".onepage-pagination li a" + ".active").removeClass("active");
        $(".onepage-pagination li a" + "[data-index='" + (page_index) + "']").addClass("active");
      }

      if (history.replaceState && settings.updateURL == true) {
        var href = window.location.href.substr(0, window.location.href.indexOf('#')) + "#" + (page_index - 1);
        history.pushState({}, document.title, href);
      }

      main_el.transformPage(next, next.data("index"));
    };

    function init_scroll(event) {
      var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
      var timeNow = new Date().getTime();

      // Cancel scroll if currently animating or within quiet period
      if (timeNow - lastAnimation < quietPeriod + settings.animationTime) {
        return;
      }

      if (delta < 0) {
        main_el.moveDown()
      } else {
        main_el.moveUp()
      }

      lastAnimation = timeNow;
    }

    function responsive() {
      //start modification
      var valForTest = false;
      var typeOfRF = typeof settings.responsiveFallback;

      if (typeOfRF == "number") {
        valForTest = $(window).width() < settings.responsiveFallback;
      }
      if (typeOfRF == "boolean") {
        valForTest = settings.responsiveFallback;
      }

      //end modification
      if (valForTest) {
        $("body").addClass("disabled-onepage-scroll");
        $(document).off('wheel DOMMouseScroll MozMousePixelScroll');
      } else {
        if ($("body").hasClass("disabled-onepage-scroll")) {
          $("body").removeClass("disabled-onepage-scroll");
          $("html, body, .main").animate({scrollTop: 0}, "fast");
        }
        $(document).on('wheel DOMMouseScroll MozMousePixelScroll', function (event) {
          event.preventDefault();
          init_scroll(event);
        });
      }
    }


    // Prepare everything before binding wheel scroll

    $.each(sections, function (i) {
      $(this).attr("data-index", i + 1);
      if (settings.pagination == true) {
        paginationList += "<li><a data-index='" + (i + 1) + "' href='#" + (i + 1) + "'></a></li>"
      }
    });

    // Create Pagination and Display Them
    if (settings.pagination == true) {
      if ($('ul.onepage-pagination').length < 1) $("<ul class='onepage-pagination'></ul>").prependTo("body");
      var posTop = (main_el.find(".onepage-pagination").height() / 2) * -1;
      main_el.find(".onepage-pagination").css("margin-top", posTop);
      $('ul.onepage-pagination').html(paginationList);

      $(".onepage-pagination li a").click(function () {
        var page_index = $(this).data("index");
        main_el.moveTo(page_index);
      });
    }


    if (window.location.hash != "" && window.location.hash != "#1") {
      init_index = window.location.hash.replace("#", "");
      if (parseInt(init_index) <= total && parseInt(init_index) > 0) {
        next = $("." + settings.sectionContainer + "[data-index='" + (init_index) + "']");
        if (next.length > 0) {
          next.addClass("active");
        }
        if (history.replaceState && settings.updateURL == true) {
          var href = window.location.href.substr(0, window.location.href.indexOf('#')) + "#" + (init_index);
          history.pushState({}, document.title, href);
        }
        if (settings.pagination == true)
          $(".onepage-pagination li a" + "[data-index='" + init_index + "']").addClass("active");
        main_el.transformPage(next, init_index);
      } else {
        $("." + settings.sectionContainer + "[data-index='1']").addClass("active");
        if (settings.pagination == true) $(".onepage-pagination li a" + "[data-index='1']").addClass("active");
      }
    } else {
      $("." + settings.sectionContainer + "[data-index='1']").addClass("active");
      if (settings.pagination == true) $(".onepage-pagination li a" + "[data-index='1']").addClass("active");
    }


    if (settings.responsiveFallback != false) {
      $(window).resize(function () {
        responsive()
      });
      responsive();
    }


    $(document).on('wheel DOMMouseScroll MozMousePixelScroll', function (event) {
      event.preventDefault();
      if (!$("body").hasClass("disabled-onepage-scroll")) init_scroll(event);
    });


    if (settings.keyboard == true) {
      $(document).keydown(function (e) {
        var tag = e.target.tagName.toLowerCase();

        if (!$("body").hasClass("disabled-onepage-scroll") && (tag != 'input' && tag != 'textarea')) {
          e.preventDefault();
          switch (e.which) {
            case 38:
               main_el.moveUp();
              break;
            case 40:
              main_el.moveDown();
              break;
            case 32: //spacebar
              main_el.moveDown();
              break;
            case 33: //pageg up
              main_el.moveUp();
              break;
            case 34: //page dwn
              main_el.moveDown();
              break;
            case 36: //home
              main_el.moveTo(1);
              break;
            case 35: //end
              main_el.moveTo(total);
              break;
            default:
              return;
          }
        }

      });
    }


    return false;
  }


}(window.jQuery);
