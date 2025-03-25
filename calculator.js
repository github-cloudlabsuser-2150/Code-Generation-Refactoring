function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

// Example usage:
// console.log(add(2, 3));       // Output: 5
// console.log(subtract(5, 2));  // Output: 3
// console.log(multiply(4, 3));  // Output: 12
// console.log(divide(10, 2));   // Output: 5
