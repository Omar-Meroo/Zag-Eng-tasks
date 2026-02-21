const inputNum = document.querySelector("input");
const btn = document.querySelector("button");
const display = document.querySelector("#display");

console.log(inputNum);
console.log(btn);
console.log(display);


btn.onclick = () => {
    const num = inputNum.value;
    let result = 0;
    display.textContent = "";
    for (let i = 1; i <= 12; i++) {
        result = num * i;
        display.innerText += `${num} * ${i} = ${result}\n`;
    };
}
