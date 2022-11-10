$(function() {
	// 「TOPに戻る」ボタンがクリックされた時の動きを指定します。
	$("#scroll_to_top").click(function() {
	  // ページの一番上までスクロールさせます。
	  $('body, html').scrollTop(0);
	});
  });