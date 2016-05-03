// directory reading and filtering module


module.exports = function readFilter(args) {

    var fs;
    var pathToProcess;
    var fileExtension;
    var regularExpressionPattern;

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
        list.filter(function evaluateMatch(item) {
            return regularExpressionPattern.test(item);
        })
            .map(function logEachPositive(item) {
                console.log(item);
            });
    });

    // some brilliant code here
    console.log('My brilliant module with ' + args);
}
