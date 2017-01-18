function Cat(name, image) {
    this.name = name;
    this.image = "images/" + image;
    this.clicks = 0;
}

$(function () {
    var $catContainer = $("#cat-container");
    $catContainer.append($("<h1>All cats will display here</h1>"));
});