let number = 28;
let sum = 0;

for (let i = 1; i < number; i++) {
    if (number % i == 0) {
        sum += i;
    }
}

console.log(sum == number ? "Perfect" : "Not Perfect");