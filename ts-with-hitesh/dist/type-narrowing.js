"use strict";
//type narrowing
Object.defineProperty(exports, "__esModule", { value: true });
function getChai(kind) {
    if (typeof kind === "string") {
        return `Making ${kind} chai`;
    }
    return `Chai order ${kind} `;
}
// Checking truthy values
function serveChai(msg) {
    if (msg) {
        return `serving ${msg} chai`;
    }
    return `Serving default chai`;
}
function orderChai(size) {
    if (size === "small") {
        return `small chai is serving`;
    }
    if (size === "medium" || size === "large") {
        return `medium or large chai is getting serve`;
    }
    return `num of chai ${size}`;
}
// instanceof examples
class KulhadChai {
    serve() {
        return 'Serving kulhad chai....';
    }
}
class CuttingChai {
    serve() {
        return 'Serving cutting chai....';
    }
}
function serve(chai) {
    if (chai instanceof KulhadChai) {
        return chai.serve() + "kul";
    }
    return chai.serve() + "cut";
}
const kul = new KulhadChai;
const result = serve(kul);
console.log(result);
// Typescript typeguard
function isChaiOrder(obj) {
    return typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number" &&
        typeof obj.price === "number";
}
/*
obj is chaiOrder
This is called a type predicate.
What it means:
        “If this function returns true, then TypeScript should treat obj as type chaiOrder.”
*/
function serveChaiOrder(item) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} tea spoon sugar at ${item.price} rupees`;
    }
    return `Serving custom chai ${item}`;
}
console.log(serveChaiOrder({
    type: "kulhad",
    sugar: 25,
    price: 26
}));
function getRole(role) {
    let str = '';
    switch (role.type) {
        case "software":
            str = `Software developer with ${role.skillLevel} skill level`;
            break;
        case "desk":
            str = `Desk App developer with ${role.experience} Experience`;
            break;
        case "web":
            str = `Web App developer with ${role.experience} Experience`;
            break;
    }
    return str;
}
function getExperience(role) {
    if ("experience" in role) {
        return role.experience;
    }
    if ("skillLevel" in role) {
        return role.skillLevel;
    }
    return 0;
}
console.log("GetRole", getRole({ type: "desk", experience: 6 }));
console.log("GetExperience", getExperience({ type: "software", skillLevel: 5 }));
// Unknown example
function isStringArray(arr) {
    // This function takes a value of unknown type and checks at runtime
    // whether it is an array containing only strings.
    // If the function returns true, TypeScript treats `arr` as a string[].
    return Array.isArray(arr) && arr.every(data => typeof data === "string");
}
function concatenateArrString(arr) {
    if (isStringArray(arr)) {
        return arr.join(" "); // safe
    }
    return "";
}
console.log("asdfasdf", concatenateArrString("sdfsdfsdf"));
console.log("123123", concatenateArrString(["Suraj", "Mourya"]));
//# sourceMappingURL=type-narrowing.js.map