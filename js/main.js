function Cat(name, image) {
    this.name = name;
    this.image = image;
    this.clicks = 0;
    this.toHtml = function () {
        var html = "<div class='col-sm-6 text-center'>" +
            "<h2>" + this.name + ": <span class='clicks'>" + this.clicks + "</span></h2>" +
            "<img src='images/" + this.image + "' alt='A picture of " + this.name + "' class='cat img-responsive center-block'>" +
            "</div>";

        return html;
    }
}

$(function () {
    var $catContainer = $("#cat-container");
    $catContainer.append($("<h1>All cats will display here</h1>"));
});