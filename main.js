$(window).on('load',function(){
  $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});


$("#particle").particleText({
text: "‾\_ツ_/‾", // 表示させたいテキスト。改行の場合は<br>追加
colors:["#fff","#ccc", "#ddd"], // パーティクルの色を複数指定可能
speed: "high", // slow, middle, high の3つから粒子が集まる速さを選択
});
