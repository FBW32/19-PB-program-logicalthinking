// Inputs & Outputs
// Write down pseudo-code on pen and paper for the following patterns:

// QUESTION 1.
console.log(" ")
console.log("QUESTION 1")
// Input	Output
// 2, 5	    5
// 0, 100	100
// 52, 35	52

// Let x be the firstValue
// Let y be the secondValue
// If x is greater than y, print- `x`
// else (if y is greater than x), print- `y`

// THUS
let q1Output1 = (2 > 5) ? "2 is greater" : "5 is greater";
console.log(q1Output1)
// 5 is greater

let q1Output2 = (0 > 100) ? `0 is greater` : `100 is greater`;
console.log(q1Output2)
// 100 is greater

let q1Output3 = (52 > 35) ? `52 is greater` : `35 is greater`;
console.log(q1Output3)
// 52 is greater




// QUESTION 2.
console.log(" ")
console.log("QUESTION 2")
// Input	Output
// 5, 5	    true
// 40, 40	true
// 50, 51	false

// Let x be the firstValue
// Let y be the secondValue
// If x is equal y, print- true
// else (if x is equal y), print- false

// THUS
let q2Output1 = (5 === 5) ? true : false;
console.log(q2Output1)
// true

let q2Output2 = (40 === 40) ? true : false;
console.log(q2Output2)
// true

let q2Output3 = (50 === 51) ? true : false;
console.log(q2Output3)
// false




// QUESTION 3.
console.log(" ")
console.log("QUESTION 3")
// Input	    Output
// 110, 100	    true
// 150, 100	    true
// 50, 100	    false

// Let x be the firstValue
// Let y be the secondValue
// If x is greater than y, print- true
// else (if y is greater than x), print- false

// THUS
let q3Output1 = (110 > 100) ? true : false;
console.log(q3Output1)
// true

let q3Output2 = (150 > 100) ? true : false;
console.log(q3Output2)
// true

let q3Output3 = (50 > 100) ? true : false;
console.log(q3Output3)
// false