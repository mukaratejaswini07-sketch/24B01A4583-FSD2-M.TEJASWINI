"use strict";
// Parent Class
class Hospital {
    // Readonly property
    hospitalId = 501;
    // Static property
    static hospitalName = "Sunrise Care Hospital";
    // Normal property
    patientName;
    // Constructor
    constructor(patientName) {
        this.patientName = patientName;
    }
    // Static method
    static displayHospital() {
        console.log("Hospital Name:", Hospital.hospitalName);
    }
    // Public method
    displayPatient() {
        console.log("Patient Name:", this.patientName);
        console.log("Hospital ID:", this.hospitalId);
    }
}
// Child Class
class EmergencyWard extends Hospital {
    wardNumber;
    constructor(patientName, wardNumber) {
        super(patientName);
        this.wardNumber = wardNumber;
    }
    displayWardDetails() {
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
