// directory reading and filtering module
function readFilter(pathToProcess, fileExtension, callback) {

    var fs;
    var regularExpressionPattern;
    var fileList;

    fs = require('fs');
    regularExpressionPattern = new RegExp('^[^.]*\.' + fileExtension);

    // https://github.com/felixge/node-style-guide#name-your-closures
    fs.readdir(pathToProcess, function reviewFiles(err, list) {
        'use strict';
        if (err) {
            return callback(err);
        }

        fileList = list.filter(function evaluateMatch(item) {
            return regularExpressionPattern.test(item);
        });

        return callback(null, fileList);
    });
}

module.exports = readFilter;
