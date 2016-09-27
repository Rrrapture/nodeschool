// exercise 4: Closures
// https://en.wikipedia.org/wiki/Closure_(computer_programming)
function foo() {
    var bar;
    //intentional global assignment for exercise
    quux = 3;
    function zip() {
        var quux = 5;
        bar = true;
    }

    return zip;
}