interface worker {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: Category;
    markPrice?: PriceLogger
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

function PrintWorker(worker: worker): void {
    console.log(`${worker.name} ${worker.surname} got salary ${worker.salary}`)
}

interface PriceLogger {
    (str: string): void;
}

let logPrice = <PriceLogger> function (price: string): void {
    console.log(price)
}

logPrice('1000$')