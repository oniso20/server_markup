'use strict';

const cars = require('./cars.json');

console.log(cars);
// first car
console.log(cars[0]);
console.log(cars[0].model);
// last car
console.log(cars[cars.length - 1]);

for (const car of cars) {
    console.log(car.model);
}

for (const car of cars) {
    if (car.model.toLowerCase() == "fast gt") {
        console.log(car.license);
    }
}

// print all models only ones
const models = [];
for (const car of cars) {
    if (!models.includes(car.model)) {
        models.push(car.model);
    }
}

console.log(`Available models: ${models.join(', ')}`);

console.log(cars.filter(car => car.model === 'Fast GT'));

const found = [];
for (const car of cars) {
    if (car.model === 'Fast GT') {
        found.push(car);
    }
}
console.log(found);