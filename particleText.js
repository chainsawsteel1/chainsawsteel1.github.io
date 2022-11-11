function GlowAnimeControl() {
	$('.glowAnime').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("glow");

		} else {
			$(this).removeClass("glow");
		}
	});
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	GlowAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	//spanタグを追加する
	var element = $(".glowAnime");
	element.each(function () {
		var text = $(this).text();
		var textbox = "";
		text.split('').forEach(function (t, i) {
			if (t !== " ") {
				if (i < 10) {
					textbox += '<span style="animation-delay: .' + i + 's;">' + t + '</span>';
				} else {
					var n = i / 10;
					textbox += '<span style="animation-delay: ' + n + 's;">' + t + '</span>';
				}

			} else {
				textbox += t;
			}
		});
		$(this).html(textbox);
	});

	GlowAnimeControl();/* アニメーション用の関数を呼ぶ*/
});
