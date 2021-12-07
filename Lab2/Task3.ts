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

let favoriteLibrarian: Librarian = {
    name: "",
    email: "",
    department: "",
    assistCustomer(custName: string) {
    }
}