/*
myArray =  ['one', 'two', 'three'];
const myArrayHtml = myArray.map(funtion (array) {
    return `<li>${array}</li>`;
});
document.getElementById("myList").innerHTML = myArrayHtml.join();
*/

const steps = ["one", "two", "three"];
const stepsHtml = steps.map(function (step) {
  return `<li>${step}</li>`;
});
document.getElementById("myList").innerHTML = stepsHtml.join();

const grades = ['A', 'B', 'A'];

function convertGrade(grade) {
    let gpa = 0
    if (grade === 'A') {
        gpa = 4;
    } else {
        gpa = 3;
    }
    return gpa;
}

const gpaGrades = grades.map(convertGrade);
console.log(gpaGrades);

const gpa = gpaGrades.reduce((total, point) => total + point, 0)/gpaGrades.length;
console.log(gpa);

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const filteredFruits = fruits.filter((fruit) => fruit.length > 6);
console.log(filteredFruits)

const numbers = [12, 34, 21, 54];
const luckNumber = 21;
console.log(numbers.indexOf(21));