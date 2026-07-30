"use strict";
// Traditional Function
function calculateEggs(chickens, eggsPerChicken) {
    return chickens * eggsPerChicken;
}
// Arrow Function
const calculateEggsArrow = (chickens, eggsPerChicken) => {
    return chickens * eggsPerChicken;
};
// Shorthand Arrow Function
const calculateEggsShort = (chickens, eggsPerChicken) => chickens * eggsPerChicken;
// Testing the Program
// Using Traditional Method
console.log("Using Traditional Function");
console.log("Total Eggs Produced:", calculateEggs(20, 5));
// Using Arrow Function Method
console.log("\nUsing Arrow Function");
console.log("Total Eggs Produced:", calculateEggsArrow(20, 5));
// Using Shorthand Arrow Function
console.log("\nUsing Shorthand Arrow Function");
console.log("Total Eggs Produced:", calculateEggsShort(20, 5));
// Inline Comparison
console.log("\nInline Comparison");
console.log("Traditional Function:", calculateEggs(12, 6));
console.log("Arrow Function:", calculateEggsArrow(12, 6));
console.log("Shorthand Arrow Function:", calculateEggsShort(12, 6));
// Error 1: Passing string instead of number
// console.log(calculateEggs(20, "5"));
// Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// Error 2: Missing arguments
// console.log(calculateEggsArrow());
// Error: Expected 2 arguments, but got 0.
