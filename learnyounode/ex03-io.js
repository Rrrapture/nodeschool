// using synchronous method fs.readFileSync()
// like cat learnyounode/ex02-process.js | wc -l

var fs = require('fs');

var processArgv, fileAsString;

processArgv = process.argv[2];

fileAsString = fs
	.readFileSync(processArgv)//test path: ex02-process.js
	.toString()
	.split('\n')
	.length;

fileAsString = fileAsString - 1;
console.log(fileAsString);

 // Here's the official solution in case you want to compare notes:  
   
 // ─────────────────────────────────────────────────────────────────────────────  
   
 //     var fs = require('fs')  
       
 //     var contents = fs.readFileSync(process.argv[2])  
 //     var lines = contents.toString().split('\n').length - 1  
 //     console.log(lines)  
       
 //     // note you can avoid the .toString() by passing 'utf8' as the  
 //     // second argument to readFileSync, then you'll get a String!  
 //     //  
 //     // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1  
