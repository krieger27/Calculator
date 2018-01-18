console.log("this is connected!!");
/*
Create a function that multiplies two numbers
passed in as arguments. Return the product.
*/


function multiply(num1, num2) {
  return num1 * num2
};


/*
Create a function that adds two numbers
passed in as arguments. Return the sum.
*/
function add(num1, num2) {
  return num1 + num2
};

/*
Create a function that subtracts two numbers
passed in as arguments. Return the difference.
*/

function subtract(num1, num2) {
  return num1-num2
};

function calcModulo(num1, num2) {
  return num1 % num2;
}

/*
Create a function that divides two numbers
passed in as arguments. Return the quotient.
*/
function divide(num1, num2){
  return num1/num2
}

/*
Create a function that accepts three arguments.
  1. First number
  2. Second number
  3. A function that performs an operation on them

Return the value of the operation.
*/
function calculate(num1, num2, func) {
  return func(num1, num2);
}

let num1Input = document.getElementById("number");
let num2Input = document.getElementById("number2");

function printToDOM(value) {
  document.getElementById("output").innerHTML = value;
}

// Event Listeners

document.getElementById("addIt").addEventListener("click", function() {
  // get the numbers
  // num1Input value;
  // num2Input value;
  // add the numbers and capture resulting value
  let result = calculate(+num1Input.value, +num2Input.value, add);
  // print the values
  printToDOM(result);
});

document.getElementById("subIt").addEventListener("click", function() {
  let result = calculate(+num1Input.value, +num2Input.value, subtract);
  printToDOM(result);
});

document.getElementById("multIt").addEventListener("click", function() {
  let result = calculate(+num1Input.value, +num2Input.value, multiply);
  printToDOM(result);
});

document.getElementById("divIt").addEventListener("click", function() {
  let result = calculate(+num1Input.value, +num2Input.value, divide);
  printToDOM(result);
});