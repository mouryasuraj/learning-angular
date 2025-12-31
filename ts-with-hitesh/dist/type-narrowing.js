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
const cut = new CuttingChai;
const result = serve(cut);
console.log(result);
//# sourceMappingURL=type-narrowing.js.map