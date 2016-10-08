// ES6 arrow functions
// x => x + 1
// equivalent to ES5
// function (x) { return x + 1; }
// (x, y) => x + y
// function (x, y) { return x + 1; }
// https://www.airpair.com/javascript/javascript-array-reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

var inputs = process.argv.slice(2);
// var result = inputs.map( input => input[0] )
//                     .reduce( (previous, current) => previous + current );
// or
var result = inputs.map( input => input.charAt(0))
                    .reduce( (previous, current) => previous.concat(current) );

console.log(`[${inputs}] becomes "${result}"`);