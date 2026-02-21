const inputNum = document.querySelector("input");
const display = document.querySelector("#display");
const btn = document.querySelector("button");

console.log(inputNum);
console.log(display);
console.log(btn);


btn.onclick = () => {
    const num = inputNum.value;
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum = sum + i;
    }
    display.textContent = `The total sum from 1 to ${num} is:  ${sum}`;
}
