/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers () {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    sum = add(addNumber1, addNumber2);
    document.querySelector("#sum").value = sum;
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers)
/* Function Expression - Subtract Numbers */
const substract = function (number1, number2) {
    return number1 - number2;
};

const substractNumbers = function () {
    let substract1 = Number(document.querySelector("#substract1").value);
    let substract2 = Number(document.querySelector("#substract2").value);
    let substracted = substract(substract1, substract2);
    document.querySelector("#difference").value = substracted;
};

document.querySelector("#substractNumbers").addEventListener("click", substractNumbers);
/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector("#factor1").value);
    let factor2 = Number(document.querySelector("#factor2").value);
    let product = multiply(factor1, factor2);
    document.querySelector("#product").value = product;
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);
/* Open Function Use - Divide Numbers */
const division = (number1, number2) => number1 / number2;

const divideNumbers = () => {
    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);
    let quotient = division(dividend, divisor);
    document.querySelector("#quotient").value = quotient;
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.querySelector("#year").innerHTML = currentYear;


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector("#array").innerHTML = myArray;
/* Output Odds Only Array */
let oddNumbers = myArray.filter((number) => (number % 2) != 0);
document.querySelector("#odds").innerHtml = oddNumbers;

let evenNumbers = myArray.filter((number) => (number % 2) = 0);
document.querySelector("#evens").innerHTML = evenNumbers;
/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
