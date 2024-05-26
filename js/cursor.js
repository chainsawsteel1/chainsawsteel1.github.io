document.addEventListener('mousemove', function (event) {
    const x = event.clientX;
    const y = event.clientY;

    $(".cursorlight").css("top", y-25);
    $(".cursorlight").css("left", x-25);
});