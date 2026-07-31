let numbers = [1, 2, 3, 5, 6];
let n = 6;
let total = 0;

for (let i = 1; i <= n; i++) {
    total += i;
}

for (let number of numbers) {
    total -= number;
}

console.log("Missing Number:", total);