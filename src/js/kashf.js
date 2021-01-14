$(document).ready(function () {
  sync_kashf_text_with_kashfCarousel();
  add_line()
});

// for remove arrow in scrolling
const scroll_func = function toggle_show_arrow() {
  const windowInnerWidth = window.innerWidth;
  const allowable_px_dive_to_kashf = windowInnerWidth > 991 ? (4 / 100) * windowInnerWidth : 0;
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
window.addEventListener('scroll', scroll_func, {passive: true});


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


// handle show code as type writer in hazm
var lines = $('.lines');
const lines_array = Array.from(lines[0].children);
var i = 0;
var j = 0;
var t;
var line = [];
var speed = 50;
const height_of_lines = lines.height();

lines.empty();
lines.height(height_of_lines);

function sleep_for_addChild(ms, line_children) {
  return new Promise(resolve => {
    t = setTimeout(function () {
      add_line_child(line_children);
    }, ms)
  }).then(function () {
    clearTimeout(t);
  });
}

function sleep_for_addLine(ms) {
  return new Promise(resolve => {
    t = setTimeout(add_line, ms)
  }).then(function () {
    clearTimeout(t);
  });
}

async function add_line_child(line_children) {
  if (j < line_children.length) {
    $(".lines div").last().append(line_children[j].outerHTML);
    j++;
    await sleep_for_addChild(speed, line_children);
  } else {
    j = 0;
    await sleep_for_addLine(speed)
  }
}

async function add_line() {
  if (i < lines_array.length) {
    line = lines_array[i];
    var className = line ? line.className : '';
    var line_children = Array.from(line ? line.children : []);
    lines.append('<div class="' + className + '"></div>');
    i++;
    await add_line_child(line_children);
  }
  else {
    i = 0;
    lines.empty();
    await sleep_for_addLine()
  }
}
