function Cat(id, name, image) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.clicks = 0;
    this.toHtml = function () {
        var html = "<div class='col-sm-6 text-center'>" +
            "<h2>" + this.name + ": <span class='clicks'>" + this.clicks + "</span></h2>" +
            "<img id='cat-" + this.id + "' src='images/" + this.image + "' alt='A picture of " + this.name + "' class='cat img-responsive center-block'>" +
            "</div>";

        return html;
    }
}

$(function () {
    var id = 0;

    var cats = [];
    cats.push(new Cat(id++, "Bob", "bob.jpg"));
    cats.push(new Cat(id++, "Chloe", "chloe.jpg"));

    var $catContainer = $("#cat-container");

    cats.forEach(function (cat, index) {
        $catContainer.prepend(cat.toHtml());
    });

    $("#cat-container").on("click", ".cat", function (target) {
        null;
    })

});
