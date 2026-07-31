class Student {
    readonly studentId: number;
    name: string;

    constructor(id: number, name: string) {
        this.studentId = id;
        this.name = name;
    }

    display(): void {
        console.log("Student ID:", this.studentId);
        console.log("Name:", this.name);
    }
}

let student = new Student(101, "Anu");

student.display();