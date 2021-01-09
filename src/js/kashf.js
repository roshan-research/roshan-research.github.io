$(document).ready(function () {
  sync_kashf_text_with_kashfCarousel();
  typeWriter()
});

// for remove arrow in scrolling
const scroll_func = function toggle_show_arrow() {
  const windowInnerWidth = window.innerWidth;
  const allowable_px_dive_to_kashf = windowInnerWidth > 991 ? (4/100)*windowInnerWidth : 0;
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

var text_el = document.querySelector('.hazm-code-inner div');
var hazm_code_elements = '<span class="o">&gt;&gt;&gt;&nbsp;</span>|<span class="kn">from&nbsp;</span>|<span class="nn">__future__&nbsp;</span>|<span class="kn">import&nbsp;</span>|<span class="n">unicode_literals</span>|\n' +
    '              <br>\n' +
    '              <span class="o">&gt;&gt;&gt;&nbsp;</span>|<span class="kn">from&nbsp;</span>|<span class="nn">hazm&nbsp;</span>|<span class="kn">import&nbsp;</span>|<span class="o">*</span>|\n' +
    '              <br><br>\n' +
    '              <span class="o">&gt;&gt;&gt;&nbsp;</span>|<span class="n">normalizer&nbsp;</span>|<span class="o">=&nbsp;</span>|<span class="n">Normalizer</span>|<span class="p">()</span>|\n' +
    '              <br>\n' +
    '              <span class="o">&gt;&gt;&gt;&nbsp;</span>|<span class="n">normalizer</span>|<span class="o">.</span>|<span class="n">normalize</span>|\n' +
    '              <span class="p">(</span>|<span class="s">\'اصلاح&nbsp;</span>|<span class="s">نویسه ها&nbsp;</span>|<span class="s">و&nbsp;</span>|<span class="s">استفاده&nbsp;</span>|<span class="s">از&nbsp;</span>|<span class="s">نیم&nbsp;</span>|<span class="s">فاصله&nbsp;</span>|<span class="s">پردازش&nbsp;</span>|<span class="s">را&nbsp;</span>|<span class="s">آسان&nbsp;</span>|<span class="s">می کند\'</span>|<span class="p">)</span>|\n' +
    '              <br>\n' +
    '              <span class="s">\'اصلاح&nbsp;</span>|<span class="s">نویسه ها&nbsp;</span>|<span class="s">و&nbsp;</span>|<span class="s">استفاده&nbsp;</span>|<span class="s">از&nbsp;</span>|<span class="s">نیم&nbsp;</span>|<span class="s">فاصله&nbsp;</span>|<span class="s">پردازش&nbsp;</span>|<span class="s">را&nbsp;</span>|<span class="s">آسان&nbsp;</span>|<span class="s">می کند\'</span>|\n' +
    '              <br><br>\n' +
    '              <span class="o">&gt;&gt;&gt;&nbsp;</span>|<span class="n">sent_tokenize</span>|<span class="p">(</span>|<span class="s">\'ما&nbsp;</span>|<span class="s">هم&nbsp;</span>|<span class="s">برای&nbsp;</span>|<span class="s">وصل&nbsp;</span>|<span class="s">کردن&nbsp;</span>|<span class="s">آمدیم</span>|<span class="s">!&nbsp;</span>|<span class="s">ولی&nbsp;</span>|<span class="s">برای&nbsp;</span>|<span class="s">پردازش</span>|<span class="s">،&nbsp;</span>|<span class="s">جدا&nbsp;</span>|<span class="s">بهتر&nbsp;</span>|<span class="s">نیست</span>|<span class="s">؟\'</span>|<span class="p">)</span>|' +
    '              <br>\n' +
    '              <span class="p">[</span>|<span class="s">\'ما&nbsp;</span>|<span class="s">هم&nbsp;</span>|<span class="s">برای&nbsp;</span>|<span class="s">وصل&nbsp;</span>|<span class="s">کردن&nbsp;</span>|<span class="s">آمدیم</span>|<span class="s">!</span>|'+
    '              <span class="p">,</span>|\n'+
    '              <span class="s">ولی&nbsp;</span>|<span class="s">برای&nbsp;</span>|<span class="s">پردازش</span>|<span class="s">،&nbsp;</span>|<span class="s">جدا&nbsp;</span>|<span class="s">بهتر&nbsp;</span>|<span class="s">نیست</span>|<span class="s">؟\'</span>|<span class="p">]</span>|\n' +
    '              <br>\n' +
    '              <span class="o">&gt;&gt;&gt;&nbsp;</span>|<span class="n">word_tokenize</span>|\n' +
    '              <span class="p">(</span>|<span class="s">\'</span>|<span class="s">ولی&nbsp;</span>|<span class="s">برای&nbsp;</span>|<span class="s">پردازش</span>|<span class="s">،&nbsp;</span>|<span class="s">جدا&nbsp;</span>|<span class="s">بهتر&nbsp;</span>|<span class="s">نیست</span>|<span class="s">؟\'</span>|<span class="p">)</span>|\n' +
    '              <br>\n' +
    '              <span class="p">[</span>|<span class="s">\'ولی\'</span>|<span class="p">,&nbsp;</span>|<span class="s">\'برای\'</span>|<span class="p">,&nbsp;</span>|<span class="s">\'پردازش\'</span>|<span class="p">،&nbsp;</span>|<span class="s">\'جدا\'</span>|<span class="p">,&nbsp;</span>|<span class="s">\'بهتر\'</span>|<span class="p">,&nbsp;</span>|<span class="s">\'نیست\'</span>|<span class="p">,&nbsp;</span>|<span class="s">\'؟\'</span>|<span class="p">]</span>|\n' +
    '              <br><br>\n' +
    '              <span class="o">&gt;&gt;&gt;&nbsp;</span>|<span class="n">stemmer&nbsp;</span>|<span class="o">=&nbsp;</span>|<span class="n">Stemmer</span>|<span class="p">()</span>|\n' +
    '              <br>\n' +
    '              <span class="o">&gt;&gt;&gt;&nbsp;</span>|<span class="n">stemmer</span>|<span class="o">.</span>|<span class="n">stem</span>|<span class="p">(</span>|<span class="s">\'کتاب&zwnj;ها\'</span>|<span class="p">)</span>|' +
    '              <br>\n' +
    '              <span class="s">\'کتاب\'</span>|\n' +
    '              <br>\n' +
    '              <span class="o">&gt;&gt;&gt;&nbsp;</span>|<span class="n">lemmatizer&nbsp;</span>|<span class="o">=&nbsp;</span>|<span class="n">Lemmatizer</span>|<span class="p">()</span>|\n' +
    '              <br>\n' +
    '              <span class="o">&gt;&gt;&gt;&nbsp;</span>|<span class="n">lemmatizer</span>|<span class="o">.</span>|<span class="n">lemmatize</span>|<span class="p">(</span>|<span class="s">\'می&zwnj;روم\'</span>|<span class="p">)</span>|\n' +
    '              <br>\n' +
    '              <span class="s">\'</span>|<span class="s">رفت</span>|<span class="s">#</span>|<span class="s">رو</span>|<span class="s">\'</span>|\n' +
    '              <br><br>\n' +
    '              <span class="o">&gt;&gt;&gt;&nbsp;</span>|<span class="n">tagger&nbsp;</span>|<span class="o">=&nbsp;</span>|<span class="n">POSTagger</span>|<span class="p">(</span>|<span class="n">model</span>|<span class="o">=</span>|\n' +
    '              <span class="s">\'</span>|<span class="s">resources</span>|<span class="s">/</span>|<span class="s">postagger</span>|<span class="s">.</span>|<span class="s">model</span>|<span class="s">\'</span>|<span class="p">)</span>|\n' +
    '              <br>\n' +
    '              <span class="o">&gt;&gt;&gt;&nbsp;</span>|<span class="n">tagger</span>|<span class="o">.</span>|<span class="n">tag</span>|<span class="p">(</span>|<span class="n">word_tokenize</span>|<span class="p">(</span>|<span class="s">\'</span>|<span class="s">ما&nbsp;</span>|<span class="s">بسیار&nbsp;</span>|<span class="s">کتاب&nbsp;</span>|<span class="s">می خوانیم</span>|<span class="s">\'</span>|<span class="p">))</span>|\n' +
    '              <br>\n' +
    '              <span class="p">[(</span>|<span class="s">\'ما\'</span>|<span class="p">,</span>|<span class="s">\'PRO\'</span>|<span class="p">),</span>|<span class="p">(</span>|<span class="s">\'بسیار\'</span>|<span class="p">,</span>|<span class="s">\'ADV\'</span>|<span class="p">),</span>|<span class="p">(</span>|<span class="s">\'کتاب\'</span>|<span class="p">,</span>|<span class="s">\'N\'</span>|<span class="p">),</span>|<span class="p">(</span>|<span class="s">\'می خوانیم\'</span>|<span class="p">,</span>|<span class="s">\'V\'</span>|<span class="p">)]</span>|\n' +
    '              <br><br>\n' +
    '              <span class="o">&gt;&gt;&gt;&nbsp;</span>|<span class="n">chunker&nbsp;</span>|<span class="o">=&nbsp;</span>|<span class="n">Chunker</span>|<span class="p">(</span>|<span class="n">model</span>|<span class="o">=</span>|<span class="s">\'resources</span>|<span class="s">/</span>|<span class="s">chunker</span>|<span class="s">.</span>|<span class="s">model\'</span>|<span class="p">)</span>|\n' +
    '              <br>\n' +
    '              <span class="o">&gt;&gt;&gt;&nbsp;</span>|<span class="n">tagged&nbsp;</span>|<span class="o">=&nbsp;</span>|<span class="n">tagger</span>|<span class="o">.</span>|<span class="n">tag</span>|<span class="p">(</span>|<span class="n">word_tokenize</span>|<span class="p">(</span>|<span class="s">\'کتاب&nbsp;</span>|<span class="s">خواندن&nbsp;</span>|<span class="s">را&nbsp;</span>|<span class="s">دوست&nbsp;</span|<span class="s">داریم\'</span>|<span class="p">))</span>|\n' +
    '              <br>\n' +
    '              <span class="o">&gt;&gt;&gt;&nbsp;</span>|<span class="n">tree2brackets</span>|<span class="p">(</span>|<span class="n">chunker</span>|<span class="o">.</span>|<span class="n">parse</span>|<span class="p">(</span>|<span class="n">tagged</span>|<span class="p">))</span>|' +
    '              <br>\n' +
    '              <span class="s">\'[</span><span class="s">کتاب&nbsp;</span>|<span class="s">خواندن&nbsp;</span>|<span class="s">NP</span>|<span class="s">]&nbsp;</span>|<span class="s">[</span>|<span class="s">را&nbsp;</span>|<span class="s">POSTP</span>|<span class="s">]&nbsp;</span>|<span class="s">[</span>|<span class="s">دوست&nbsp;</span>|<span class="s">داریم&nbsp;</span>|<span class="s">VP</span>|<span class="s">]\'</span>|\n' +
    '              <br><br>\n' +
    '              <span class="o">&gt;&gt;&gt;&nbsp;</span>|<span class="n">parser&nbsp;</span>|<span class="o">=&nbsp;</span>|<span class="n">DependencyParser</span>|<span class="p">(</span>|<span class="n">tagger&nbsp;</span>|<span class="o">=&nbsp;</span>|<span class="n">tagger</span>|<span class="p">,</span>| <span class="n">lemmatizer</span>|<span class="o">=</span>|<span class="n">lemmatizer</span>|<span class="p">)</span>|\n' +
    '              <br>\n' +
    '              <span class="o">&gt;&gt;&gt;&nbsp;</span>|<span class="n">parser</span>|<span class="o">.</span>|<span class="n">parse</span>|<span class="p">(</span>|<span class="n">word_tokenize</span>|<span class="p">(</span>|<span class="s">\'</span>|<span class="s">زنگ ها&nbsp;</span>|<span class="s">برای&nbsp;</span>|<span class="s">کی&nbsp;</span>|<span class="s">به&nbsp;</span>|<span class="s">صدا&nbsp;</span>|<span class="s">در&nbsp;</span>|<span class="s">می آید</span>|<span class="s">؟\'</span>|<span class="p">))</span>|\n' +
    '              <br>\n' +
    '              <span class="o">&lt;</span>|<span class="n">DependencyGraph&nbsp;</span>|<span class="k">with&nbsp;</span>|<span class="mi">8&nbsp;</span>|<span class="n">nodes</span>|<span class="o">&gt;</span>|\n' +
    '            </div>';

var i = 0;
var t;
var speed = 50;
const hazm_code_elements_array = hazm_code_elements.split("|");

function sleep(ms) {
  return new Promise(resolve => {t = setTimeout(typeWriter, ms)});
}

function stop_time_func() {
  clearTimeout(t);
  i = 0;
  text_el.innerHTML = '';
}

async function typeWriter() {
  if (i < hazm_code_elements_array.length) {
    text_el.innerHTML +=hazm_code_elements_array[i];
    i++;
    await sleep(speed);
  }
  if (i === hazm_code_elements_array.length) {
    stop_time_func();
    sleep(0)
  }
}
