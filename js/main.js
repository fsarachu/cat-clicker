var model = {
    Cat: function Cat(id, name, image) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.clicks = 0;
    },
    cats: [],
    init: function () {
        var id = 0;

        this.cats.push(new this.Cat(id++, "Bob", "bob.jpg"));
        this.cats.push(new this.Cat(id++, "Chloe", "chloe.jpg"));
        this.cats.push(new this.Cat(id++, "Milo", "milo.jpg"));
        this.cats.push(new this.Cat(id++, "Samantha", "samantha.jpg"));
        this.cats.push(new this.Cat(id++, "Sophie", "sophie.jpg"));
        this.cats.push(new this.Cat(id++, "Tiger", "tiger.jpg"));
    }
};

var view = {
    init: function () {
        var cats = octopus.getCats();
        var $catList = $("#cat-list");

        cats.forEach(function (cat) {
            $catList.append("<a data-cat-id=\"" + cat.id + "\" href=\"#\" class=\"list-group-item\">" + cat.name
                + "<span class=\"cat-clicks badge\">" + cat.clicks + "</span></a>");
        });
    },
    renderCat: function (cat) {
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
    },
    updateCounters: function (cat) {
        $("#cat-panel").find(".cat-clicks").text(cat.clicks);
        $("#cat-list").find("a[data-cat-id=" + cat.id + "] .cat-clicks").text(cat.clicks);
    }
};

var octopus = {
    init: function () {
        model.init()
        view.init();

        $("#cat-panel").find(".cat-picture").on("click", function ($e) {
            var $target = $($e.target);
            var catId = parseInt($target.attr("data-cat-id"));

            var cat = model.cats[catId];
            cat.clicks += 1;

            view.updateCounters(cat);
        });

        $("#cat-list").on("click", "a", function ($e) {
            $e.preventDefault();

            var $target = $($e.target);
            $target.parent().find(".active").removeClass("active");
            $target.addClass("active");

            var catId = $target.data("cat-id");

            view.renderCat(model.cats[catId]);
        });

        $("#cat-list").children().first().trigger("click");
    },
    getCats: function () {
        return model.cats;
    }
}

$(function () {
    octopus.init();
});
