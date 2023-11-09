//画面サイズ
$(window).on('load resize', function () {
    var winW = $(window).width();
    var devW = 650;
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



//ブログボタン
$(function () {
    $(".btnblog").click(function () {
        $('.maincnt').removeClass('viewcnt');
        $('.maincnt').addClass('hidecnt');
        $('.blog').removeClass('hidecnt');
        $('.blog').addClass('viewcnt');
        $('.blogcnt').removeClass('viewcnt');
        $('.blogcnt').addClass('hidecnt');
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    });
});
//戻るボタン
$(function () {
    $(".btnmain").click(function () {
        $('.maincnt').addClass('viewcnt');
        $('.maincnt').removeClass('hidecnt');
        $('.blog').addClass('hidecnt');
        $('.blog').removeClass('viewcnt');
        $('.blogcnt').addClass('hidecnt');
        $('.blogcnt').removeClass('viewcnt');
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
        $('.maincnt').removeClass('viewcnt');
        $('.maincnt').addClass('hidecnt');
        $('.blog').removeClass('hidecnt');
        $('.blog').addClass('viewcnt');
        $('.blogcnt').removeClass('viewcnt');
        $('.blogcnt').addClass('hidecnt');
    }
});
$(function () {
    if (anchor == "#blogcntv") {
        $('.maincnt').removeClass('viewcnt');
        $('.blogcnt').addClass('viewcnt');
        $('.maincnt').addClass('hidecnt');
        $('.blogcnt').removeClass('hidecnt');
    }
});
//パラメータ取得
var query = location.search;
$(function () {
    if (query == "?page=1") {
        // パラメータの値が ?page=1 の場合に実行する処理
    }
});



$(function () {
    $(".gocnt").click(function () {
        $('.f5').removeClass('viewbuf');
        $('.f5').addClass('viewbf');
    });
});