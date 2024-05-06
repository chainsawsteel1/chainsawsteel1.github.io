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
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTYuMTQyIDJsNS44NTggNS44NTh2OC4yODRsLTUuODU4IDUuODU4aC04LjI4NGwtNS44NTgtNS44NTh2LTguMjg0bDUuODU4LTUuODU4aDguMjg0em0uODI5LTJoLTkuOTQybC03LjAyOSA3LjAyOXY5Ljk0MWw3LjAyOSA3LjAzaDkuOTQxbDcuMDMtNy4wMjl2LTkuOTQybC03LjAyOS03LjAyOXptLTguNDgyIDE2Ljk5MmwzLjUxOC0zLjU2OCAzLjU1NCAzLjUyMSAxLjQzMS0xLjQzLTMuNTY2LTMuNTIzIDMuNTM1LTMuNTY4LTEuNDMxLTEuNDMyLTMuNTM5IDMuNTgzLTMuNTgxLTMuNDU3LTEuNDE4IDEuNDE4IDMuNTg1IDMuNDczLTMuNTA3IDMuNTY2IDEuNDE5IDEuNDE3eiIvPjwvc3ZnPg==" alt="blob">
        <h1>なにか問題が発生したようだ</h1>
    </div>

    `;
});