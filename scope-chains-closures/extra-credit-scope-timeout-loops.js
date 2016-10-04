// http://blog.mixu.net/2011/02/03/javascript-node-js-and-for-loops/
// http://stackoverflow.com/questions/779379/why-is-settimeoutfn-0-sometimes-useful
function timedFunction(newIndex) {
    //console.log('timedFunction newIndex = ' + newIndex);
    console.log(this);
    setTimeout(() => {console.log('external called timedFunction timeout newIndex = '+ this.newIndex)}, 0);
}
for(var i = 0; i < 5; i++) {
    console.log('inside loop i = ' + this.i);
    timedFunction(i);
    // setTimeout to 0 
    //setTimeout(function() {console.log('internally calledloop timeout i = '+ i)}, 0);
    setTimeout(() => {console.log('internally calledloop timeout i = '+ this.i)}, 0);
}