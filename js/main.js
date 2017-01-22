var model = {
    Cat: function Cat(id, name, image) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.clicks = 0;
    },
    cats: [],
    currentCat: null,
    init: function () {
        var id = 0;

        this.cats.push(new this.Cat(id++, "Bob", "/images/bob.jpg"));
        this.cats.push(new this.Cat(id++, "Chloe", "/images/chloe.jpg"));
        this.cats.push(new this.Cat(id++, "Milo", "/images/milo.jpg"));
        this.cats.push(new this.Cat(id++, "Samantha", "/images/samantha.jpg"));
        this.cats.push(new this.Cat(id++, "Sophie", "/images/sophie.jpg"));
        this.cats.push(new this.Cat(id, "Tiger", "/images/tiger.jpg"));

        this.currentCat = this.cats[0];
    }
};

var view = {
        init: function () {
            this.catDisplay.render();
            this.catList.render();
            this.editCat.hide();
        },
        render: function () {
            this.catDisplay.render();
            this.catList.render();
            this.editCat.render();
        },
        catDisplay: {
            render: function () {
                var cat = octopus.getCurrentCat();

                var $panel = $("#cat-panel");
                var $panelHeading = $panel.find(".panel-heading");
                var $panelBody = $panel.find(".panel-body");

                var $name = $panelHeading.find(".cat-name");
                $name.text(cat.name);

                var $picture = $panelBody.find(".cat-picture");
                $picture.attr("src", cat.image);
                $picture.attr("alt", "A picture of " + cat.name);
                $picture.attr("data-cat-id", cat.id);

                var $clicks = $panelBody.find(".cat-clicks");
                $clicks.text(cat.clicks);
            }
        },
        catList: {
            render: function () {
                var cats = octopus.getCats();
                var $catList = $("#cat-list");

                $catList.html("");

                cats.forEach(function (cat) {
                    $catList.append("<a data-cat-id=\"" + cat.id + "\" href=\"#\" class=\"list-group-item\">" + cat.name
                        + "<span class=\"cat-clicks badge\">" + cat.clicks + "</span></a>");
                });
            }
        },
        editCat: {
            hide: function () {
                $("#admin-btn").show();
                $(".edit-panel").hide();
            },
            show: function () {
                $("#admin-btn").hide();
                $(".edit-panel").show();
            },
            render: function () {
                var cat = octopus.getCurrentCat();
                $("#cat-name-input").val(cat.name);
                $("#cat-picture-input").val(cat.image);
                $("#cat-clicks-input").val(cat.clicks);
            }
        }
    }
    ;

var octopus = {
    init: function () {
        model.init();
        view.init();

        var $catPanel = $("#cat-panel");

        $catPanel.find(".cat-picture").on("click", function () {
            model.currentCat.clicks += 1;
            view.render();
        });

        var $catList = $("#cat-list");

        $catList.on("click", "a", function ($e) {
            $e.preventDefault();

            var $target = $($e.target);

            if (!$target.hasClass("active")) {
                model.currentCat = model.cats[$target.data("cat-id")];

                $target.siblings().removeClass("active");
                $target.addClass("active");

                view.catDisplay.render();
                view.editCat.render();
            }
        });

        var $adminBtn = $("#admin-btn");

        $adminBtn.on("click", function () {
            view.editCat.show();
        });

        var $saveBtn = $("#save-btn");

        $saveBtn.on("click", function ($e) {
            $e.preventDefault();

            model.currentCat.name = $("#cat-name-input").val();
            model.currentCat.image = $("#cat-picture-input").val();
            model.currentCat.clicks = parseInt($("#cat-clicks-input").val());

            view.render();
        });

        var $cancelBtn = $("#cancel-btn");

        $cancelBtn.on("click", function ($e) {
            $e.preventDefault();

            view.editCat.render();
            view.editCat.hide();
        });

        $catList.children().first().trigger("click");
    },
    getCats: function () {
        return model.cats;
    },
    getCurrentCat: function () {
        return model.currentCat;
    }
};

$(function () {
    octopus.init();
});
