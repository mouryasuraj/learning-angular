"use strict";
// Interface - Main goal of terface is to give shape or blueprint to data
Object.defineProperty(exports, "__esModule", { value: true });
const mergingInterface = {
    str: "String",
    name: "Suraj"
};
const ex = {
    str: "String", // able to user str which in defined in interface A
    name: "suraj", // able to user str which in defined in interface A
    shiv: "Suraj"
};
const person = {
    name: "Suraj",
    age: 25,
    skills: ["JS", "React", "TS", "MongoDB", "Nginx", "Docker", "Git"],
    collegeName: "Khalsa College"
};
// interface strOrNum = string | number   // ❌ invalid - Interface can ONLY describe object shapes
// 4. Classes can implement both
// Implement type
class Tea {
    name;
    age;
    skills;
    collegeName;
    extra;
    constructor(name, age, skills, collegeName, extra) {
        this.name = name;
        this.age = age;
        this.skills = skills;
        this.collegeName = collegeName;
        this.extra = extra;
    }
}
// Implement interface
class AnotherTea {
    str;
    name;
    constructor(str, name) {
        this.str = str;
        this.name = name;
    }
}
const interfaceMasala = {
    flavour: "Ginger",
    price: 45,
    size: "Medium",
};
// interfaceMasala.price = 45  // Invalid - Readonly property
interfaceMasala.flavour = "Kulhad";
console.log(interfaceMasala); // { flavour: 'Kulhad', price: 45, size: 'Medium' }
const apply50 = (p) => p * 0.5;
apply50(546);
class MasalaChai {
    getMasalaChai() {
        console.log("Masala Chai");
    }
}
class Suraj extends MasalaChai {
    getChai() {
        console.log("Getting chai........");
    }
    makeChai() {
        console.log("Making chai......");
    }
}
const s = new Suraj();
s.getChai();
s.getMasalaChai();
s.makeChai();
// Note
// 1. Interface always defined the structure of object
// 2. When a class extends another class, it inherits its implementation and does not need to redefine members. When a class implements an interface, it must define all properties and methods declared in the interface.
//# sourceMappingURL=interfaceAndGeneric.js.map