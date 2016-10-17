'use strict';
// exercise 09 default arguments part 2

// background
// http://obscurejavascript.tumblr.com/post/143335631545/how-identity-functions-are-useful-in-javascript

// default arguments can be expressions in JavaScript:
// function log(arg, transform = x => x) {
//     console.log(transform(arg));
// }
// log("Hello");
// log("Hello", y => y.toUpperCase());
// look up in progress node flags by running `node --v8-options | grep 'in progress'`
// for this case use `node --harmony_default_parameters`

// default values can depend on earlier arguments

// using node assert utility module
// var assert = require("assert");

// function assertEquals5(val, error = `${val} does not equal 5!`) {
//     assert.strictEqual(val, 5, error);
// }
// assertEquals5(3);

// challenge practice
// function challenge( greeting, marks = greeting.length ) {
//     let punctuation = '!';
//     console.log(`${greeting}` + punctuation.repeat(marks));
// }

// challenge("Hey");
// challenge("Hi", 6);
// passed!
module.exports = (greeting, marks = greeting.length) => greeting + ('!').repeat(marks);


// official solution:
// module.exports =
//     (string, bangs = string.length) => string + "!".repeat(bangs);
