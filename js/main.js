let que = []

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
    $(".navbox").css("width", "100%");
    $('.navbar').addClass('under');
    $('.navbar').removeClass('high');
    $('.toggle').addClass('high');
    $('.toggle').removeClass('under');
  } else {
    $("body").css("padding-top", "80px");
    $("body").css("padding-bottom", "20px");
    $(".toggle").css("bottom", "0%");
    $("body").css("width", "600px");
    $(".navbox").css("width",600-winW/100);
    $('.navbar').addClass('high');
    $('.navbar').removeClass('under');
    $('.toggle').addClass('under');
    $('.toggle').removeClass('high');
  }
  if (winW <= 300) {
    showbanner("画面の横幅狭すぎるよ");
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
    warn()
    showbanner("すでにこのページにいます");
  } else {
    inpagego(to);
  }
});


// 外部サイト
function gooutpage(target) {
  openwindow(target)
}

// 次のページへ
function inpagego(target) {
  $(".pinp").css("transition", ".4s cubic-bezier(.53, .25, .16, 1.38)");
  $('.content').addClass('next');
  $('.navbar').addClass('hidee');
  $('.toggle').addClass('hidee');
  $('.warn').addClass('hidee');
  $('.background').addClass('hidee');
  $('.pinp').addClass('hidee');
  $('.cursorlight').addClass('hidee');
  $('.loading').removeClass('next');
  $('.already').removeClass('hide');
  $(".pinp").css("opacity", "0%");
  setTimeout(function () {
    window.location = target;
  }, 400);
}

function showbanner(text) {
  if (que.length >= 3) {
    if (que[0] != text) {
      que.push(text)
      console.log(que)
    }
  } else {
    que.push(text)
    console.log(que)
  }
  if (que.length == 1) {
    banner(text)
  }
}

setInterval(() => {
  if (que.length != 0) {
    banner(que[0])
    console.log(que)
    setTimeout(function () {
      que.shift()
    }, 2400)
  }
}, 2400)

function banner(text) {
  document.getElementById("already").innerText = text;
  $('.already').addClass('hide');
  setTimeout(function () {
    $('.already').removeClass('hide');
  }, 2000);
}

function warn() {
  $('.warn').removeClass('hidee');
  setTimeout(function () {
    $('.warn').addClass('hidee');
  }, 200);
}

// window manager

$(function () {
  $(".toggle").click(function () {
    console.log(Cookies.get('tgl'))
    if (Cookies.get('tgl') == 'false') {
      Cookies.set('tgl', 'true')
      $(".toggle").css("box-shadow", "0px 8px 15px rgb(163, 163, 163)");
      showbanner("ホバーモードオン\nだがセキュリティの理由でつかえないだろう");
    } else if (Cookies.get('tgl') == 'true') {
      Cookies.set('tgl', 'false')
      $(".toggle").css("box-shadow", "0px 8px 15px rgba(0, 0, 0, 0.1)");
      showbanner("ホバーモードオフ");
    }
  });
});

// close
$(function () {
  $("#close1").click(function () {
    $("#pinp1").css("transition", ".4s cubic-bezier(.53, .25, .16, 1.38)");
    $("#pinp1").css("opacity", "0%");
    setTimeout(function () {
      $('#pinp1').addClass('none');
    }, 400);
  });
});

// open
function openwindow(target) {
  if (Cookies.get('tgl') == 'false') {
    window.open(target, '_blank');
  } else if (Cookies.get('tgl') == 'true') {
    if (chklink(target) == false) {
      window.open(target, '_blank');
    } else if (chklink(target) == true) {
      embini(target)
      $('#pinp1').removeClass('none');
      $("#pinp1").css("opacity", "0%");
      setTimeout(function () {
        $("#pinp1").css("opacity", "90%");
      }, 100);
    }
  }
}

// return url
function embini(target) {
  showbanner("セキュリティの理由で開かないだろう");
  let cnt = "<iframe src=\"" + target + "\" frameborder=\"0\" width=\"100%\" height=\"500px\"></iframe>"
  document.getElementById("openini1").innerHTML = cnt;
  document.getElementById("bar1").innerHTML = target;
  setTimeout(function () {
    $("#pinp1").css("transition", "0s cubic-bezier(.53, .25, .16, 1.38)");
  }, 400);
}

// security check
function chklink(url) {
  return true
}

// backbutton
$(function () {
  $(".back").click(function () {
    showbanner("未実装");
    const fromDomain = location.origin
    const backDomain = document.referrer
    console.log(fromDomain + " == " + backDomain)
    if (fromDomain == backDomain) {
      inpagego(document.referrer)
    }
  });
});