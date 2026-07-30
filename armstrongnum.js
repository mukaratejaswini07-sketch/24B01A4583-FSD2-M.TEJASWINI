import promptSync from "prompt-sync";
const prompt = promptSync();
// Get input from the user
let num = Number(prompt("Enter a number: "));
let original = num; // Store the original number
let sum = 0;
// Count the number of digits
let digits = num.toString().length;
// Calculate the sum of each digit raised to the power of the number of digits
while (num > 0) {
    let digit = num % 10; // Get the last digit
    sum = sum + digit ** digits; // Add digit^digits to sum
    num = Math.floor(num / 10); // Remove the last digit
}
// Check if the number is an Armstrong number
if (sum === original) {
    console.log(original + " is an Armstrong number.");
}
else {
    console.log(original + " is not an Armstrong number.");
}
