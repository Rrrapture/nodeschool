// exercise 8 Default Arguments in ES6
// example
/*
function sayHello (greeting = "Hello", name = "JS Fan") {
    console.log( `${greeting} ${name}!` );
}

sayHello("Hiya");
sayHello(undefined, "my friend");
*/
// for straight node in CL, flag with `--harmony_default_parameters`

// gotcha: other falsey values won't trigger default parameters
// ie. `null`, `false`, `0` or `""`

module.exports = (lower = 0, upper = 1) => (lower + upper) / 2;