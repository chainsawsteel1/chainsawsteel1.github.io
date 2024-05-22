//画面サイズ
$(window).on('load resize', function () {
  var winW = $(window).width();
  var devW = 650;
  if (winW <= devW) {
    $("body").css("padding-top", "200px");
    $("body").css("padding-bottom", "80px");
    $("body").css("width", "100%");
    $('.navbar').addClass('under');
    $('.navbar').removeClass('high');
  } else {
    $("body").css("padding-top", "80px");
    $("body").css("padding-bottom", "20px");
    $("body").css("width", "60%");
    $('.navbar').addClass('high');
    $('.navbar').removeClass('under');
  }
  if (winW <= 300) {
    document.getElementById("already").innerText = "画面の横幅狭すぎるよ";
    gotop();
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
    $('.loading').addClass('next');
    $('.content').removeClass('load');
    $('.navbar').removeClass('hidee');
  }, 500);
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
    gotop();
  } else {
    inpagego(to);
  }
});

function gooutpage(target) {
  window.open(target, '_blank');
}

function inpagego(target) {
  $('.content').addClass('next');
  $('.navbar').addClass('hidee');
  $('.loading').removeClass('next');
  setTimeout(function () {
    window.location = target;
  }, 400);
}

function gotop() {
  $('.already').addClass('hide');
  setTimeout(function () {
    $('.already').removeClass('hide');
  }, 2000);
  setTimeout(function () {
    document.getElementById("already").innerText = "すでにこのページにいます";
  }, 2500);
}
