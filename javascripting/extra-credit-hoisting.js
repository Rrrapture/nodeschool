(function playVariables() {
	//console.log(hello);//this will stop the program from executing.
	console.log('a the first time' + a);
	a = 'monkey';
	console.log('a second time ' + a);
	var a = 'something';
	console.log('a third time ' + a);
	a = 'whatever';
})()
// first console: undefined
// second console: 
// third console:  