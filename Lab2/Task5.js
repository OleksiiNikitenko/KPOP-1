var ReferenceItem = /** @class */ (function () {
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
        console.log("Creating a new ReferenceItem...");
    }
    ReferenceItem.prototype.printItem = function () {
        console.log(this.title + " was published in " + this.year + " by " + ReferenceItem.department);
    };
    ReferenceItem.prototype.setPublisher = function (newPublisher) {
        this._publisher = newPublisher;
    };
    ReferenceItem.prototype.getPublisher = function () {
        console.log(this._publisher.toUpperCase());
    };
    ReferenceItem.department = "testDepartment";
    return ReferenceItem;
}());
var ref = new ReferenceItem("testTitle", 2021);
ref.printItem();
ref.setPublisher("testPublisher");
ref.getPublisher();
