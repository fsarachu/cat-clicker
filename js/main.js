function Cat(id, name, image) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.clicks = 0;
}

$(function () {
    var id = 0;

    var cats = [];
    cats.push(new Cat(id++, "Bob", "bob.jpg"));
    cats.push(new Cat(id++, "Chloe", "chloe.jpg"));
    cats.push(new Cat(id++, "Milo", "milo.jpg"));
    cats.push(new Cat(id++, "Samantha", "samantha.jpg"));
    cats.push(new Cat(id++, "Sophie", "sophie.jpg"));
    cats.push(new Cat(id++, "Tiger", "tiger.jpg"));

    var $catContainer = $("#cat-container");
    var $catList = $("#cat-list");

    cats.forEach(function (cat) {
        $catList.append("<a href='#' class='list-group-item'>" + cat.name +
            "<span class='badge'>" + cat.clicks + "</span></a>");
    });

    $catContainer.on("click", ".cat", function ($e) {
        var $cat = $($e.target);
        var catId = Number(($cat.attr("id")).split("-")[1]);

        var catObject = cats[catId];
        catObject.clicks += 1;

        $cat.parent().find(".clicks").text(catObject.clicks);
    })

});
