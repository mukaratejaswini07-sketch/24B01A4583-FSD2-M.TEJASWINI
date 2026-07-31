let start = 10;
let end = 30;

for (let number = start; number <= end; number++) {
    let count = 0;

    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            count++;
        }
    }

    if (count == 2) {
        console.log(number);
    }
}