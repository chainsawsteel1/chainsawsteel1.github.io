$(window).on('load resize', function(){
var winW = $(window).width();
var devW = 500;
if (winW <= devW) {
    $(".warn").css("animation-name","warn");
} else {
    $(".warn").css("animation-name","none");
}
});

$(document).ready(function () {
    $(".ready").css("animation-name","ready");
  });