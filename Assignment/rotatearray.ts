let numbers = [1, 2, 3, 4, 5];
let n = 2;

for (let i = 1; i <= n; i++) {
    let last = numbers.pop();
    numbers.unshift(last!);
}

console.log(numbers);