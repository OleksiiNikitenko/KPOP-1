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
var sayHelloTo = function (name) { return "Hello " + name + "! Nice to meet you!"; };
console.log(sayHelloTo("Oleksii"));
var workers = getAllworkers();
workers.forEach(function (worker) { return console.log(worker); });
var getWorkerByID = function (inputId) { return getAllworkers().forEach(function (worker) {
    if (worker.id == inputId) {
        console.log(worker.Name + " " + worker.surname + ": " + worker.salary);
    }
}); };
getWorkerByID(3);
