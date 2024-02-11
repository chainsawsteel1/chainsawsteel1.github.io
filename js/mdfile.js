//jquery使ってURL解析
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
        let converter = new showdown.Converter();
        converter.setFlavor('github');

        // ?記号以降の文字列を取得
        let filename = "/md/" + (window.location.search.substring(1)) + ".md";

        let text = await (await fetch(filename)).text();

        /**
         * @type {string}
        */
        let html = converter.makeHtml(text);

        document.getElementById("mainmd").innerHTML = html;

        const waitLoading = document.getElementsByClassName("wait_loading")
        for (let i = 0; i < waitLoading.length; i++) {
            waitLoading.item(i).classList.remove("wait_loading");
        }
    }

    window.addEventListener(
        "hashchange",
        loadMarkdown,
        false,
    );

    loadMarkdown();

}).fail(function (XMLHttpRequest, status, errorThrown) {
    document.getElementById("mainmd").innerHTML = `

    <div class="center">
        <img src="https://r2.tkngh.jp//e13f488d-eb56-4d31-9796-0d93adaf257e.webp" alt="blob">
        <h1>なにか問題が発生したようだ</h1>
    </div>

    `;
});