//画面サイズ
$(window).on('load resize', function () {
    var winW = $(window).width();
    var devW = 390;
    if (winW <= devW) {
        $(".warn").css("animation-name", "warn");
    } else {
        $(".warn").css("animation-name", "none");
    }
});
//ロード表示
$(window).on("load", function () {
    $(".load").css("animation-name", "load");
    $('.loadmark').addClass('okload');
    $('.font').addClass('okload-b');
});
//通知押したときの
$(function () {
    $(".warn").click(function () {
        $('.warnb').removeClass('viewbu');
        $('.warnb').addClass('viewb');
    });
});
//ポップアップ的なの消去
$(function () {
    $(".warnb").click(function () {
        $('.warnb').addClass('viewbu');
        $('.warnb').removeClass('viewb');
    });
});


window.addEventListener("scroll", scroll_event);
function scroll_event() {
  if (window.scrollY > 100) {
    $(".scrltop").css("opacity", "100%");;
  } else if (window.scrollY < 100) {
    $(".scrltop").css("opacity", "0%");
  }
}


function hidemain() {
    $('.maincnt').addClass('hidecnt');
    $('.maincnt').removeClass('viewcnt');
}

function hideblog() {
    $('.blog').addClass('hidecnt');
    $('.blog').removeClass('viewcnt');
}

function hideblogcnt() {
    $('.blogcnt').addClass('hidecnt');
    $('.blogcnt').removeClass('viewcnt');
}

function hidelink() {
    $('.clink').addClass('hidecnt');
    $('.clink').removeClass('viewcnt');
}

function viewmain() {
    $('.maincnt').addClass('viewcnt');
    $('.maincnt').removeClass('hidecnt');
    hideblog();
    hideblogcnt();
    hidelink();
}

function viewblog() {
    $('.blog').addClass('viewcnt');
    $('.blog').removeClass('hidecnt');
    hidemain();
    hideblogcnt();
    hidelink();
}

function viewblogcnt() {
    $('.blogcnt').addClass('viewcnt');
    $('.blogcnt').removeClass('hidecnt');
    hidemain();
    hideblog();
    hidelink();
}

function viewlink() {
    $('.clink').addClass('viewcnt');
    $('.clink').removeClass('hidecnt');
    hidemain();
    hideblogcnt();
    hideblog();
}


//ブログボタン
//.blog
$(function () {
    $(".btnblog").click(function () {
        viewblog();
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    });
});
//戻るボタン
//.blogcnt
$(function () {
    $(".backtobl").click(function () {
        viewmain();
        window.scroll({
            top: 3000,
            behavior: "smooth",
        });
    });
});
$(function () {
    $(".backtobll").click(function () {
        viewmain();
        window.scroll({
            top: 1500,
            behavior: "smooth",
        });
    });
});
//ブログ表示
$(function () {
    $(".btnmain").click(function () {
        viewblog();
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    });
});
//MD表示
$(function () {
    $(".gocnt").click(function () {
        viewblogcnt();
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    });
});
//.clink
$(function () {
    $(".vlink").click(function () {
        viewlink();
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    });
});
$(function () {
    $(".top").click(function () {
        viewmain();
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    });
});

$(function () {
    $(".scrltop").click(function () {
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    });
});

//ハッシュ取得
var anchor = location.hash;
$(function () {
    if (anchor == "#blog") {
        viewblog();
    }
});
$(function () {
    if (anchor == "#blogcntv") {
        viewblogcnt();
    }
});
$(function () {
    if (anchor == "#vlink") {
        viewlink();
    }
});