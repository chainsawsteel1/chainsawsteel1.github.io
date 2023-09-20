$(window).on('load resize', function(){
var winW = $(window).width();
var devW = 650;
if (winW <= devW) {
    $(".warn").css("animation-name","warn");
} else {
    $(".warn").css("animation-name","none");
}
});

$(window).on("load", function () {
    $(".load").css("animation-name","load");
    $('.loadmark').addClass('okload');
    $('.font').addClass('okload-b');
});

$(function() {
    $(".iboxo").click(function() {
        $(".ibox").slideToggle();
    });
});

// $(function() {
//     $(".warn").click(function() {
//         $('.warnb').addClass('viewb');
//         $('.warnbg').addClass('viewbg')
//     });
// });

// $(function() {
//     $(".warnb").click(function() {
//         $('.warnb').removeClass('viewb');
//         $('.warnbg').removeClass('viewbg')
//     });
// });