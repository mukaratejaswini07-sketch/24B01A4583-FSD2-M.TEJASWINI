class Employee {
    public name: string = "Arun";
    private salary: number = 30000;
    protected department: string = "IT";

    display(): void {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }
}

class Manager extends Employee {
    showDepartment(): void {
        console.log("Department:", this.department);
    }
}

let employee = new Employee();
employee.display();

let manager = new Manager();
manager.showDepartment();