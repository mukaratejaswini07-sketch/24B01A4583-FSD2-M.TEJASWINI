namespace MathOperations {

    export function add(a: number, b: number): number {
        return a + b;
    }

    export function subtract(a: number, b: number): number {
        return a - b;
    }

    export function multiply(a: number, b: number): number {
        return a * b;
    }

    export function divide(a: number, b: number): number {
        return a / b;
    }
}

console.log("Add:", MathOperations.add(10, 5));
console.log("Subtract:", MathOperations.subtract(10, 5));
console.log("Multiply:", MathOperations.multiply(10, 5));
console.log("Divide:", MathOperations.divide(10, 5));