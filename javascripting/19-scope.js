// scope exercise 19
// looking for a: 1, b: 8, c: 6  
var a = 1, b = 2, c = 3;

(function firstFunction() {
	var b = 5, c = 6;

	(function secondFunction() {
		var b = 8;

		console.log('a: ' +a+ ', b: ' +b+ ', c: ' +c);

		(function thirdFunction() {
			var a = 7, c = 9;

			(function fourthFunction() {
				var a = 1, c = 8;
			})();
		})();
	})();
})();













//IIFE Immediately invoked function expression
(function(){//the function expression wrapped by ()
	// variables defined here
	// can't be accessed outside
})(); // the function is immediately invoked











// var a = 4;

// function foo() {
// 	var b = a * 3;
// 	console.log('b in outer function is ', b);

// 	function bar(c) {
// 		var b = 2;

// 		console.log(a, b, c);
// 	}

// 	bar(b * 4);
// }
// foo();