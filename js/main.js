function Cat(id, name, image) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.clicks = 0;
    this.toHtml = function () {
        return "<div class='col-sm-6 text-center'>" +
            "<h2>" + this.name + ": <span class='clicks'>" + this.clicks + "</span></h2>" +
            "<img id='cat-" + this.id + "' src='images/" + this.image + "' alt='A picture of " + this.name + "' class='cat img-responsive center-block'>" +
            "</div>";
    }
}

$(function () {
    var id = 0;

    var cats = [];
    cats.push(new Cat(id++, "Bob", "bob.jpg"));
    cats.push(new Cat(id++, "Chloe", "chloe.jpg"));

    var $catContainer = $("#cat-container");

    cats.forEach(function (cat) {
        $catContainer.append(cat.toHtml());
    });

    $catContainer.on("click", ".cat", function ($e) {
        var catElement = $e.target;
        var catId = Number((catElement.id).split("-")[1]);

        var catObject = cats[catId];
        // console.log("Before: " + catObject.clicks);
        catObject.clicks += 1;
        // console.log("After: " + catObject.clicks);
    })

});
