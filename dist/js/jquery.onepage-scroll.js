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
        quietPeriod = 350,
        paginationList = "";

    $.fn.transformPage = function (next_el, index, scroll_option = {behavior: "smooth", block: "center"}) {

      if (typeof settings.beforeMove == 'function') settings.beforeMove(index);

      next_el[0].scrollIntoView(scroll_option);

      main_el.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function (e) {
        if (typeof settings.afterMove == 'function') settings.afterMove(index);
      });
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

    $.fn.moveTo = function (page_index, scroll_option) {
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

      main_el.transformPage(next, next.data("index"), scroll_option);
    };

    function init_scroll(event) {
      var delta = -event.originalEvent.deltaY;
      var timeNow = new Date().getTime();

      // Cancel scroll if currently animating or within quiet period
      if (timeNow - lastAnimation < quietPeriod + settings.animationTime) {
        return;
      }

      if (delta < 0) {
        main_el.moveDown()
      } else if (delta > 0) {
        main_el.moveUp()
      } else {
        console.log("your wheel move in X direction")
      }

      lastAnimation = timeNow;
    }

    function responsive() {
      //start modification
      var one_page_scroll_should_be_disable = false;
      var typeOfRF = typeof settings.responsiveFallback;
      var product_arrow_block = 'center';

      if (typeOfRF == "number") {
        one_page_scroll_should_be_disable = $(window).width() < settings.responsiveFallback;
      }
      if (typeOfRF == "boolean") {
        one_page_scroll_should_be_disable = settings.responsiveFallback;
      }

      //end modification
      if (one_page_scroll_should_be_disable) {
        $("body").addClass("disabled-onepage-scroll");
        $(document).off('wheel', init_scroll);
        product_arrow_block = 'start';
      } else {
        if ($("body").hasClass("disabled-onepage-scroll")) {
          $("body").removeClass("disabled-onepage-scroll");
          $("html, body, .main").animate({scrollTop: 0}, "fast");
        }
        $(document).on('wheel', init_scroll);
      }

      //handle product_arrow action
      $(".product-arrow  a").on('click', function (e) {
        main_el.moveTo(2, {behavior: "smooth", block: product_arrow_block});
      })
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
    } else if (!$("body").hasClass("disabled-onepage-scroll")) {
      $(document).on('wheel', init_scroll);
    }


    if (settings.keyboard == true) {
      $(document).keydown(function (e) {
        var tag = e.target.tagName.toLowerCase();

        if (!$("body").hasClass("disabled-onepage-scroll") && (tag != 'input' && tag != 'textarea')) {
          switch (e.which) {
            case 38:
              e.preventDefault();
              main_el.moveUp();
              break;
            case 40:
              e.preventDefault();
              main_el.moveDown();
              break;
            case 32: //spacebar
              e.preventDefault();
              main_el.moveDown();
              break;
            case 33: //pageg up
              e.preventDefault();
              main_el.moveUp();
              break;
            case 34: //page dwn
              e.preventDefault();
              main_el.moveDown();
              break;
            case 36: //home
              e.preventDefault();
              main_el.moveTo(1);
              break;
            case 35: //end
              e.preventDefault();
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
