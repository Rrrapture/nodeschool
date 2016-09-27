// exercise 3: Global Scope and Shadowing
function foo() {
    var bar;
    //intentional global assignment for exercise
    quux = 3;

    function zip() {
        var quux = 5;
    }
}