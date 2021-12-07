class ReferenceItem {
    // title: string;
    // year: number;

    private _publisher: string
    static department: string = "testDepartment"

    constructor(public title: string,
                protected year: number) {
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

let ref = new ReferenceItem("testTitle", 2021)
ref.printItem()
ref.setPublisher("testPublisher");
ref.getPublisher()
