// ハンバーガーメニュー
var hamburger = $('.hamburger-menu');
$('.hamburger-button').on('click', function () {
  hamburger.toggleClass('hamburger-menu-active');
});
$(window).on('resize', function () {
  hamburger.removeClass('hamburger-menu-active');
});
// カルーセル
$('.cover-slick').slick({
  infinite: true,
  dots: true,
  arrows: false,
  fade: true,
  autoplay: true,
  autoplaySpeed: 5000,
});
//タブ
$('#smarttab').smartTab({
  enableUrlHash: false,
  autoAdjustHeight: false
});
//フェードイン
$('.fade-in-right').waypoint({
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element)
        .addClass('animate__fadeInRight');
    }
  },
  offset: '50%',
});

$('.fade-in-left').waypoint({
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element)
        .addClass('animate__fadeInLeft');
    }
  },
  offset: '50%',
});
// アコーディオンのタイトルがクリックされたら
$('.accordion-question').on('click', function(e) {
  var answer = $(this).next();
  answer.slideToggle();
  var answer = $(this).toggleClass('active');
});
