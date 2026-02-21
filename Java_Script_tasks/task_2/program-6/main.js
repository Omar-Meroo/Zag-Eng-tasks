const inputNum1 = document.querySelector("#num1");
const inputNum2 = document.querySelector("#num2");
const inputNum3 = document.querySelector("#num3");
const btn = document.querySelector("button");
const display = document.querySelector("#display");

console.log(inputNum1);
console.log(inputNum2);
console.log(inputNum3);
console.log(btn);
console.log(display);


btn.onclick = () => {
    const num1 = inputNum1.value;
    const num2 = inputNum2.value;
    const num3 = inputNum3.value;
    let big;
    if (num1 >= num2 && num1 >= num3) {
        big = num1;
    }
    else if (num2 >= num1 && num2 >= num3) {
        big = num2;
    }
    else {
        big = num3;
    }
    display.textContent = `The Biggest Number is :${big}`;

}