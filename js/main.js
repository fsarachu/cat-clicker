var Cat = function (name, picture) {
    this.clickCount = ko.observable(0);
    this.name = ko.observable(name);
    this.picture = ko.observable(picture);
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

var ViewModel = function () {
    this.currentCat = ko.observable(new Cat("Bob", "images/bob.jpg"));

    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
    }
};

ko.applyBindings(new ViewModel());