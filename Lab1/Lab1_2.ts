function getAllworkers() {
    let workers = [
        {Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.QA},
        {Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Designer},
        {Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.BusinessAnalyst},
        {Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer}
    ]
    return workers;
}

enum Category {
    "BusinessAnalyst" = "Business analyst",
    Developer = "Developer",
    Designer = "Designer",
    QA = "QA"
    //ScrumMaster = "Scrum master"
}


function getWorkersNamesByCategory(category: Category) {
    let workers = getAllworkers();
    let identifiedWorkers: Array<string> = [];
    for (const worker of workers) {
        if (worker.category === category) {
            identifiedWorkers.push(worker.surname)
        }
    }
    return identifiedWorkers;
}

function logWorkersNames(array: string[]): void {
    for (const string of array) {
        console.log(string)
    }
}




let identifiedWorkers: Array<string> = getWorkersNamesByCategory(Category.Designer)
logWorkersNames(identifiedWorkers)