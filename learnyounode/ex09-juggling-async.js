// ex09-juggling-async.js
// stdout one line (in order) for all data (as string)
// for each of three urls passed as CL arguments.

var
    concat,
    http,
    urls;

concat = require('concat-stream');
http = require('http');
urls = [process.argv[2], process.argv[3], process.argv[4]];

console.log(urls);

// test urls:
// http://nodeschool.io/ http://bltcommunications.com/ http://rrrapture.com/
// have to count callbacks
urls.forEach(pipeData);


function pipeData(url) {
    http.get(url, function getRequest(res) {
            var result,
                write;
            console.log(`STATUS: ${res.statusCode}`);

            write = concat(function (data) {
                result = data.toString();
                console.log(url);
                console.log(result.length);
                // console.log(result);
            });

            // res
            //     .pipe(write);
            res.on('data', function (chunk) {
                console.log(chunk.toString().length);
            });

  // res.on('data', (chunk) => {
  //   console.log(`BODY: ${chunk}`);
  // });

        })
        .on('error', function (err) {
            console.log('Got error ' + err);
        });
}
