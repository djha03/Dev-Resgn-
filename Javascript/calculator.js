// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
  return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Function to divide two numbers
function divide(a, b) {
  if (b === 0) {
    return "Error: Cannot divide by zero!";
  }
  return a / b;
}

// Main calculator function
function calculator() {
  // Prompt user for input
  const num1 = prompt("Enter the first number:");
  const operator = prompt("Enter the operator (+, -, *, /):");
  const num2 = prompt("Enter the second number:");

  let result;

  // Perform calculation based on operator
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    default:
      result = "Invalid operator!";
  }

  // Display result
  console.log("Result:", result);
}

// Call the calculator function
calculator();
