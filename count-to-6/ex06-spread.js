'use strict';
// exercise 6: spread

// reference: http://www.2ality.com/2011/08/spreading.html
// for variatic functions
// functions that accept a variable number of arguments. ie:
// spreading means making a function call, method, or
// constructor invocation and supplying the arguments via an
// array. 
// called "unpacking" in Python 
//console.log(Math.max(1,2,5));//5

// ES5 with apply
// var es5Numbers = [1, 1, 2, 3, 5, 8];
// var es5Max = Math.max.apply(null, es5Numbers);
// console.log(es5Max);//8

// total bummer with `Date` constructor
// var es5Years = [2001, 2006, 2010, 1996, 2016];
// var es5YearsMaxDate = new Date.apply(null, es5Years);
// console.log(es5YearsMaxDate);
// returns  TypeError: function apply() { [native code] } is not a constructor
// because apply performs a function call. It doesn't
// just pass arguments to the new operator.

// ES5 fix is to use bind, or a "library method"
// new (Date.bind(null, 2001, 2006, 2010, 1996, 2016));
// console.log(new (Function.prototype.bind.apply(
//     Date, [null].concat([2001, 2006, 2010, 1996, 2016]))));
//omg I give up.


// ES6 ...args syntax to "spread" an array out when calling
// a variadic function

// var numbers = [1, 1, 2, 3, 5, 8];
// var max = Math.max(...numbers);

let numbers = process.argv.slice(2);

let minNumber = Math.min(...numbers);

console.log(`The minimum of [${numbers}] is ${minNumber}`);

// returns something like
//The minimum of [18,16,97,68,44] is 16

