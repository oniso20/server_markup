'use strict';

const person = require('./person.json');
// Will not work due to errors in json file
// const person = require('./wrongperson.json');

console.log(person);
console.log(person.firstName);
console.log(`${person.lastName}, ${person.firstName}`);

console.log(person['age']);
console.log(person.age);

let fieldname = 'age';
console.log(person[fieldname]);
fieldname = 'member';
console.log(person[fieldname]);


function print(fieldname) {
    console.log(person[fieldname]);
}

console.log('########');
print('age');
print('firstName');

function print2(fieldname) {
    if (fieldname === 'age') {
        console.log(person.age);
    }
    else if (fieldname === 'firstName') {
        console.log(person.firstName);
    }
}

console.log('########--------------#####');
print('age');
print('firstName');


console.log('########------->>>>>-------#####');
console.log(Object.keys(person));

console.log('########-------<<<<<<<-------#####');
for (const key of Object.keys(person)) {
    print(key);
}

console.log('########-------Values-------#####');
console.log(Object.values(person));

console.log('########-------entries-------#####');
console.log(Object.entries(person));

for (const [key, value] of Object.entries(person)) {
    console.log(`for key ${key} the value is ${value}`);
}

const person2 = {
    // comment's aren't allowed in json file
    firstName: 'Vera',
    "lastName": "River",
    'notes': `vera is ${person.age}` // this takes the age of matt
};

console.log(person2);