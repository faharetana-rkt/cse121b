//Accepts a callback function and executes the given function once for each element of the array.
//Example | Iterate an array of numbers
const nums = [1,2,3,4,5];
nums.forEach(function(num) {
   console.log(num);
});
/* 
output:
1
4
9
16
25
*/

//Example-2: Iterate an object
const employees = [
    {
        id: 101,
        name: 'Alex',
        sal: 10000
    },
    {
        id: 102,
        name: 'Clark',
        sal: 13000
    },
    {
        id: 103,
        name: 'John',
        sal: 12000
    },
    {
        id: 104,
        name: 'Tony',
        sal: 20000
    }
]
employees.forEach(function(emp) {
    console.log(emp.name.toUpperCase());
});
/*
Output:
ALEX
CLARK
JOHN
TONY
*/

//The map() function creates a new array with the result of calling the callback function on each element of array.
//Example — 1| Square the each element of array and store result into another array
const nums1 = [1,2,3,4,5]
const squareNums = nums1.map(function(num) {
      return num * num;
});
console.log(squareNums); // [1, 4, 9, 16, 25]

//Example — 2 | Create an array of all employee names by fetching employee names from a given object.
const employees1 = [
    {
        id: 101,
        name: 'Alex',
        sal: 10000
    },
    {
        id: 102,
        name: 'Clark',
        sal: 13000
    },
    {
        id: 103,
        name: 'John',
        sal: 12000
    },
    {
        id: 104,
        name: 'Tony',
        sal: 20000
    }
];
const names = employees1.map(function(emp) {
      return emp.name;
});
console.log(names); // ['Alex', 'Clark', 'John', 'Tony']

//Example — 3 | Make abbreviations
const words = ['lol','brb','btw','lmk','g2g'];
const abbreviations = words.map(function(word) {
      return word.toUpperCase().split('').join('.');
});
console.log(abbreviations); // ['L.O.L', 'B.R.B', 'B.T.W', 'L.M.K', 'G.2.G']

//Arrow function makes it easy to write the callback function with compact syntax. Let’s review some to the examples discussed above with arrow function.

const nums2 = [1,2,3,4,5];
nums2.forEach(num => console.log(num * num));

const nums3 = [1,2,3,4,5,6];
const squareNums1 = nums3.map(num => num * num);
console.log(squareNums1); // [1, 4, 9, 16, 25, 36]

const nums4 = [11,2,3,5,4,7,8,10];
const parityList = nums4.map(num => (num%2===0 ? 0 : 1));
console.log(parityList); // [1, 0, 1, 1, 0, 1, 0, 0]

//3. find()
//Return the first element from the array which satisfies the given callback function.
//Example — 1: Find the name
const names1 = ['Jimmy Shah','Ram Sharma','Vikram Gupta','Shyam Sharma'];
const result = names1.find(name => name.includes('Sharma'))
console.log(result); // Ram Sharma

//Example — 2: Find employee who earn more than 20,000.
const employees2 = [
    {
        id: 101,
        name: 'Alex',
        sal: 10000
    },
    {
        id: 102,
        name: 'Clark',
        sal: 23000
    },
    {
        id: 103,
        name: 'John',
        sal: 22000
    },
    {
        id: 104,
        name: 'Tony',
        sal: 20000
    }
];
const emp = employees2.find(e => e.sal >= 20000)
console.log(emp) // {id: 102, name: 'Clark', sal: 23000}

//4. filter()
//Creates a new array with all elements that pass the test implemented by the provided callback function.

const names2 = ['Jimmy Shah','Ram Sharma','Vikram Gupta','Shyam Sharma'];
const result1 = names2.filter(name => name.includes('Sharma'))
console.log(result); //  ['Ram Sharma', 'Shyam Sharma']

const employees3 = [
    {
        id: 101,
        name: 'Alex',
        sal: 10000
    },
    {
        id: 102,
        name: 'Clark',
        sal: 23000
    },
    {
        id: 103,
        name: 'John',
        sal: 22000
    },
    {
        id: 104,
        name: 'Tony',
        sal: 20000
    }
];
const filtered = employees3.filter(e => e.sal >= 20000)
console.log(filtered);
/*
Output:
[ 
  {id: 102, name: 'Clark', sal: 23000},
  {id: 103, name: 'John', sal: 22000},
  {id: 104, name: 'Tony', sal: 20000}
] */

//5. every()
//This function checks that every item in the array passes the callback function. It returns boolean value.
const words1 = ['kia','karen','king','korean'];
// Check all words starts with k
console.log(words1.every(word => word[0] === 'k')) // true
// Check all words ends with g
console.log(words1.every(word => word[words.length-1] === 'g')) // false

//6. some()
//This method is much similar to the every() method but the difference is that it returns true if any of the item(s) in the array passes the given function.
const words2 = ['kia','karen','king','korean'];
// Check all words starts with k
console.log(words2.some(word => word[0] === 'k')) // true
// Check all words ends with g
console.log(words2.some(word => word[words.length-1] === 'g')) // true

//7. Sort()
//We are all aware about sorting, but sort function by default performs Natural order sorting( Treat everything as string and compare character by character ). But we can pass a compare callback function to update the behavior of sorting.
//Syntax(compareFunc(a,b))
//Compare function takes two items a and b from the array and compares them.

//If a-b > 0 then it sorts in ascending order.
//if a-b < 0 then it sorts in descending order.
//Example — 1: Natural Order Sorting
const nums5 = [1,20,10,22,30,44,100,11];
nums5.sort(); // [1, 10, 100, 11, 20, 22, 30, 44]
//Example — 2: Ascending order sorting
const nums6 = [1,20,10,22,30,44,100,11];
nums6.sort((a,b) => a - b); // [1, 10, 11, 20, 22, 30, 44, 100]

//8. reduce()
const nums7 = [1,2,3,4,5];
let output = nums7.reduce((accumulator,currentValue) => accumulator + currentValue);
console.log(output); //15
//Example — 2: Find maximum using reducer() method
const nums8 = [44,2,66,45,17];
let result2 = nums8.reduce((max,item) => Math.max(max,item))
console.log(result2); // 66

//Example — 3: Tallying Votes
const votes = ['y','y','n','y','n','n','n'];
const result3 = votes.reduce((tally,vote) => {
   tally[vote] = ( tally[vote] || 0 ) + 1 
    return tally;
},{}); // Initial value: {}
//Output:
//{y: 3, n: 4}