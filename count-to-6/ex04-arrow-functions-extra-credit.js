// ex04 arrow functions and `this`
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

// 1.
// this in setImmediate points to global object
// not the object in kick

// var foot = {
//     kick: function () {
//         this.yelp = "Ow that hurt!";
//         setImmediate( function () {
//             console.log("Sorry not sorry");
//             console.log(this.yelp);
//         } );
//     }
// };
// foot.kick();


// 2.
// browser-friendly version with setTimeout 
// instead of setImmediate
// with Function.prototype.bind method

// var foot = {
//   kick: function () {
//     this.yelp = "Ouch, mujer!";
//     setTimeout( function () {
//       console.log("Whatever, chica. You know I have my own `this.`");
//       console.log("Ok, I'll compromise with bind. " + this.yelp); }.bind(this), 0);
//   }
// };
// foot.kick();

// 3.
// Another ES5 hack - you set that to this

var foot = {
    kick: function () {
        this.yelp = "Owww!";
        var that = this;
        setTimeout( function () {
            console.log("Finally, that is set to this; ", that.yelp);
        }, 0);
    }
};

foot.kick();

