var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Encyclopedia = /** @class */ (function (_super) {
    __extends(Encyclopedia, _super);
    function Encyclopedia(title, year, edition) {
        var _this = _super.call(this, title, year) || this;
        _this.title = title;
        _this.year = year;
        _this.edition = edition;
        return _this;
    }
    Encyclopedia.prototype.printItem = function () {
        console.log(this.title + " was published in " + this.year + " by " + ReferenceItem.department + " \n        Edition: " + this.edition);
    };
    Encyclopedia.prototype.printCitation = function () {
        console.log(this.title + " - " + this.year);
    };
    return Encyclopedia;
}(ReferenceItem));
var refBook = new Encyclopedia("testTitle", 2021, 1);
refBook.printItem();
refBook.printCitation();
