// using asynchronous filesystem operation using fs.readFile()
// read a file and print the number of new lines
// like cat learnyounode/ex02-process.js | wc -l
// https://github.com/maxogden/art-of-node#callbacks

var fs = require('fs');

var processArgv, fileAsString;

processArgv = process.argv[2];
// idiomatic nodeJS callbacks generally use this signature:
// where you check for an error depending on if the first argument is truthy
// second argument will be Buffer
// you can use utf8 as the second argument and callback as the third
// if you want a String instead of an Buffer
// function callback(err, data) { /* */}
// function callback(err, data) { /* */}

function asyncFileAsString(callback) {
	fs.readFile(processArgv, function doneReading(err, fileContents) {
		fileAsString = fileContents.toString().split('\n').length -1;
		logString();
	})
}

// test path: ex02-process.js
function logString() {
	console.log(fileAsString);
}

asyncFileAsString(logString);