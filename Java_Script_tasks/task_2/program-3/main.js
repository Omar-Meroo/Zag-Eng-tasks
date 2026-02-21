const inputNum = document.querySelector("input");
const display = document.querySelector("#display");
const btn = document.querySelector("button");


console.log(inputNum);
console.log(display);
console.log(btn);


btn.onclick = () => {
    const num = inputNum.value;
    let score = "Unknown";

    if (num > 100 || num < 0) {
        score = "does not Exist";
    }
    else if (num >= 90) {
        score = "your score is : A ";
    }
    else if (num >= 80) {
        score = "your score is : B ";
    }
    else if (num >= 70) {
        score = "your score is : C ";
    }
    else if (num >= 60) {
        score = "your score is : D ";
    }
    else {
        score = "you are fail";
    }

    display.textContent = score;

}
