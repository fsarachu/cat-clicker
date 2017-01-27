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

var ViewModel = function () {
    this.currentCat = ko.observable(new Cat({clickCount: 0, name: "Bob", picture: "images/bob.jpg"}));

    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
    }
};

ko.applyBindings(new ViewModel());