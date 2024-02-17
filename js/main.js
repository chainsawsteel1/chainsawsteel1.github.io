//画面サイズ
$(window).on('load resize', function () {
  var winW = $(window).width();
  var devW = 650;
  if (winW <= devW) {
    $("body").css("width", "100%");
  } else {
    $("body").css("width", "60%");
  }
});

//navbarの透過
window.addEventListener("scroll", opacity_nav);
var heig = 15;
function opacity_nav() {
  if (window.scrollY > heig) {
    $('.navbar').addClass('shadow');
  } else if (window.scrollY < heig) {
    $('.navbar').removeClass('shadow');
  }
}

//ロード表示
$(window).on("load", function () {
  setTimeout(function () {
    $('.content').removeClass('load');
  }, 200);
});

//遅延
$(document).on('click', 'a', function (e) {
  e.preventDefault();

  const blank = $(this).attr('target');
  const fromDomain = location.origin;
  const from = fromDomain + location.pathname + location.search;
  const to = $(this).prop('href');
  const check = to.replace(from, '');

  if (blank == '_blank' || to.indexOf(fromDomain) == -1) {
    gooutpage(to);
  } else if (check.indexOf('#') == 0 || check == '') {
    var target = 0;
    if (check != '') {
      target = $(check).offset().top;
    }
    gotop(target);
  } else {
    inpagego(to);
  }
});
function gooutpage(target) {
  window.open(target, '_blank');
}
function inpagego(target) {
  $('.content').addClass('next');
  setTimeout(function () {
    window.location = target;
  }, 400);
}
function gotop(target) {
  $('body,html').stop().animate({ scrollTop: target }, 400);
}
