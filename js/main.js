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
        $catList.append("<a data-cat-id='" + cat.id + "' href='#' class='list-group-item'>" + cat.name
            + "<span class='badge'>" + cat.clicks + "</span></a>");
    });
}

$(function () {
    var cats = catSeeder();
    listPopulator(cats);
});
