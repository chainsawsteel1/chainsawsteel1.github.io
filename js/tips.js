$(document).ready(function () {
        tips("tips")
});

function tips(id) {
    //対象の配列
    const subjectArray = [
        "Firefoxを推奨したいが、chromium系のが快適という事実",
        "戻る操作をするとLoadingで固まることがある",
        "余計な待ち時間をあなたへ",
        "このロード画面は演技ではない。\nしっかりとリアリティを求めたやつだ。\nロード画面なんて要らないだろという考えがこの世の中の大半を締めている。\nなぜそう思われるのか、それは変に時間を消費してしまうからだろう。\n「早く見たい！！！」という人が多い。待てない人が多い中無意味なロード画面を見せられたらそりゃ不満だろう。\n「お前がそう思ってるならこれも消せ」という人が居ると思うがこれは自己満の世界である。他人のものに口を出すが自分のものに対しては気にしない。人間あるある。だがこれはloadのなんかが発火したときに消える用にしているので高速通信環境ではあんま表示されないと思う。5s指定とかしているわけではないので他人との差別化をしているという自身がある。\n誰かに対する逆張りとかですかね。多分そう、そういう人なので。",
        "<img src=\"/img/sqoc.png\" alt=\"sqoc\" width=\"100px\">"
        "画像の著作権AllRightsReservedでよくね"
    ];
    //ランダムに1つ取得
    const subject = subjectArray[Math.floor(Math.random() * subjectArray.length)];
    //書き出す
    document.getElementById(id).innerHTML = subject;
}
