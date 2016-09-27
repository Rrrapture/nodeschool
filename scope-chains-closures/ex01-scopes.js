// Scopes exercise 01
function foo() {
	var bar;
}
// notes:
// although ES6 recently defined block scoping,
// the main kind of scoping in JavaScript is lexical scoping;
// the scope created within a function.
// where a variable is initialized inside of a (the current) function.
// let and const denote variables block scoped to the current curly braced block
// ie
// if (true) {
// let aVariable;	
// }
//
// There are 4 other scopes in JavaScript:
// Global, with, catch, eval
