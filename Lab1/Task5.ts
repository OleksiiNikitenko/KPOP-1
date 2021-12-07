function getAllworkers() {
    let workers = [
        {id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.QA},
        {id: 2,Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Designer},
        {id: 3,Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.BusinessAnalyst},
        {id: 4,Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer}
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


function createCustomer(name: string, age?: number, city?: string): string {
    let log = `log:  ${name} `
    if(age!==undefined){ log+= `| ${age} `}
    if(city!==undefined){log+= `| ${city} `}
    return log
}

let person = createCustomer("Oleksii", 20, "Kyiv");
console.log(createCustomer("Oleksii"))
console.log(createCustomer("Oleksii", 20))
console.log(person)

function getWorkersNamesByCategory(category: Category=Category.Designer) {
    let workers = getAllworkers();
    let identifiedWorkers: Array<string> = [];
    for (const worker of workers) {
        if (worker.category === category) {
            identifiedWorkers.push(worker.surname)
        }
    }
    return identifiedWorkers;
}

console.log(getWorkersNamesByCategory())

function logFirstAvailable (workers: {Name: string, surname: string, available: boolean, salary: number}[]=getAllworkers()){

    console.log(workers.length)

    for (let i = 0; i < workers.length; i++) {
        if (workers[i].available)
            console.log(workers[i].Name, "|", workers[i].surname)
    }

    for (const worker of workers) {
        console.log(worker)
    }
}

logFirstAvailable()

const getWorkerByID = (inputId: number) => getAllworkers().forEach(worker => {
    if(worker.id == inputId){
        console.log(worker.Name + " " + worker.surname + ": " + worker.salary)
    }
})

function checkoutWorkers(customer: string, ...workerIDs: number[]){
    const workers = getAllworkers()
    let res: string[] = [];
    res.push(`log for : ${customer}`)
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

    for (let i = 0; i < workers.length; i++) {
        for (let j = 0; j < workerIDs.length; j++) {
            if(workers[i].available && workers[i].id == workerIDs[j]){
                getWorkerByID(workers[i].id)
                res.push(`${workers[i].Name} | ${workers[i].surname}`)
            }
        }
    }
    return res
}

let myWorkers = checkoutWorkers ('Ann', 1, 2, 4)
myWorkers.forEach(worker => console.log(worker))