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
                urlsIndex,
                write;

            //console.log("counterLimit at beginning is " + counterLimit);
            //console.log("this url is index " + urls.indexOf(url));

            urlsIndex = urls.indexOf(url);

            counterLimit ++;

            write = concat(function (data) {
                result = data.toString();
                //push to the correct index in the result array
                dataChunk.splice(urlsIndex, 0, result);

            });

            res
                .pipe(write);

            res
                .on('end', function () {
                    //console.log("counterLimit, urls.length are " + counterLimit + ", " + urls.length );
                    if (counterLimit === urls.length) {
                        for (var i = 0; i < dataChunk.length; i++) {
                            console.log(dataChunk[i]);
                        }
                    }
                });


        })
        .on('error', function (err) {
            console.log('Got error ' + err);
        });
}
