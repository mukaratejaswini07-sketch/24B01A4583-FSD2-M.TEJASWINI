let number = 10;
let binary = "";

while (number > 0) {
    let remainder = number % 2;
    binary = remainder + binary;
    number = Math.floor(number / 2);
}
console.log("Binary:", binary);