function notf() {
  return $.ajax({
    type: "GET",
    url: let = "/md/" + (window.location.search.substring(1)) + ".md",
    cache: false,
  })
}

notf().done(function (data, status, xhr) {
/**
 * @return {Promise<void>}
 */

const loadMarkdown = async () => {
  try {
    let converter = new showdown.Converter();
    converter.setFlavor('github');

    // ?記号以降の文字列を取得
    let filename = "/md/" + (window.location.search.substring(1) || '404') + ".md";

    let text = await (await fetch(filename)).text();
    console.log(text);

    if (text.match(new RegExp("<pre>Cannot GET .*/.md</pre>"))) {
      throw new Error("ファイル見つからん");
    }

    /**
     * @type {string}
    */
    let html = converter.makeHtml(text);

    document.getElementById("blogmd").innerHTML = html;

    const waitLoading = document.getElementsByClassName("wait_loading")
    for (let i = 0; i < waitLoading.length; i++) {
      waitLoading.item(i).classList.remove("wait_loading");
    }
  } catch (e) {
    console.error(e);
    document.getElementById("blogmd").innerHTML = `<h2>存在しないMDファイルを指定しているようです</h2>`;
  }
}

window.addEventListener(
  "hashchange",
  loadMarkdown,
  false,
);

loadMarkdown();

}).fail(function (XMLHttpRequest, status, errorThrown) {
  document.getElementById("blogmd").innerHTML = `<h2>存在しないMDファイルを指定しているようです</h2>`;
});