// exercise 5 filtered ls
// 
// references:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// http://stackoverflow.com/a/7052830/3566042
//
// callbacks references:
// http://stackabuse.com/avoiding-callback-hell-in-node-js/
// https://github.com/maxogden/art-of-node#callbacks
//
// Callbacks are functions that are exectuted asynchronously--
// or at a later time.
// async programs may execute different functions at different times,
// depending on the order and speed that earlier functions happen
// output a list of the files in directory
// filter it by file extension

// first argument: directory name - path 
// second argument: file extension to filter by; no '.'
// use async i/o - input/output
// one line per [filtered] file

// use regex?

// var directoryPath,
// 	fileExtension;

// function printFilteredFiles(directoryPath, fileExtension) {
// }

var fs,
	pathToProcess,
	fileExtension,
	regularExpressionPattern,
	item,
	filteredList;

fs = require('fs');
pathToProcess = process.argv[2];
fileExtension = process.argv[3];
regularExpressionPattern = new RegExp('^[^.]*\.' + fileExtension, 'g');
//regularExpressionPattern = new RegExp('.*', 'g');

// console.log('pathToProcess is ' + pathToProcess);
console.log('fileExtension is ' + fileExtension);
console.log('regularExpressionPattern is ' + regularExpressionPattern);

function filterFiles(directoryFiles, fileExtension) {
	fs.readdir(directoryFiles, function (err, list) {
		if(err) {
			console.log(err);
			return err;
		} else {
			console.log(list);
			filteredList = list.filter(function evaluateExtension(item) {
				console.log('regex test on item ' + item + ' is: ' + regularExpressionPattern.test(item));
				return regularExpressionPattern.test(item);
			})
			return filteredList;
		}

	});
}

filterFiles(pathToProcess);


