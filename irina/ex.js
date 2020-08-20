// # Inputs & Outputs
//https://www.unf.edu/~broggio/cop2221/2221pseu.htm

// Write down pseudo-code on pen and paper for the following patterns:
 

// #### 1.

// | Input  | Output |
// | :----: | :----: |
// |  2, 5  |   5    |
// | 0, 100 |  100   |
// | 52, 35 |   52   |

// if a x is greater than y - print Math.max(x,y);
let x = 2;
let y = 5;
if (x < y) {
    console.log(Math.max(x,y));
}

x = 0;
y = 100;
if (x < y) {
    console.log(Math.max(x,y));
}

// #### 2.

// | Input  | Output |
// | :----: | :----: |
// |  5, 5  |  true  |
// | 40, 40 |  true  |
// | 50, 51 | false  |
//if x == y - print true / else print false

x = 50;
y = 51;
let result;
if (x === y) {
    result = true;
}
else {
    result = false;
}
console.log(result);
//OR
console.log((x === y) ? true : false);

// #### 3.

// |  Input   | Output |
// | :------: | :----: |
// | 110, 100 |  true  |
// | 150, 100 |  true  |
// | 50, 100  | false  |
//if x > y - print true / else print false
