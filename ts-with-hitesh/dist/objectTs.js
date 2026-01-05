"use strict";
// Object
Object.defineProperty(exports, "__esModule", { value: true });
const chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true
};
// We haven't explicitly defined the type of the object but Typescript infers implicitly with
// {
//     name:string;
//     price:number;
//     isHot:boolean
// }
// the above is the type that typescript automatically infers implicity.
// ex:
let tea;
tea = {
    name: "Kadak Chai",
    price: 40,
    isHot: false
};
// We have to add the exact properties in the object as defined in the type
const newObj = {
    name: "Suraj",
    age: 45,
    skills: ["JS", "React", "Angular"],
    newPro: "qweqwe"
};
const new1Obj = newObj; // in the current assigned object, i have added new property but TS is not giving any warning bacause all the property mentioned in type are there in the newObj, extra property can also work.
const person = {
    id: "ljhgfghjkl;kjhgfhjkl",
    items: [{ name: "suraj", age: 45 }],
    address: { street: "asdf", city: "sadfsdf", pincode: 4546, state: "asdfsdf" }
};
// Partial - If using Partial, It Make all properties in Type optional
const person2 = {
    id: "asdfsdfsdf",
};
// ex
function a(p) {
    console.log(p);
}
a({ id: "adsfasdf" });
a({ id: "adsfasdf", items: [{ name: "suraj", age: 45 }] });
a({}); // Disadvantange of using Partial is we can pass empty also, 
function required(opt) {
    console.log(opt);
}
required({ name: "Suraj", age: 45, address: "Mankhurd" }); // If we don't pass argument then TS will give warning because all the properties are required even we have define its optional by puting '?' in type Demo
function required1(opt) {
    console.log(opt);
}
required1({ name: "Suraj" });
const occupation = {
    age: 25,
    role: "Software Developer",
};
const occupation1 = {
    name: "string",
    age: 45,
    address: "string",
    role: "string",
    isSenior: true,
    // salary:4545    // Throws error: Object literal may only specify known properties, and 'salary' does not exist in type 'PublicData'
};
//# sourceMappingURL=objectTs.js.map