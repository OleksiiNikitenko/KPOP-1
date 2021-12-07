function getAllworkers() {
    var workers = [
        { id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.QA },
        { id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Designer },
        { id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.BusinessAnalyst },
        { id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer }
    ];
    return workers;
}
var Category;
(function (Category) {
    Category["BusinessAnalyst"] = "Business analyst";
    Category["Developer"] = "Developer";
    Category["Designer"] = "Designer";
    Category["QA"] = "QA";
    //ScrumMaster = "Scrum master"
})(Category || (Category = {}));
function createCustomerID(name, id) {
    return name + " " + id;
}
var myID = createCustomerID("Ann", 10);
console.log(myID);
var IdGenerator = function (_a) {
    var name = _a.name, id = _a.id;
    return createCustomerID(name, id);
};
var cust = { name: "ABOBA", id: 8 };
console.log(IdGenerator(cust));
