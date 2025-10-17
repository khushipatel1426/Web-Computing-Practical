// calculator.js

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("🧮 Simple Node.js Calculator");
console.log("Operations: add, sub, mul, div");

rl.question("Enter first number: ", (num1) => {
  rl.question("Enter second number: ", (num2) => {
    rl.question("Enter operation (add/sub/mul/div): ", (operation) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);
      let result;

      switch (operation.toLowerCase()) {
        case "add":
          result = a + b;
          break;
        case "sub":
          result = a - b;
          break;
        case "mul":
          result = a * b;
          break;
        case "div":
          result = b !== 0 ? a / b : "Error: Division by zero";
          break;
        default:
          result = "Invalid operation";
      }

      console.log(`Result: ${result}`);
      rl.close();
    });
  });
});
