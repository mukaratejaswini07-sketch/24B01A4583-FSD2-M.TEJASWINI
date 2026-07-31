let text = "programming";
let result = "";

for (let char of text) {
    if (!result.includes(char)) {
        result += char;
    }
}

console.log(result);