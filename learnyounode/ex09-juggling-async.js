// ex09-juggling-async.js
// stdout one line (in order) for all data (as string)
// for each of three urls passed as CL arguments.

var
    concat,
    http,
    urls,
    dataChunk,
    counterLimit;

concat = require('concat-stream');
http = require('http');
urls = [process.argv[2], process.argv[3], process.argv[4]];
dataChunk = [];
counterLimit = 0;


// test urls:
// http://nodeschool.io/ http://bltcommunications.com/ http://rrrapture.com/
// have to count callbacks
urls.forEach(pipeData);

function pipeData(url) {

    http.get(url, function getRequest(res) {
            var result,
                urlsIndex;

            urlsIndex = urls.indexOf(url);

            res
                .pipe(concat(function (data) {
                    result = data.toString();
                    counterLimit ++;
                    dataChunk[urlsIndex] = result;

                    if (counterLimit === urls.length) {
                        for (var i = 0; i < dataChunk.length; i++) {
                            console.log(dataChunk[i]);
                        }
                    }
                }));

        })
        .on('error', function (err) {
            console.log('Got error ' + err);
        });
}
