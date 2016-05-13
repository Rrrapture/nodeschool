// log regular expression matches in a string
// should log all instances of thank you in the string.
// expected result: [ 'Thanks', 'Thank you', 'Thanks!', 'thank you', 'thanks' ]
// if node's installed, run 'node bonus-regex.js' in terminal
// using String.match method instead of RegExp.exec method 
// because it returns array w/o the sub selections
// if you want to obtain capture groups and the global flag is set, you need to use RegExp.exec() instead.
// http://stackoverflow.com/questions/9214754/what-is-the-difference-between-regexp-s-exec-function-and-string-s-match-fun
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
// In most regex flavors, there are 12 metacharacters: \^$.|?*+()[{

(function regExPlay() {
    var effusiveThanks, regExPattern;

    effusiveThanks = 'Thanks again for meeting. Thank you for your time. Thanks! Once again I must say thank you very much: thanks, you!';

    regExPattern = /thank(s|\syou)!*/gi;

    console.log(effusiveThanks.match(regExPattern));

})();
