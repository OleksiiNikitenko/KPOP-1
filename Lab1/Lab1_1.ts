let str = "Hello World!"
console.log(str)

function getAllworkers() {
    let workers = [
        {Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000},
        {Name: 'Petro', surname: 'Petrov', available: true, salary: 1500},
        {Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600},
        {Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300}
    ]
    return workers;
}

function logFirstAvailable (workers: {Name: string, surname: string, available: boolean, salary: number}[]){

    console.log(workers.length)

    for (let i = 0; i < workers.length; i++) {
        if (workers[i].available)
            console.log(workers[i].Name, "|", workers[i].surname)
    }

    for (const worker of workers) {
        console.log(worker)
    }
}

logFirstAvailable(getAllworkers())