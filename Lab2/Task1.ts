interface worker {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: Category;
}

enum Category {
    "BusinessAnalyst" = "Business analyst",
    Developer = "Developer",
    Designer = "Designer",
    QA = "QA",
    ScrumMaster = "Scrum master"
}

function getAllworkers(): worker[] {
    let workers = [
        {id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: Category.QA},
        {id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: Category.Designer},
        {id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: Category.BusinessAnalyst},
        {id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: Category.Developer}
    ]
    return workers;
}

const getWorkerByID = (inputId: number) => getAllworkers().forEach(worker => {
    if (worker.id == inputId) {
        console.log(worker.name + " " + worker.surname + ": " + worker.salary)
    }
})

const test: worker = {
    id: 1,
    name: "axmed",
    surname: "sheikh",
    available: true,
    salary: Category.QA,
}


function PrintWorker(worker: worker): void {
    console.log(`${worker.name} ${worker.surname} got salary ${worker.salary}`)
}

getAllworkers().forEach(worker => {
    PrintWorker(worker)
})