'use strict';

const {
    getAllCars,
    getAllModels,
    getCar } = require('./carstorage');

//Optionally
// const storage = require('./carstorage') // then use storage.getCar etc..

console.log(getAllCars());
console.log(getAllModels());
console.log(`\nAll Available models: \n\t${getAllModels().join('\n\t')}`);

console.log(getCar('model', 'Fast GT'));
console.log(getCar('license', 'A-1'));
console.log(getCar('model', 'x'));
console.log(getCar('model'));
console.log(getCar('x', 'x'));
