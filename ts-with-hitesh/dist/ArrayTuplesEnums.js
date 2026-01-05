"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Arrays
const colors = ["red", "green", "yellow"];
const price = [10, 20, 30];
const rating = [1.2, 15, 5]; //another way to declare arrays
const newArr = [5, 6, 7, 6,]; // we can also define like this(custom type)
const arrr = [
    {
        name: "apple",
        price: 45
    },
    {
        name: "grapes",
        price: 78
    }
];
// readonly arrays - we can't modify the arrays if its readonly
const cities = ["mumbai", "banglore", "jaipur", "kolkata"];
// cities.push("navi mumbai") // not allowed, its readonly.
// Two dimentional arrays
const twoDArray = [
    [2, 5, 6],
    [4, 8, 9],
];
// Tuples
let chaiTuples;
chaiTuples = ["Suraj", 45, true, ["Suraj"]]; /// In tuples, order matter
// chaiTuples= [45, "Suraj",["Suraj"], true]  /// Not allowesd
let anotherTUples; // boolean is optional - Optional values must be at the end.
anotherTUples = ["string", 45];
let t;
t = ["Suraj"];
t = ["Suraj", 45];
t = ["Suraj", 45, true];
// Readonly Tuples - Readonly is only applicable to arrays and tuples
let readonlyTuples = [45, "suraj"];
// readonlyTuples[0] = 89  // not allowed
// readonlyTuples.push(89)  // not allowed
// Named tuples
let namedTuples;
namedTuples = ["Suraj", 45];
const [name, prices] = namedTuples;
console.log(name, prices);
// Enums - Always put values of ENUM in CAPS(standard practice)
var CupSize;
(function (CupSize) {
    CupSize[CupSize["SMALL"] = 0] = "SMALL";
    CupSize[CupSize["MEDIUM"] = 1] = "MEDIUM";
    CupSize[CupSize["LARGE"] = 2] = "LARGE"; // index - 2
})(CupSize || (CupSize = {}));
const size = CupSize.LARGE;
var Status;
(function (Status) {
    Status[Status["PENDING"] = 100] = "PENDING";
    Status[Status["COMPLETED"] = 101] = "COMPLETED";
    Status[Status["FAILED"] = 102] = "FAILED"; // 102,
})(Status || (Status = {}));
console.log(CupSize[1]); // Medium
console.log(Status[1]); // undefined
console.log(Status[101]); // COMPLETED
var ChaiType;
(function (ChaiType) {
    ChaiType["MASALA"] = "masala";
    ChaiType["GINGER"] = "ginger";
    ChaiType["GARLIC"] = "garlic";
})(ChaiType || (ChaiType = {}));
function makeChai(t) {
    console.log(`${t}`);
}
console.log(makeChai(ChaiType.GARLIC));
// In Enums, we have to create enums in standard ways ex:
var notRecommended;
(function (notRecommended) {
    notRecommended[notRecommended["price"] = 25] = "price";
    notRecommended["name"] = "String";
})(notRecommended || (notRecommended = {}));
var Recommended;
(function (Recommended) {
    Recommended["FIRST_NAME"] = "Suraj";
    Recommended["LAST_NAME"] = "Mourya";
})(Recommended || (Recommended = {}));
console.log(notRecommended[0]);
console.log(Recommended.FIRST_NAME);
// Make sure do not puss any extra values in tuples, because tuples allow us to push values even after we have defined the data type of each element.
//# sourceMappingURL=ArrayTuplesEnums.js.map