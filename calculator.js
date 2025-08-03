
// Define the add function
function add(number1, number2) {
  return number1 + number2;
}

// Set up the event listener
document.getElementById("add-btn").addEventListener("click", function () {
  // Get values from input fields
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  // Use the add function
  const result = add(num1, num2);

  // Display the result
  document.getElementById("result").textContent = `Result: ${result}`;
});



function subtract(number1, number2) {
return number1 - number2;
}
document.getElementById("sub-btn").addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("num1").value);
  const number2 = parseFloat(document.getElementById("num2").value);
  const result = subtract(number1, number2);
  document.getElementById("result").textContent = `Result: ${result}`;
});

function multiply(number1, number2) {
  return number1 * number2;
}
document.getElementById("mul-btn").addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("num1").value);
  const number2 = parseFloat(document.getElementById("num2").value);
  const result = multiply(number1, number2);
  document.getElementById("result").textContent = `Result: ${result}`;
});

function divide(number1, number2) {
  if (number2 === 0) {
    return "Cannot divide by zero!";
  }
  return number1 / number2;
}


document.getElementById("div-btn").addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("num1").value);
  const number2 = parseFloat(document.getElementById("num2").value);
  const result = divide(number1, number2);
  document.getElementById("result").textContent = `Result: ${result}`;
});

