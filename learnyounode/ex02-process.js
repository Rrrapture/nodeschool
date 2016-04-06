//ex02-process argv add input from node console
//console.log(process.argv);
var processArgvSum, i, summation;

processArgvSum = process.argv.slice(2);
summation = 0;

for (i = 0; i < processArgvSum.length; i++) {
	summation += Number(processArgvSum[i]);
}
//console.log('array was ', processArgvSum);
console.log(summation);
//return summation;
