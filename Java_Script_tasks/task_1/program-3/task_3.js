let score = Number(prompt("Enter score:"));

if (score > 100 || score < 0) {
    console.log("does not Exist");
} else if (score >= 90) {
    console.log("your score is: A");
} else if (score >= 80) {
    console.log("your score is: B");
} else if (score >= 70) {
    console.log("your score is: C");
} else {
    console.log(" you are Fail");
}