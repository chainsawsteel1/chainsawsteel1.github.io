$(window).on("load", function () {

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
        load();

    }).fail(function (XMLHttpRequest, status, errorThrown) {
        load();
        document.getElementById("mainmd").innerHTML = `

    <div class="center">
        <img class="tiicon error" src="/img/error.png" alt="fail">
        <h1>なにか問題が発生したようだ</h1>
    </div>

    `;
    });

})

function hash() {
    //ハッシュ取得
    var anchor = location.hash;
    var convert = anchor.replace('#', '')
    var cnt = "<iframe src=\"/html/" + convert + "\" frameborder=\"0\" width=\"100%\" height=\"500px\"></iframe>"
    $(function () {
        document.getElementById("emb").innerHTML = cnt;
        document.getElementById("etitle").innerHTML = convert;
    });
}

//ロード表示
function load() {
    setTimeout(function () {
        $('.loading').addClass('next');
        $('.content').removeClass('load');
        $('.navbar').removeClass('hidee');
        $('.toggle').removeClass('hidee');
        if(Cookies.get('tgl') == 'true'){
            $(".toggle").css("box-shadow", "0px 8px 15px rgb(163, 163, 163)");
        }
        hash();
    }, 400);
}