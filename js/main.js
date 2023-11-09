//画面サイズ
$(window).on('load resize', function () {
    var winW = $(window).width();
    var devW = 400;
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
//相互リンク置き場
$(function () {
    $(".iboxo").click(function () {
        $(".ibox").slideToggle();
    });
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


//ブログボタン
//.blog
$(function () {
    $(".btnblog").click(function () {
        $('.blog').addClass('viewcnt');
        $('.blog').removeClass('hidecnt');
        hidemain();
        hideblogcnt();
        hidelink();
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
        $('.blog').addClass('viewcnt');
        $('.blog').removeClass('hidecnt');
        hidemain();
        hideblogcnt();
        hidelink();
        window.scroll({
            top: 3000,
            behavior: "smooth",
        });
    });
});
//MD表示
$(function () {
    $(".gocnt").click(function () {
        $('.blogcnt').addClass('viewcnt');
        $('.blogcnt').removeClass('hidecnt');
        hidemain();
        hideblog();
        hidelink();
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    });
});
//.clink
$(function () {
    $(".vlink").click(function () {
        $('.clink').addClass('viewcnt');
        $('.clink').removeClass('hidecnt');
        hidemain();
        hideblogcnt();
        hideblog();
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
        $('.blog').addClass('viewcnt');
        $('.blog').removeClass('hidecnt');
        hidemain();
        hideblogcnt();
        hidelink();
    }
});
$(function () {
    if (anchor == "#blogcntv") {
        $('.blogcnt').addClass('viewcnt');
        $('.blogcnt').removeClass('hidecnt');
        hidemain();
        hideblog();
        hidelink();
    }
});
$(function () {
    if (anchor == "#vlink") {
        $('.clink').addClass('viewcnt');
        $('.clink').removeClass('hidecnt');
        hidemain();
        hideblogcnt();
        hideblog();
    }
});