const inputNum = document.querySelector("input");
const btn = document.querySelector("button");
const display = document.querySelector("#display");



console.log(inputNum);
console.log(display);
console.log(btn);

btn.onclick = () => {
    const num = inputNum.value;
    let result = "Unknown";

    if (num % 2 === 0) {
        result = "Number is Even"
    }
    else {
        result = "Number is Odd";
    }
    display.textContent = result;


}