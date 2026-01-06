"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Chai {
    flavour;
    price;
    constructor(flavour, price) {
        this.flavour = flavour;
        this.price = price;
    }
}
const newChai = new Chai("Ginger", 25);
newChai.flavour = "Kulhad";
// console.log(newChai)
// Access Modifier - Public and Private
class AnotherChai {
    flavour = "Masala";
    secretIngredients = "Secret Chai Masala";
    reveal() {
        return this.secretIngredients;
    }
}
const aChai = new AnotherChai();
// console.log(aChai.reveal())
// Access Modifier - Protected
class Shop {
    str = "A protected variable"; // WE can use protected variable in the same class or by inheriting
}
class Branch extends Shop {
    newStr = this.str;
}
const newShop = new Branch();
console.log(newShop.newStr);
// Another way to declare private variable in classes
class AnotherWay {
    #privateVar = "Private Variable"; // 
    getVar() {
        return this.#privateVar;
    }
}
const newWay = new AnotherWay();
console.log(newWay.getVar());
// Readonly in classes
class Readonly {
    newVar;
    constructor(newVar = 86) {
        this.newVar = newVar;
    }
}
const as = new Readonly(1);
console.log(as);
// as.newVar = 85  // we cannot modify readonly variables
// Controlled Gates (Getter Setter)
class ControlledGates {
    _sugar = 2;
    get Sugar() {
        return this._sugar;
    }
    set Sugar(value) {
        this._sugar = value;
    }
}
const g = new ControlledGates();
g.Sugar = 8; // set sugar
console.log(g.Sugar); // get sugar
// static
class EkChai {
    static varrr = "Ek Chai";
    constructor(flavour) {
    }
}
console.log(EkChai.varrr); // static variable are called on Class, no need to create class instance
// Abstract
class NewChai {
}
class OldChai extends NewChai {
    make() {
        console.log("Make Chai....");
    }
}
// Composition
class Heater {
    heat() {
        console.log("jghkl;");
    }
}
class NewHeater {
    heater;
    constructor(heater) {
        this.heater = heater;
    }
    make() {
        this.heater.heat();
    }
}
const heaterrr = new Heater();
console.log(new NewHeater(heaterrr).make());
//# sourceMappingURL=oops.js.map