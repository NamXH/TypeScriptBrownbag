// -- Step 1 -- //
// function sortByName(a) {
//     var result = a.slice(0);
//     result.sort(function(x, y){
//         return x.name.localCompare(y.name);
//     });
//     return result;
// }

// sortByName(5);
// ---- //

// -- Step 2 -- //
// interface Person {
//     name: string;
//     age: number;
// }

// function sortByName(a: Person[]) {
//     var result = a.slice(0);
//     result.sort(function(x, y){
//         // return x.name.localCompare(y.name);
//         return x.name.localeCompare(y.name)
//     });
//     return result;
// }

// sortByName([]);
// ---- //

// -- Step 3 -- //
// See file: demo1_jquery_complete.ts
// $.ajax()
// ---- //

// -- Step 4 -- //
interface Person {
    name: string;
    age: number;
}

function sortByName(a: Person[]) {
    var result = a.slice(0);
    result.sort((x, y) => {
        return x.name.localeCompare(y.name)
    });
    return result;
}

sortByName([]);

class Greeter {
    name: string;
    sayHello() {
        console.log("Hello " + name);
    }
}
// ---- //