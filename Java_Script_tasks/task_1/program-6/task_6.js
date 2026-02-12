let num1 = Number(prompt("Enter num1:"));
let num2 = Number(prompt("Enter num2:"));
let num3 = Number(prompt("Enter num3:"));

if (num1 >= num2 && num1 >= num3) {
    console.log("the bigest number is: " + num1);
}
else if (num2 >= num1 && num2 >= num3) {
    console.log("the bigest number is: " + num2);
}
else {
    console.log("the bigest number is: " + num3);
}