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
let inputElem = window.document.getElementById("username");
//# sourceMappingURL=moreTypes.js.map