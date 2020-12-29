$(document).ready(function () {
  // swap_word(); TODO
  sync_kashf_text_with_kashfCarousel()
});

// for remove arrow in scrolling
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


// handle kashf-text show and swap text synchronous with kashf-carousel
function sync_kashf_text_with_kashfCarousel() {

  const carousel = $("#kashf-carousel");
  const text1 = 'شناسایی چهره';
  const text2 = 'تحلیل ویدئو';
  const text3 = 'شناسایی صحنه‌ها';
  const text4 = 'پیدا کردن کالاها';
  const text5 = 'تحلیل احساس متن';
  const id1 = 'kashf-img-1';
  const id2 = 'kashf-img-2';
  const id3 = 'kashf-img-3';
  const id4 = 'kashf-img-4';
  const id5 = 'kashf-img-5';

  carousel.on('slid.bs.carousel', function () {
    const id = $('#kashf-carousel .active').attr('id');
    const carousel_text = $('.carousel-text');
    carousel_text.addClass('active');
    switch (id) {
      case id1:
        carousel_text.text(text1);
        break;
      case id2:
        carousel_text.text(text2);
        break;
      case id3:
        carousel_text.text(text3);
        break;
      case id4:
        carousel_text.text(text4);
        break;
      case id5:
        carousel_text.text(text5);
    }
  });

  carousel.on('slide.bs.carousel', function () {
    const id = $('#kashf-carousel .active').attr('id');
    const carousel_text = $('.carousel-text');
    carousel_text.removeClass('active');
    switch (id) {
      case id1:
        carousel_text.text(text1);
        break;
      case id2:
        carousel_text.text(text2);
        break;
      case id3:
        carousel_text.text(text3);
        break;
      case id4:
        carousel_text.text(text4);
        break;
      case id5:
        carousel_text.text(text5);
    }
  });
}

// // swap letter in a span on kashf-text  TODO: add swap to text
// var text_el = document.getElementsByClassName('hazm-code');
// new TypeIt(".hazm-code", {
//   strings: text_el.text,
//   speed: 75,
//   startDelay: 900,
//   loop: true,
//   waitUntilVisible: true,
//   breakLines: false,
//
//   beforeStep: async (step, instance) => {
//     // Will fire before each step in the queue.
//     console.log(step, instance)
//   },
// }).empty().go();
