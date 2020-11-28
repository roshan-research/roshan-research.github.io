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
  carousel.on('slide.bs.carousel', function (){
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
