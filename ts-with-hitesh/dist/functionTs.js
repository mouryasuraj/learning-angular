"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Argument and Parameter type declaration
function getBio(name, age) {
    console.log(`Hi, My name is ${name} and i'am ${age} years old.`);
}
console.log(getBio("Suraj", 25));
// return value type declaration
function getLink() {
    // return "1"  // not allowed
    return 1; // only value return who data type is number
}
console.log(getLink());
// Multiple return data type
function getlinks(order) {
    if (!order)
        return null; // we have to defined null data type also, else it will throw error
    return "string";
}
// Void
function getVoid(order) {
    console.log("void means this function return nothing");
}
// Optional Parameter
function getOptionalParameter(type) {
    console.log(type);
}
getOptionalParameter("suraj");
getOptionalParameter(); // Parameter is optional
// Default Parameter
function getDefaultParameter(type = "default") {
}
getDefaultParameter(); // if argument not passed then function will take default value
getDefaultParameter("asdfasdf");
// note - Always defined optional and default paramter in the end.
//# sourceMappingURL=functionTs.js.map