"use strict";
//Any programs
let value_any;
value_any = 20;
console.log(value_any);
value_any = "Tejaswini";
console.log(value_any);
value_any = true;
console.log(value_any);
//Unknown programs
let data = "mahabharatham";
if (typeof data === "string") {
    console.log(data.toUpperCase());
}
let num = 200;
if (typeof num === "number") {
    console.log(num + 30);
}
//Void programs
function displayName(name) {
    console.log("Name: " + name);
}
displayName("Teju!!");
function greet() {
    console.log("Wooow what a surprise!!");
}
greet();
//Never programs
function showError(message) {
    throw new Error(message);
}
//showError("Something went wrong!"); //Uncomment to see the error
function runForever() {
    while (true) {
        console.log("Running...");
    }
}
//runForever(); // Don't run, infinite loop
console.log("Have a good day everyday!!");
