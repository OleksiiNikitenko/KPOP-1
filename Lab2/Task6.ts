class ReferenceItem {
    // title: string;
    // year: number;

    private _publisher: string
    static department: string = "testDepartment"

    constructor(public title: string,
                public year: number) {
        console.log("Creating a new ReferenceItem...")
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year} by ${ReferenceItem.department}`)
    }

    setPublisher(newPublisher: string) {
        this._publisher = newPublisher
    }

    getPublisher() {
        console.log(this._publisher.toUpperCase())
    }
}

class Encyclopedia extends ReferenceItem {

    constructor(public title: string,
                public year: number,
                public edition: number) {
        super(title, year);
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year} by ${ReferenceItem.department} 
        Edition: ${this.edition}`)
    }
}

let refBook = new Encyclopedia("testTitle", 2021, 1)
refBook.printItem()