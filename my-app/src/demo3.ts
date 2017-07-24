//-- Type inference --//
let u = 3;
let v = [0, 1, null]; // TS algorithm picks the best common type

//-- Basic type --//

//// any: describe the type of variables that we do not know when we write an application.
let notSure: any = 4;
notSure = "maybe a string instead";
notSure.ifItExists(); // okay, ifItExists might exist at runtime

let prettySure: Object = 4;
prettySure.ifItExists();
// Error: Property 'ifItExists' doesn't exist on type 'Object'. 
// Can’t call arbitrary methods on them, even ones that actually exist.

//// void: the absence of having any type at all.
// Declaring variables of type void is not useful because you can only assign undefined or null to them.
function warnUser(): void {
    alert("This is my warning message");
}

//// null and undefined:
// In TypeScript, both undefined and null actually have their own types. They’re not extremely useful on their own.
// By default null and undefined are subtypes of all other types.
// However, when using the --strictNullChecks flag, null and undefined are only assignable to void and their respective types.
// With --strictNullChecks, if you want to use null or undefined, you can use union type for example: string | null | undefined (will discussed union type below)

//// never: represents the type of values that never occur.
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}
function infiniteLoop(): never {
    while (true) {
    }
}

//// enum
enum Color { Red, Green, Blue }
let c: Color = Color.Green;
// By default, enums begin numbering their members starting at 0.
// You can change this by manually setting the value of one of its members.

//// Union type
let foo: string | number;


//-- Type assertions --//

// Type assertions are a way to tell the compiler “trust me, I know what I’m doing.” 
// A type assertion is like a type cast in other languages, but performs no special checking or restructuring of data.
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
// Another syntax but not usable with JSX: number = (<string>someValue).length;


//// Optional parameters and properties
// With --strictNullChecks, an optional parameter automatically adds: | undefined
function f(x: number, y?: number) {
    return x + (y || 0);
}
f(1, 2);
f(1);
f(1, undefined);
f(1, null); // error, 'null' is not assignable to 'number | undefined'


//-- strictNullChecks --//
// when using the --strictNullChecks flag, null and undefined are only assignable to void and their respective types.

// TS compiler performs control-flow based type analysis
function countLines(text?: (string | null)[]): number {
    let count: number = 0;
    if (text) {
        for (const line of text) {
            if (line && line.length !== 0) {
                count = count + 1;
            }
        }
    }
    return count;
}

let a1 = countLines(["one", "two", "", "three"]);
let a2 = countLines(["hello", null, "world"]);
let a3 = countLines();


//-- Discriminated Unions (Tagged Union) --//
interface Square {
    kind: "square"; // the discriminant
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}
type Shape = Square | Rectangle | Circle; // the union

class MyCircle implements Circle {
    kind: "circle";
    radius: number;
    foo: string;
}

function area(s: Shape): number {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
    }
}

//-- Exhaustiveness checking --//
function area2(s: Shape): number {
    // switch (typeof(s)) {
    //     case "square": return s.size * s.size;
    //     case "rectangle": return s.height * s.width;
    //     // case "circle": return Math.PI * s.radius ** 2;
    // }
}
// Because the switch is no longer exhaustive
// TypeScript is aware that the function could sometimes return undefined


//-- Quiz --//
function quiz(s: string | string[] | null | undefined) {
    if (s) {
        s;
    } else {
        s;
    }

    if (typeof s === "object") {
        s;
    } else {
        s;
    }

    if (s == undefined) {
        s;
    } else {
        s;
    }

    if (typeof s === "undefined") {
        s;
    } else {
        s;
    }
}