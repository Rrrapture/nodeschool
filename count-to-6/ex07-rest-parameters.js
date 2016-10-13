'use strict';
// ^ mandatory as of Node 5.8.0 for block-scoped declarations like `let`
// if running plain node

// exercise 7 - rest parameters in ES6
// background
// counterpart to spread operator `...`
// use rest parameters in a variadic function to act on arguments like an array.

// replaces Array.prototype.slice.call(arguments)
// example:
// function sum(...args) {
//     var result = 0;
//     args.forEach( function (arg) {
//         result += arg;
//     } );

//     return result;
// }
// console.log( sum(1, 2, 3) );

// not supported yet as of Node 5.8.0. to test in CL, run node w/ flag `--es_staging` or `--harmony`
// or use babel, Traceur or other compiler. Workshop uses Traceur

// challenge
// export a node module
// module.exports = function average(...args) {
//     var result = 0;
//     args.forEach( function (arg) {
//         result += arg;
//     } );
//     return result / args.length;
// }
// passed

// way cooler official solution
// module.exports = (...args) => {
//     var sum = args.reduce((soFar, value) => soFar + value, 0);
//     return sum / args.length;
// };

// my solution, rewritten to be super cool
// anonymous function better. avoid poluting global scope
// fat arrow gives lexical scoping to this

module.exports = (...args) => {
    var result = 0;
    result = args.reduce( (previous, current) => previous + current, 0 );
    return result / args.length;
};//don't forget semi-colon
