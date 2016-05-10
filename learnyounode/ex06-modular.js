// exercise 6 - use a module to read and filter
var readFilter = require('./ex06-module-read-filter.js');

var pathToProcess = process.argv[2];
var fileExtension = process.argv[3];

// https://github.com/felixge/node-style-guide#name-your-closures
readFilter(pathToProcess, fileExtension, function logFiles(err, list) {
    if(err) {
        throw err;
    }
    list.map(function (item) {
        console.log(item);
    });
});