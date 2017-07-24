function sortByName(a) {
    var result = a.slice(0);
    result.sort(function (x, y) {
        return x.name.localeCompare(y.name);
    });
    return result;
}
var Greeter = (function () {
    function Greeter(name) {
        this.name = name;
    }
    Greeter.prototype.sayHello = function () {
        console.log("Hello " + this.name);
    };
    return Greeter;
}());
sortByName([]);
