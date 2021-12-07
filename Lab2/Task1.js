var Category;
(function (Category) {
    Category["BusinessAnalyst"] = "Business analyst";
    Category["Developer"] = "Developer";
    Category["Designer"] = "Designer";
    Category["QA"] = "QA";
    Category["ScrumMaster"] = "Scrum master";
})(Category || (Category = {}));
function getAllworkers() {
    var workers = [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: Category.QA },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: Category.Designer },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: Category.BusinessAnalyst },
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: Category.Developer }
    ];
    return workers;
}
var getWorkerByID = function (inputId) { return getAllworkers().forEach(function (worker) {
    if (worker.id == inputId) {
        console.log(worker.name + " " + worker.surname + ": " + worker.salary);
    }
}); };
var test = {
    id: 1,
    name: "axmed",
    surname: "sheikh",
    available: true,
    salary: Category.QA
};
getAllworkers();
function PrintWorker(worker) {
    console.log(worker.name + " " + worker.surname + " got salary " + worker.salary);
}
getAllworkers().forEach(function (worker) {
    PrintWorker(worker);
});
