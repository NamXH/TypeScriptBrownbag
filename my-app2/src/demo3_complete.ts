//-- strictNullChecks --//
// TS compilers performs control-flow based type analysis
function countLines(text?: (string | null)[]): number {
    let count = 0;
    if (text) {
       for (const line of text) {
            if (line && line.length !== 0) {
                count = count + 1;
            }
        }
    }
    return count;
}

// Steps:
// let count = 0;
// function countLines(text: string[]): number {
// if (text) { all the function }
// if (text) { only the for loop }
// function countLines(text?: (string | null)[]): number {
// if (line && line.length !== 0) {

let a2 = countLines(["one", "two", "", "three"]);
let b2 = countLines(["hello", null, "world"]);
let c2 = countLines();


//-- Quiz --//
// 1. 2nd line: string: because string empty is falsy
// 2. 1st line: null: because type of null is object
// 3. 1st line: it should be ===
