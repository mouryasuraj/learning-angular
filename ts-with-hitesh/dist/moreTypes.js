"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Forceful type assertion
let response = "42";
let numericLength = response.length;
let bookString = `{"name":"The Alchemist"}`;
// let bookObject = JSON.parse(bookString) // not guaranteed that will get the properties
let bookObject = JSON.parse(bookString); //here by writing "as Book" confirm that i'll the get the properties of the object 
console.log(bookObject.name);
// Type assertion for HTML doc
// let inputElem = document.getElementById("username") as HTMLInputElement;
// any vs unknown
let value;
value = "suraj";
value = [1, 2, 3];
value = 2.5;
value.toUpperCase(); // here, ts is not complainig to use methods if the type is any
let newValue;
newValue = "suraj";
newValue = [1, 2, 3];
newValue = 2.5;
// newValue.toUpperCase()   // here, ts is complainig to use methods if the type is unknow, because unknown is like it understand that for temporary the value will unknow but somehow it is going to use data type. below is the fix version 
if (typeof newValue === 'string') {
    newValue.toUpperCase();
}
if (typeof newValue === 'number') {
    newValue.toFixed(2);
}
// type guard with try catch
try {
}
catch (error) {
    // console.log(error.message)   // here, we don't know where message property will be there in error, below is the fix for this issue
    if (error instanceof Error) {
        console.log(error.message);
    }
}
const str = "String with unknown data type";
// const newStr:string = str   // here will get error "Type 'unknown' is not assignable to type 'string'". below is the fix
const newStr = str;
// void means, funcation can return the value if need. 
function redirectBasedOnRole(role) {
    if (role === "admin") {
        console.log("Redirecting to admin page");
        return;
    }
    if (role === "user") {
        console.log("Redirecting to user page");
        return;
    }
    role; // This line shows that how many cases are left to use, 
}
//# sourceMappingURL=moreTypes.js.map