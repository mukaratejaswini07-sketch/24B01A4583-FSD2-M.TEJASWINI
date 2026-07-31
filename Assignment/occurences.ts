let numbers = [1, 2, 2, 3, 1, 2];
let count: { [key: number]: number } = {};

for (let number of numbers) {
    if (count[number]) {
        count[number]++;
    } else {
        count[number] = 1;
    }
}

console.log(count);