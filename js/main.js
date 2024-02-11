//画面サイズ
$(window).on('load resize', function () {
    var winW = $(window).width();
    var devW = 650;
    if (winW <= devW) {
        $("body").css("width", "100%");
    } else {
        $("body").css("width", "60%");
    }
});

//navbarの透過
window.addEventListener("scroll", opacity_nav);
var heig = 10;
function opacity_nav() {
  if (window.scrollY > heig) {
    $('.navbar').addClass('shadow');
  } else if (window.scrollY < heig) {
    $('.navbar').removeClass('shadow');
  }
}