$(document).ready(function () {
        //対象の配列
        const subjectArray = [
            "Firefoxを推奨したいが、chromium系のが快適という事実",
            "戻る操作をするとLoadingで固まることがある",
            "Starter Quests Of Create",
            "余計な待ち時間をあなたへ",
            "SEOのこと考えてたらこんな構造にはしないよね普通"
        ];
        //ランダムに1つ取得
        const subject = subjectArray[Math.floor(Math.random() * subjectArray.length)];
        //書き出す
        document.getElementById("tips").innerText = subject;
});