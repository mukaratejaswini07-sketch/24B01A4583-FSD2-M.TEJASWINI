let text = "hello";
let frequency: { [key: string]: number } = {};

for (let char of text) {
    if (frequency[char]) {
        frequency[char]++;
    } else {
        frequency[char] = 1;
    }
}

console.log(frequency);