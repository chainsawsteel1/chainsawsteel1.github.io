function settitle() {
    let mylocation = 0

    if (location.search == "") {
        mylocation = "HOME"
    } else if (location.search == "?link") {
        mylocation = "LINK"
    } else if (location.search == "?blog") {
        mylocation = "BLOG"
    } else {
        mylocation = location.search.replace('?', '')
    }

    document.title = 'chAInsのサイト - ' + mylocation;
}

settitle()