function notf() {
    return $.ajax({
        type: "GET",
        url: $(location).attr('search'),
        cache: false,
    })
}

notf().done(function (data, status, xhr) {
    $('.h404').removeClass('view');
    $('.w404').addClass('view');

}).fail(function (XMLHttpRequest, status, errorThrown) {
    $('.h404').addClass('view');
    $('.w404').removeClass('view');
});