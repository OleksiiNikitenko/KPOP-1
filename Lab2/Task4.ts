interface Person {
    name: string,
    email: string
}

interface Author extends Person{
    numBookPublished: number
}

interface Librarian extends Person {
    department: string,
    assistCustomer(custName: string): void

}

let favoriteAuthor: Author = {
    name: "",
    email: "",
    numBookPublished: 0
}

// let favoriteLibrarian: Librarian = {
//     name: "",
//     email: "",
//     department: "",
//     assistCustomer(custName: string) {
//     }
// }

class UniversityLibrarian implements Librarian {
    public name: string
    public email: string
    public department: string

    assistCustomer(custName: string) {
        console.log(`${this.name} is assisting ${custName}`)
    }
}

let favoriteLibrarian = new UniversityLibrarian()
favoriteLibrarian.name = "test"
favoriteLibrarian.assistCustomer("test2")