//-- Gotchas --//

// Don’t use the return type 'any' for callbacks whose value will be ignored
// Why: Using void is safer because it prevents you from accidently 
// using the return value
/* WRONG */
function fn_wrong(x: () => any) {
    var k = x(); 
    k.doSomething(); // Mistake!
}
/* OK */
function fn_ok(x: () => void) {
    var k = x(); 
    k.doSomething(); 
}


// Don’t use optional parameters in callbacks unless you really mean it.
// Why: It’s always legal to provide a callback that accepts fewer arguments
/* WRONG */
interface Fetcher_Wrong {
    getObject(done: (data: any, elapsedTime?: number) => void): void;
}
/* OK */
interface Fetcher_Ok {
    getObject(done: (data: any, elapsedTime: number) => void): void;
}


// Don’t put more general overloads before more specific overloads.
// Why: TypeScript chooses the first matching overload when resolving function calls. 
// When an earlier overload is “more general” than a later one, 
// the later one is effectively hidden and cannot be called.
/* WRONG */
declare function fn1(x: any): any;
declare function fn1(x: HTMLElement): number;
declare function fn1(x: HTMLDivElement): string;

var myElem1: HTMLDivElement = new HTMLDivElement();
var x1 = fn1(myElem1); // x: any, wat?

/* OK */
declare function fn2(x: HTMLDivElement): string;
declare function fn2(x: HTMLElement): number;
declare function fn2(x: any): any;

var myElem2: HTMLDivElement = new HTMLDivElement();
var x2 = fn2(myElem2); // x: string, :)


// Use Union Types
/* WRONG */
interface Moment {
    utcOffset(): number;
    utcOffset(b: number): Moment;
    utcOffset(b: string): Moment;
}

/* OK */
interface Moment {
    utcOffset(): number;
    utcOffset(b: number | string): Moment;
}