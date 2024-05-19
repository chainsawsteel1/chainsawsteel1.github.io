$(document).ready(function () {
        //対象の配列
        const subjectArray = [
            "Firefoxを推奨したいが、chromium系のが快適という事実",
            "戻る操作をするとLoadingで固まることがある",
            "余計な待ち時間をあなたへ",
        ];
        //ランダムに1つ取得
        const subject = subjectArray[Math.floor(Math.random() * subjectArray.length)];
        //書き出す
        document.getElementById("tips").innerText = subject;
});