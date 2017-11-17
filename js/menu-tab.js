$(document).ready(function() {
  var menu = $('.main-menu >li');
  var animationbox = $('.visual>li')

  menu.hover(function() {
    $(this).find('.sub-menu').toggleClass('menu-act');
  });

  menu.focusin(function() {
    $(this).siblings().find('.sub-menu').removeClass('menu-act');
    $(this).find('.sub-menu').addClass('menu-act');
  });
  animationbox.on('click ' () {
    $(this).toggleClass('box-act');
  });



});

// 문서가 다로딩되고 해석하기:헤딩에 선언되어있더라도 로딩다되고나서 해석하기
// toggleClass('.manu-act') 안됨 . 앞에 class 있으므로
// on 상황발생할때 익명함수는 뒤에 따라옴