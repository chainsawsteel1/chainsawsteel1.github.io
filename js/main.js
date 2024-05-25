console.log(Cookies.get('tgl'))
if (Cookies.get('tgl') == undefined) {
  Cookies.set('tgl', 'false')
}

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
    $('.toggle').addClass('high');
    $('.toggle').removeClass('under');
  } else {
    $("body").css("padding-top", "80px");
    $("body").css("padding-bottom", "20px");
    $(".toggle").css("bottom", "0%");
    $("body").css("width", "60%");
    $('.navbar').addClass('high');
    $('.navbar').removeClass('under');
    $('.toggle').addClass('under');
    $('.toggle').removeClass('high');
  }
  if (winW <= 300) {
    document.getElementById("already").innerText = "画面の横幅狭すぎるよ";
    gotop();
  }
  if (location.search == "?oldpage") {
    $("body").css("padding-top", "80px");
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
//mdfile.js:57

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
    document.getElementById("already").innerText = "すでにこのページにいます";
    gotop();
  } else {
    inpagego(to);
  }
});

function gooutpage(target) {
  if (Cookies.get('tgl') == 'false') {
    window.open(target, '_blank');
  } else if (Cookies.get('tgl') == 'true') {
    $('.pinp').removeClass('none');
    $(".pinp").css("opacity", "0%");
    setTimeout(function () {
      $(".pinp").css("opacity", "90%");
      $(".pinp").css("transition", ".4s");
    }, 100);
    setTimeout(function () {
      $(".pinp").css("opacity", "90%");
      $(".pinp").css("transition", ".1s");
    }, 500);
    embini(target)
  }
}

function inpagego(target) {
  $(".pinp").css("transition", ".4s");
  setTimeout(function () {
    $('.content').addClass('next');
    $('.navbar').addClass('hidee');
    $('.loading').removeClass('next');
    $('.pinp').addClass('none');
    $('.already').removeClass('hide');
  }, 10);
  setTimeout(function () {
    window.location = target;
  }, 410);
}

function gotop() {
  $('.already').addClass('hide');
  setTimeout(function () {
    $('.already').removeClass('hide');
  }, 3000);
}

function embini(target) {
  document.getElementById("already").innerText = "セキュリティの理由で開かないだろう";
  gotop();
  var cnt = "<iframe src=\"" + target + "\" frameborder=\"0\" width=\"100%\" height=\"500px\"></iframe>"
  document.getElementById("openini").innerHTML = cnt;
}

$(function () {
  $(".toggle").click(function () {
    console.log(Cookies.get('tgl'))
    if(Cookies.get('tgl') == 'false') {
      Cookies.set('tgl', 'true')
      document.getElementById("already").innerText = "ホバーモードオン\nだがセキュリティの理由でつかえないだろう";
      gotop();
    } else if(Cookies.get('tgl') == 'true') {
      Cookies.set('tgl', 'false')
      document.getElementById("already").innerText = "ホバーモードオフ";
      gotop();
    }
  });
});