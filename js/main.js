var Cat = function (data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.picture = ko.observable(data.picture);
    this.level = ko.computed(function () {
        var level;

        if (this.clickCount() < 3) {
            level = "Infant";
        } else if (this.clickCount() < 6) {
            level = "Toddler";
        } else if (this.clickCount() < 13) {
            level = "Child";
        } else if (this.clickCount() < 21) {
            level = "Teenager";
        } else {
            level = "Adult";
        }

        return level;
    }, this);
};

var initialCats = [
    {
        clickCount: 0,
        name: "Bob",
        picture: "images/bob.jpg"
    },
    {
        clickCount: 0,
        name: "Chloe",
        picture: "images/chloe.jpg"
    },
    {
        clickCount: 0,
        name: "Milo",
        picture: "images/milo.jpg"
    },
    {
        clickCount: 0,
        name: "Samantha",
        picture: "images/samantha.jpg"
    },
    {
        clickCount: 0,
        name: "Sophie",
        picture: "images/sophie.jpg"
    },
    {
        clickCount: 0,
        name: "Tiger",
        picture: "images/tiger.jpg"
    }
];

var ViewModel = function () {
    var that = this;

    that.cats = ko.observableArray();

    initialCats.forEach(function (cat) {
        that.cats.push(new Cat(cat));
    });

    that.currentCat = ko.observable(that.cats()[0]);

    that.incrementCounter = function () {
        that.currentCat().clickCount(that.currentCat().clickCount() + 1);
    };

    that.setCurrentCat = function (clickedCat) {
        that.currentCat(clickedCat);
    }
};

ko.applyBindings(new ViewModel());