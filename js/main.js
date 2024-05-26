console.log(Cookies.get('tgl'))
if (Cookies.get('tgl') == undefined) {
  Cookies.set('tgl', 'false')
}

//画面サイズ
$(window).on('load resize', function () {
  let winW = $(window).width();
  let devW = 650;
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
let heig = 15;
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
    let target = 0;
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
  openwindow(target)
}

function inpagego(target) {
  $(".pinp").css("transition", ".4s cubic-bezier(.53, .25, .16, 1.38)");
  $('.content').addClass('next');
  $('.navbar').addClass('hidee');
  $('.toggle').addClass('hidee');
  $('.pinp').addClass('hidee');
  $('.cursorlight').addClass('hidee');
  $('.loading').removeClass('next');
  $('.already').removeClass('hide');
  $(".pinp").css("opacity", "0%");
  setTimeout(function () {
    window.location = target;
  }, 400);
}

function gotop() {
  $('.already').addClass('hide');
  setTimeout(function () {
    $('.already').removeClass('hide');
  }, 3000);
}

$(function () {
  $(".toggle").click(function () {
    console.log(Cookies.get('tgl'))
    if (Cookies.get('tgl') == 'false') {
      Cookies.set('tgl', 'true')
      $(".toggle").css("box-shadow", "0px 8px 15px rgb(163, 163, 163)");
      document.getElementById("already").innerText = "ホバーモードオン\nだがセキュリティの理由でつかえないだろう";
      gotop();
    } else if (Cookies.get('tgl') == 'true') {
      Cookies.set('tgl', 'false')
      $(".toggle").css("box-shadow", "0px 8px 15px rgba(0, 0, 0, 0.1)");
      document.getElementById("already").innerText = "ホバーモードオフ";
      gotop();
    }
  });
});

$(function () {
  $(".bar2").click(function () {
    $(".pinp").css("opacity", "0%");
    setTimeout(function () {
      $('.pinp').addClass('none');
    }, 400);
  });
});

function openwindow(target) {
  if (Cookies.get('tgl') == 'false') {
    window.open(target, '_blank');
  } else if (Cookies.get('tgl') == 'true') {
    if (chklink(target) == false) {
      window.open(target, '_blank');
    } else if (chklink(target) == true) {
      embini(target)
      $('.pinp').removeClass('none');
      $(".pinp").css("opacity", "0%");
      setTimeout(function () {
        $(".pinp").css("opacity", "90%");
      }, 100);
    }
  }
}

function embini(target) {
  document.getElementById("already").innerText = "セキュリティの理由で開かないだろう";
  gotop();
  let cnt = "<iframe src=\"" + target + "\" frameborder=\"0\" width=\"100%\" height=\"500px\"></iframe>"
  document.getElementById("openini").innerHTML = cnt;
  document.getElementById("bar1").innerHTML = target;
  setTimeout(function () {
    $(".pinp").css("transition", "0s cubic-bezier(.53, .25, .16, 1.38)");
  }, 400);
}

function chklink(url) {
  return true
}