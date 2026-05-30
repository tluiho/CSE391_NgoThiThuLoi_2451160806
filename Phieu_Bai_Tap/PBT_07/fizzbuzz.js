// Version 1: Classic
console.log("=== RUNNING CLASSIC FIZZBUZZ (1-100) ===");

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
console.log("-------------------------------------");

// Version 2: Custom 
console.log("=== RUNNING CUSTOM FIZZBUZZ ===");

function customFizzBuzz(n, rules) {
    for (let i = 1; i <= n; i++) {
        let resultString = "";
        for (let j = 0; j < rules.length; j++) {
            if (i % rules[j].divisor === 0) {
                resultString += rules[j].word;
            }
        }
        if (resultString === "") {
            console.log(i);
        } else {
            console.log(resultString);
        }
    }
}
const myRules = [
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
    { divisor: 7, word: "Jazz" }
];
customFizzBuzz(105, myRules);