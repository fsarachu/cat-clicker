function Cat(id, name, image) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.clicks = 0;
}

function catSeeder() {
    var id = 0;

    var cats = [];
    cats.push(new Cat(id++, "Bob", "bob.jpg"));
    cats.push(new Cat(id++, "Chloe", "chloe.jpg"));
    cats.push(new Cat(id++, "Milo", "milo.jpg"));
    cats.push(new Cat(id++, "Samantha", "samantha.jpg"));
    cats.push(new Cat(id++, "Sophie", "sophie.jpg"));
    cats.push(new Cat(id++, "Tiger", "tiger.jpg"));

    return cats;
}

function listPopulator(cats) {
    var $catList = $("#cat-list");

    cats.forEach(function (cat) {
        $catList.append("<a data-cat-id=\"" + cat.id + "\" href=\"#\" class=\"list-group-item\">" + cat.name
            + "<span class=\"cat-clicks badge\">" + cat.clicks + "</span></a>");
    });
}

function displayCat(cat) {
    var $panel = $("#cat-panel");
    var $panelHeading = $panel.find(".panel-heading");
    var $panelBody = $panel.find(".panel-body");

    var $name = $panelHeading.find(".cat-name");
    $name.text(cat.name);

    var $picture = $panelBody.find(".cat-picture");
    $picture.attr("src", "images/" + cat.image);
    $picture.attr("alt", "A picture of " + cat.name);
    $picture.attr("data-cat-id", cat.id);

    var $clicks = $panelBody.find(".cat-clicks");
    $clicks.text(cat.clicks);
}

function updateCounters(cat) {
    $("#cat-panel").find(".cat-clicks").text(cat.clicks);
    $("#cat-list").find("a[data-cat-id=" + cat.id + "] .cat-clicks").text(cat.clicks);
}

$(function () {
    var cats = catSeeder();
    listPopulator(cats);

    displayCat(cats[3]);

    $("#cat-panel").find(".cat-picture").on("click", function ($e) {
        var $target = $($e.target);
        var catId = parseInt($target.attr("data-cat-id"));

        var cat = cats[catId];
        cat.clicks += 1;

        updateCounters(cat);
    });

    $("#cat-list").on("click", "a", function ($e) {
        $e.preventDefault();

        var $target = $($e.target);
        $target.parent().find(".active").removeClass("active");
        $target.addClass("active");

        var catId = $target.data("cat-id");
        console.log(catId);
        var cat = cats[catId];
        displayCat(cat);
    });

    $("#cat-list").children().first().trigger("click");
});
