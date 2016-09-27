// ex08-http-collect.js
// stdout 2 lines:
// 1. Number (integer) of characters received from server
// 2. complete String of characters from server

var
    concat,
    http,
    url;

concat = require('concat-stream');
http = require('http');
url = process.argv[2];

http
    .get(url, function getRequest(res) {
        var result,
            write;

        write = concat(function (data) {
            result = data.toString();
            console.log(result.length);
            console.log(result);
        });

        res
            .pipe(write)
            .on('error', console.error);
    });