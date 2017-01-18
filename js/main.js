$(function () {
    $cat = $("#cat");
    $clicks = $("#clicks");

    var clickCount = 0;
    $clicks.text(clickCount);

    $cat.on("click", function () {
        clickCount += 1;
        $clicks.text(clickCount);
    });
});