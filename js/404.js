function sample() {
    return $.ajax({
        type: "GET",
        url: $(location).attr('search'),
        cache: false,
    })
}

sample().done(function (data, status, xhr) {
    $('.h404').removeClass('view');
    $('.w404').addClass('view');

}).fail(function (XMLHttpRequest, status, errorThrown) {
    $('.h404').addClass('view');
    $('.w404').removeClass('view');
});