$(document).ready(function () {
  // swap_word(); TODO

  sync_kashfText_with_kashfCarousel()

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


// swap letter in a span on kashf-text  TODO: add swap to text
// function swap_word() {
  //var textWrapper = document.querySelector('.ml3');
  // textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  // anime.timeline({loop: true})
  //     .add({
  //       targets: '.ml3 .letter',
  //       opacity: [0,1],
  //       easing: "easeInOutQuad",
  //       duration: 3970,
  //       delay: (el, i) => 150 * (i+1),
  //       language: 'english'
  //     })
  //     .add({
  //       targets: '.ml3',
  //       opacity: 0,
  //       duration: 1000,
  //       easing: "easeOutExpo",
  //       delay: 1000
  //     })

  // var app = document.querySelector('.ml3');
  //
  // var typewriter = new Typewriter(app, {
  //   loop: true,
  //   autoplay: true,
  //   dir: 'rtl'
  // });
  //
  // typewriter
  //     .typeString(app.textContent)
  //     .pauseFor(2500)
  //     .deleteAll()
  //     .start();
// }


// handle kashf-text show and swap text synchronous with kashf-carousel

function sync_kashfText_with_kashfCarousel() {

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
    const kashf_text = $('#kashf-text');
    kashf_text.addClass('active')
    switch (id) {
      case id1:
        kashf_text.text(text1);
        // swap_word(); TODO: add swap to text
        break;
      case id2:
        kashf_text.text(text2);
        // swap_word();
        break;
      case id3:
        kashf_text.text(text3);
        // swap_word();
        break;
      case id4:
        kashf_text.text(text4);
        // swap_word();
        break;
      case id5:
        kashf_text.text(text5);
        // swap_word()
    }
  });

  carousel.on('slide.bs.carousel', function () {
    const id = $('#kashf-carousel .active').attr('id');
    const kashf_text = $('#kashf-text');
    kashf_text.removeClass('active')
    switch (id) {
      case id1:
        kashf_text.text(text1);
        // swap_word(); TODO: add swap to text
        break;
      case id2:
        kashf_text.text(text2);
        // swap_word();
        break;
      case id3:
        kashf_text.text(text3);
        // swap_word();
        break;
      case id4:
        kashf_text.text(text4);
        // swap_word();
        break;
      case id5:
        kashf_text.text(text5);
        // swap_word()
    }
  });
}
