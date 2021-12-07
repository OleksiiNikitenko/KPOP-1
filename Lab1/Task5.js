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
function createCustomer(name, age, city) {
    var log = "log:  " + name + " ";
    if (age !== undefined) {
        log += "| " + age + " ";
    }
    if (city !== undefined) {
        log += "| " + city + " ";
    }
    return log;
}
var person = createCustomer("Oleksii", 20, "Kyiv");
console.log(createCustomer("Oleksii"));
console.log(createCustomer("Oleksii", 20));
console.log(person);
function getWorkersNamesByCategory(category) {
    if (category === void 0) { category = Category.Designer; }
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
console.log(getWorkersNamesByCategory());
function logFirstAvailable(workers) {
    if (workers === void 0) { workers = getAllworkers(); }
    console.log(workers.length);
    for (var i = 0; i < workers.length; i++) {
        if (workers[i].available)
            console.log(workers[i].Name, "|", workers[i].surname);
    }
    for (var _i = 0, workers_2 = workers; _i < workers_2.length; _i++) {
        var worker = workers_2[_i];
        console.log(worker);
    }
}
logFirstAvailable();
var getWorkerByID = function (inputId) { return getAllworkers().forEach(function (worker) {
    if (worker.id == inputId) {
        console.log(worker.Name + " " + worker.surname + ": " + worker.salary);
    }
}); };
function checkoutWorkers(customer) {
    var workerIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        workerIDs[_i - 1] = arguments[_i];
    }
    var workers = getAllworkers();
    var res = [];
    res.push("log for : " + customer);
    // for (let worker of workerIDs) {
    //     if(workers[workerIDs[worker]].available == true){
    //         getWorkerByID(workerIDs[worker])
    //         res.push(`${workers[workerIDs[worker]].Name} | ${workers[workerIDs[worker]].surname}` )
    //     }
    // }
    // for (let i in workerIDs) {
    //     console.log(`idWOR: ${workerIDs[i].valueOf()} || workers[i]: ${workers[i].available}`)
    //     let id = workerIDs[i].valueOf()
    //     if (workers[id].available)
    //         console.log(workers[i].Name, "|", workers[i].surname)
    // }
    for (var i = 0; i < workers.length; i++) {
        for (var j = 0; j < workerIDs.length; j++) {
            if (workers[i].available && workers[i].id == workerIDs[j]) {
                getWorkerByID(workers[i].id);
                res.push(workers[i].Name + " | " + workers[i].surname);
            }
        }
    }
    return res;
}
var myWorkers = checkoutWorkers('Ann', 1, 2, 4);
myWorkers.forEach(function (worker) { return console.log(worker); });
