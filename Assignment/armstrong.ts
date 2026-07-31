let number = 407;
let original = number;
let total = 0;
let count = number.toString().length;

while (original > 0) {
    let digit = original % 10;
    total = total + digit ** count;
    original = Math.floor(original / 10);
}

console.log(total == number ? "Armstrong Number" : "Not an Armstrong Number");