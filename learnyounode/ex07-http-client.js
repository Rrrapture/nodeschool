// exercise 07 HTTP client
//
// mission: perform HTTP GET request
// URL will be first command-line argument (argv)
// write String contents of each 'data' event from the request to the console,
// one per line (stdout)
//
// use http core module
// https://nodejs.org/docs/latest-v5.x/api/http.html
// Node's HTTP API is low level; it deals with stream handling and message parsing only
// https://nodejs.org/docs/latest-v5.x/api/http.html#http_http_get_options_callback
// pass a command line argument like this:
// $node ex07-http-client.js http://rrrapture.com

var http,
    url;

// http.get(options[, callback])
// the res or response object is a Node stream object.
// Node stream objects emit events
// important events are 'data', 'error', and 'end'
// you listen to a Node [stream?] object like this:
// response.on('data', function (data) { /* */ });
// setEncoding method for response object - utf8 -
// will emit string instead of buffer
http = require('http');
url = process.argv[2];

http
    .get(url, function getRequest(res) {
        res
            .setEncoding('utf8')
            .on('data', function explainData(data) {
                console.log(data);
            });
    })
    .on('error', function detailError(error) {
        console.log('Got error: ' + error);
    });
