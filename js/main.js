var ViewModel = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable("Bob");
    this.picture = ko.observable("images/bob.jpg");

    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
    }
}

ko.applyBindings(new ViewModel());