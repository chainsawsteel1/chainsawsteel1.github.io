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
    });
});
//戻るボタン
$(function () {
    $(".btnmain").click(function () {
        $('.maincnt').addClass('viewcnt');
        $('.blog').removeClass('viewcnt');
        $('.maincnt').removeClass('hidecnt');
        $('.blog').addClass('hidecnt');
    });
});