$(window).on('load resize', function(){
var winW = $(window).width();
var devW = 500;
if (winW <= devW) {
    $(".warn").css("animation-name","warn");
} else {
    $(".warn").css("animation-name","none");
}
});

$(window).on("load", function () {
    $(".load").css("animation-name","load");
    $('.loadmark').addClass('okload');
});

$(function() {
    $(".ibox").click(function() {
        var id = $(this).attr("id").replace(/^q(.+)$/, "a$1");
        $("#" + id).toggle();
        return false;
    });
});