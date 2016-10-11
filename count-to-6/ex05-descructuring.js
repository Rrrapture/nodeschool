'use strict';
// exercise 5: destructuring assignment syntax
// extracting data from arrays or objects to distinct variables
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// background
// object and array literal expression is
//var x = [1, 2, 3, 4, 5];

// destructuring syntax on left-hand side of the assignment
// to define what elements to extract from the sourced variable
//var [y, z] = x;
//console.log(y);//1

// arrays
// let numbers = [1, 2, 3];
// let [foo, , bar] = numbers;

// console.log(foo);
// console.log(bar);

// objects
// let box = {width: 10, height: 5, depth: 4};
// let {width:x, depth} = box;

// console.log(x, depth);
// console.log(width);// width is not defined

// exercise. input array
// [userId, username, email, age, firstName, lastName]
// my solution:
let [, x, y ] = process.argv.slice(2);

let result = {username: x, email: y};

console.log(result);

//official solution:
// let args = process.argv.slice(2);

// let result = {};

// [, result.username, result.email] = args;

// console.log(result);

//optional solution, less lines
// let result = {};

// [, result.username, result.email] = process.argv.slice(2);

// console.log(result.username);

// expected value:
//{username: 'jdoe', email: 'john@doe.com'}
