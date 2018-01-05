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
// function subtract(num1, num2) {
//   return num1-num2
// } ----This is wrong had to reread instructions

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