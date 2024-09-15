const select = new Audio('/sound/select.ogg');
const click = new Audio('/sound/click.ogg');



$(function () {
	$('a').hover(
		function () {
			select.currentTime = 0;
			select.play();
		},
		function () {
		}
	);
});

$(function () {
	$('*').click(
		function () {
			click.currentTime = 0;
			click.play();
		}
	);
});