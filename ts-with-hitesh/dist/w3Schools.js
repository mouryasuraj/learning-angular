"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let ourTupple = [1, "Suraj", ["str"], true];
ourTupple.push("new arrr"); // we can push new values to tuple as we haven't define readonly or restricted it. 
console.log(ourTupple);
let readonlyTupple = [1, "Mourya", ["new Str"], false];
// readonlyTupple.push("new arrr")   // here, we will get error 'push does not exist' on type readonly
console.log(readonlyTupple);
// Names tuples
const namesTuples = [45, "suraj"];
const [x, y] = namesTuples; // we can also destructure the tuples
console.log(namesTuples);
console.log(x, y);
//# sourceMappingURL=w3Schools.js.map