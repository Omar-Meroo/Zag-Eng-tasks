

const form = document.querySelector("#inputs");
const inputnum1 = document.querySelector("#num1");
const inputopt = document.querySelector("#opt");
const inputnum2 = document.querySelector("#num2");
const display = document.querySelector("#display");
const btn = document.querySelector("button");

console.log(num1);
console.log(opt);
console.log(num2);
console.log(display);
console.log(btn);


btn.onclick = () => {
    const num1 = inputnum1.value;
    const opt = inputopt.value;
    const num2 = inputnum2.value;
    let res = 0;

    switch (opt) {
        case "+": res = +num1 + +num2;
            break;
        case "-": res = num1 - num2;
            break;
        case "*": res = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                res = num1 / num2;
            }
            break;

        default: "Undifined";

    }
    display.textContent = res;
}