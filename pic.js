$(window).scroll(function() {
        var scroll = $(window).scrollTop();//スクロール値を定義
    //header-imgの背景
	$('#header-img').css({
			transform: 'scale('+(100 + scroll/10)/100+')',//スクロール値を代入してscale1から拡大.scroll/10の値を小さくすると拡大値が大きくなる
			top: -(scroll/50)  + "%",//スクロール値を代入してtopの位置をマイナスにずらす
        });
    });
