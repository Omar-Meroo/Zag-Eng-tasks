
let num1 = Number(prompt("Enter num1:"));
let operator = prompt("Enter operator (+, -, *, /):");
let num2 = Number(prompt("Enter num2:"));

let result;


switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":

        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "Error: Division by zero!";
        }
        break;
    default:
        result = "Invalid operator!";
}


console.log("Result = " + result);