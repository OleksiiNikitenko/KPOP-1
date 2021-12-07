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

function createCustomerID (name: string, id: number){
    return name + " " + id;
}

let myID = createCustomerID("Ann", 10)
console.log(myID)

let IdGenerator = ({name, id}) => createCustomerID(name, id)
let cust = {name: "ABOBA", id: 8}
console.log(IdGenerator(cust))