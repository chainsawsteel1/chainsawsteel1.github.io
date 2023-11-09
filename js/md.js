/**
 * @return {Promise<void>}
 */

const loadMarkdown = async () => {
  try {
    let converter = new showdown.Converter();
    converter.setFlavor('github');

    // ?記号以降の文字列を取得
    let filename = "md/" + (window.location.search.substring(1));

    let text = await (await fetch(filename)).text();
    console.log(text);

    if (text.match(new RegExp("<pre>Cannot GET .*\.md</pre>"))) {
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
    document.getElementById("blogmd").innerHTML = `<p>ファイル見つからん</p>`;
  }
}

window.addEventListener(
  "hashchange",
  loadMarkdown,
  false,
);

loadMarkdown();