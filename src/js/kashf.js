$(document).ready(function () {
  const carousel = $("#kashf-carousel");
  const text1 = $("#kashf-text-1");
  const text2 = $("#kashf-text-2");
  const text3 = $("#kashf-text-3");
  const text4 = $("#kashf-text-4");
  const text5 = $("#kashf-text-5");
  const id1 = 'kashf-img-1';
  const id2 = 'kashf-img-2';
  const id3 = 'kashf-img-3';
  const id4 = 'kashf-img-4';
  const id5 = 'kashf-img-5';

  $("#kashf-text-1").addClass('active');
  carousel.on('slide.bs.carousel', function () {
    const id = $('#kashf-carousel .active').attr('id');
    switch (id) {
      case id1:
        text1.removeClass('active');
        break;
      case id2:
        text2.removeClass('active');
        break;
      case id3:
        text3.removeClass('active');
        break;
      case id4:
        text4.removeClass('active');
        break;
      case id5:
        text5.removeClass('active')
    }
  });

  carousel.on('slid.bs.carousel', function () {
    const id = $('#kashf-carousel .active').attr('id');
    switch (id) {
      case id1:
        text1.addClass('active');
        break;
      case id2:
        text2.addClass('active');
        break;
      case id3:
        text3.addClass('active');
        break;
      case id4:
        text4.addClass('active');
        break;
      case id5:
        text5.addClass('active');
    }
  });
});

const scroll_func = function toggle_show_arrow() {
  const windowInnerWidth = window.innerWidth;
  const allowable_px_dive_to_kashf = (4/100)*windowInnerWidth;
  var element_offset = $('#kashf-element').offset().top + allowable_px_dive_to_kashf;
  var window_h = $(window).height();
  var product_arrow = $('.product-arrow');
  var scroll_from_top = $(this).scrollTop();
  var should_be_hidden = !product_arrow.hasClass('invisible')
      && scroll_from_top > (element_offset + allowable_px_dive_to_kashf - window_h);
  var should_be_show = product_arrow.hasClass('invisible')
      && window_h < element_offset + allowable_px_dive_to_kashf
      && scroll_from_top < (element_offset + allowable_px_dive_to_kashf - window_h);
  if (should_be_hidden) {
    product_arrow.addClass('invisible')
  } else if (should_be_show) {
    product_arrow.removeClass('invisible')
  }
};

window.addEventListener('scroll', scroll_func,  {passive: true});
