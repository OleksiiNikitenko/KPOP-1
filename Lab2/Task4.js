var favoriteAuthor = {
    name: "",
    email: "",
    numBookPublished: 0
};
// let favoriteLibrarian: Librarian = {
//     name: "",
//     email: "",
//     department: "",
//     assistCustomer(custName: string) {
//     }
// }
var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name + " is assisting " + custName);
    };
    return UniversityLibrarian;
}());
var favoriteLibrarian = new UniversityLibrarian();
favoriteLibrarian.name = "test";
favoriteLibrarian.assistCustomer("test2");
