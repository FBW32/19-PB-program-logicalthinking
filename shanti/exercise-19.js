// Inputs & Outputs
// Write down pseudo-code on pen and paper for the following patterns:
/*1.
    Input	Output
    2, 5	5
    0, 100	100
    52, 35	52
*/
// -let a be the first input. let b be the second input. If a is greater than b , print a . else print b.

let a = 2;
let b = 5;
let result1 = (a > b) ? "2" : "5";
console.log(result1); // 5

let c = 0;
let d = 100;
let result2 = (c > d) ? "0" : "100";
console.log(result2); // 100

let e = 52;
let f = 35;
let result3 = (e > f) ? "52" : "35";
console.log(result3); // 52


/* 2.
    Input	Output
    5, 5	true
    40, 40	true
    50, 51	false
*/
let num1 = 5;
let num2 = 5;
console.log((num1 === num2) ? 'true' : 'false'); // true
let num3 = 40;
let num4 = 40;
console.log((num3 === num4) ? 'true' : 'false'); // true
let num5 = 50;
let num6 = 51;
console.log((num5 === num6) ? 'true' : 'false'); // false

/* 3. 
    Input	   Output
    110, 100	true
    150, 100	true
    50, 100	    false
*/
let n1 = 110;
let n2 = 100;
console.log((n1 > n2) ? 'true' : 'false');  // true  
let n3 = 150;
let n4 = 100;
console.log((n3 > n4) ? 'true' : 'false'); // true
let n5 = 50;
let n6 = 100;
console.log((n5 > n6) ? 'true' : 'false'); // false
