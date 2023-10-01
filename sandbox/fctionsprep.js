let firstName = 'Antonia';
let lastName = 'Francesca';

function fullName(first, last) {
    return `Your full name is ${first} ${last}`;
}


const fullName1 = function(first, last) {
    return `Your full name is ${first} ${last}`;
};

const fullName2 = (first, last) => `${first} ${last}`;

let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

let namesB = names.filter(name => name.charAt(0) === 'B');

const namesLength = names.map((name) => name.length);
console.log(namesLength)

const initialValue = 0;
averageLength = namesLength.reduce((accumulator, currentvalue) => accumulator + currentvalue, initialValue)/namesLength.length;
console.log(averageLength);