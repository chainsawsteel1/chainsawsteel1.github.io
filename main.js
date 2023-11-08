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
        $('.blog').addClass('viewcnt');
        $('.maincnt').addClass('hidecnt');
        $('.blog').removeClass('hidecnt');
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
        $('.blog').removeClass('viewcnt');
        $('.maincnt').removeClass('hidecnt');
        $('.blog').addClass('hidecnt');
        window.scroll({
            top: 10000000000,
            behavior: "smooth",
        });
    });
});


//ハッシュ取得
var anchor = location.hash;
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
    if (query == "?page=2") {
        // パラメータの値が ?page=2 の場合に実行する処理
    }
});



$(function () {
    $(".gocnt").click(function () {
        $('.f5').removeClass('viewbu');
        $('.f5').addClass('viewb');
    });
});