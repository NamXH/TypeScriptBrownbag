//-- Readonly properties --//
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!

let ro: ReadonlyArray<number> = [1, 2, 3, 4];
ro[0] = 12; // error!
ro.push(5); // error!


//-- Function types --//
// Useful when defining callback type or using functional style programming
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}


//-- Generics --//
//// Generics interface
interface GenericIdentityFn<T> {
    (arg: T): T;
}
function identity<T>(arg: T): T {
    return arg.length;
}
let myIdentity: GenericIdentityFn<number> = identity;

//// Generics class
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

//// Generics constraints
interface Lengthwise {
    length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // we know it has a .length property
    return arg;
}