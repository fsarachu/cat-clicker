var ViewModel = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable("Bob");
    this.nicknames = ko.observableArray(["Bobby", "Bobbalicious", "Bobo"]);
    this.picture = ko.observable("images/bob.jpg");
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

    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
    }
};

ko.applyBindings(new ViewModel());