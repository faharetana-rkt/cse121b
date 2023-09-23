//Add two numbers
let x = 2 + 3;
console.log(x);

//Multiply two numbers
x = 2 * 3;
console.log(x);

//Subtract one from a number
x = --x;
console.log(x);

//concatinate two strings together.
str1 = "Hello";
str2 = "Nice to meet you";
let string = str1 + " " + str2;
console.log(string);

//assign a value to a variable
let y = 11;
console.log(y);

//increment the value in a variable by 3
y += 3;
console.log(y);

//compare two values to see if they are the same
console.log(x === y);

//check to see if one number is less than another number
console.log(x < y);

//Check to see if two values are NOT equal
console.log(x != y);

//check to see if a value is less than 10 and greater than 0
console.log(x < 10 && x > 0);

let scores = [100, 72, 83, 94, 88, 87];

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
  }