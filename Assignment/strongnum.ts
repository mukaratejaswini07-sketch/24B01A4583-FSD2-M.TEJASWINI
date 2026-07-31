let number = 145;
let original = number;
let sum = 0;

while (original > 0) {
    let digit = original % 10;
    let factorial = 1;

    for (let i = 1; i <= digit; i++) {
        factorial *= i;
    }

    sum += factorial;
    original = Math.floor(original / 10);
}

console.log(sum == number ? "Strong" : "Not Strong");