// exercise 5 filtered ls
// 
// references:
// using Array.prototype.reduce():
// https://danmartensen.svbtle.com/javascripts-map-reduce-and-filter
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

var fs,
    pathToProcess,
    fileExtension,
    regularExpressionPattern;

fs = require('fs');
pathToProcess = process.argv[2];
fileExtension = process.argv[3];
regularExpressionPattern = new RegExp('^[^.]*\.' + fileExtension);

fs.readdir(pathToProcess, function (err, list) {
    'use strict';
    if (err) {
        console.log(err);
        return err;
    }
    list.reduce(function (prev, item) {
        if (regularExpressionPattern.test(item) === true) {
            console.log(item);
        }
    }, []);

});

//  # PASS Your solution to FILTERED LS passed!
//
//  Here's the official solution in case you want to compare notes:
//
//     var fs = require('fs')
//     var path = require('path')
//
//     fs.readdir(process.argv[2], function (err, list) {
//       list.forEach(function (file) {
//         if (path.extname(file) === '.' + process.argv[3])
//           console.log(file)
//       })
//     })


