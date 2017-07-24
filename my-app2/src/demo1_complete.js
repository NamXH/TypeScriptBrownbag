// -- Step 1 -- //
// function sortByName(a) {
//     var result = a.slice(0);
//     result.sort(function(x, y){
//         return x.name.localCompare(y.name);
//     });
//     return result;
// }
function sortByName(a) {
    var result = a.slice(0);
    result.sort(function (x, y) {
        return x.name.localeCompare(y.name);
    });
    return result;
}
sortByName([]);
var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.sayHello = function () {
        console.log("Hello " + name);
    };
    return Greeter;
}());
// ---- // 
