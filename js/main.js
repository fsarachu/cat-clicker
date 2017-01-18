function Cat(name, image) {
    this.name = name;
    this.image = "images/" + image;
    this.clicks = 0;
}

$(function () {
    var cat_html = "<div class='col-sm-6 text-center'>" +
        "<h2>{name}: <span class='clicks'>{clicks}</span></h2>" +
        "<img src='{image}' alt='A picture of {name}' class='cat img-responsive center-block'>" +
        "</div>";

    var $catContainer = $("#cat-container");
    $catContainer.append($("<h1>All cats will display here</h1>"));
});