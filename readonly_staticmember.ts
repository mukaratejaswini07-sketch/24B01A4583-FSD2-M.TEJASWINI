// Parent Class
class Hospital {

    // Readonly property
    public readonly hospitalId: number = 501;

    // Static property
    public static hospitalName: string = "Sunrise Care Hospital";

    // Normal property
    public patientName: string;

    // Constructor
    constructor(patientName: string) {
        this.patientName = patientName;
    }

    // Static method
    public static displayHospital(): void {
        console.log("Hospital Name:", Hospital.hospitalName);
    }

    // Public method
    public displayPatient(): void {
        console.log("Patient Name:", this.patientName);
        console.log("Hospital ID:", this.hospitalId);
    }
}


// Child Class
class EmergencyWard extends Hospital {

    public wardNumber: number;

    constructor(patientName: string, wardNumber: number) {
        super(patientName);
        this.wardNumber = wardNumber;
    }

    public displayWardDetails(): void {
        console.log("Ward Number:", this.wardNumber);
        console.log("Patient:", this.patientName);
    }
}


// Main Program

// Accessing static member
Hospital.displayHospital();

// Creating objects
const patient1 = new Hospital("Daniel");

const patient2 = new EmergencyWard("Sophia", 12);


// Display details
console.log("Patient 1 Details");
patient1.displayPatient();

console.log("\nPatient 2 Details");
patient2.displayWardDetails();


// Accessing readonly property
console.log("Hospital ID:", patient1.hospitalId);
