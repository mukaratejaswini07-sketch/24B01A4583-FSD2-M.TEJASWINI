import promptSync from "prompt-sync";
const prompt = promptSync();
let num1 = Number(prompt("Enter the first number: "));
let num2 = Number(prompt("Enter the second number: "));
let gcd = 1;
// Find GCD
for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
        gcd = i;
    }
}
// Find LCM
let lcm = (num1 * num2) / gcd;
console.log("GCD =", gcd);
console.log("LCM =", lcm);
