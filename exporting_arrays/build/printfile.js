"use strict";

// import {array1, array2} from './parent/arrays.js';
// //
// console.log(array1);
// console.log(array2);


// require testing
// var exported = require('./parent/arrays');

// console.log("Array 1");
// console.log(exported.array1f());
// console.log("Array 2");
// console.log(exported.array2f());


var exported = require('./parent/arrays');

console.log("Array 1");
console.log(exported.array1);
console.log("Array 2");
console.log(exported.array2);

// directly doesn'twork
// console.log("Array 1");
// console.log(exported.array1);
// console.log("Array 2");
// console.log(exported.array2);