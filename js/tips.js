$(document).ready(function () {
	tips("tips")
});

function tips(id) {
	//対象の配列
	const subjectArray = [
		"Firefoxを推奨したいが、chromium系のが快適という事実",
		"戻る操作をするとLoadingで固まることがある",
		"余計な待ち時間をあなたへ",
		"<img src=\"/img/sqoc.png\" alt=\"sqoc\" width=\"100px\">",
	];
	//ランダムに1つ取得
	const subject = subjectArray[Math.floor(Math.random() * subjectArray.length)];
	//書き出す
	document.getElementById(id).innerHTML = subject;
}
