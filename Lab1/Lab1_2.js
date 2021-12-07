// enum DayTimeMessage {
//     Morning = "Доброе утро",
//     Evening = "Добрый вечер"
// }
// function welcome(message: DayTimeMessage){
//
//     console.log(message);
// }
function getAllworkers() {
    var workers = [
        { Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.QA },
        { Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Designer },
        { Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.BusinessAnalyst },
        { Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer }
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
function getWorkersNamesByCategory(category) {
    var workers = getAllworkers();
    var identifiedWorkers = [];
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var worker = workers_1[_i];
        if (worker.category === category) {
            identifiedWorkers.push(worker.surname);
        }
    }
    return identifiedWorkers;
}
function logWorkersNames(array) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var string = array_1[_i];
        console.log(string);
    }
}
//
// let mes: DayTimeMessage = DayTimeMessage.Morning;
// welcome(mes);           // Добрый день
// welcome(DayTimeMessage.Evening);    // Добрый вечер
//
// let c: string = Category.QA
// console.log(c)
var identifiedWorkers = getWorkersNamesByCategory(Category.Designer);
logWorkersNames(identifiedWorkers);
