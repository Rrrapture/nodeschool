// ex04 arrow functions and `this`

var foot = {
    kick: function () {
        this.yelp = "Ouch!";
        setImmediate( () => console.log(this.yelp) );
    }
};
foot.kick();