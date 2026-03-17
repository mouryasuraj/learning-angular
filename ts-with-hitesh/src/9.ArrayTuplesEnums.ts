// Arrays
const colors:(string | number)[] = ["red","green","yellow"];
const price:number[] = [10,20,30]


const rating:Array<number> = [1.2,15,5] //another way to declare arrays
type NumberArr = number
const newArr:Array<NumberArr> = [5,6,7,6,]  // we can also define like this(custom type)


// Array of objects
type Order = {
    name:string,
    price:number
}
const arrr:Order[] = [
    {
        name:"apple",
        price:45
    },
    {
        name:"grapes",
        price:78
    }
]

// readonly arrays - we can't modify the arrays if its readonly
const cities: readonly string[] = ["mumbai", "banglore", "jaipur","kolkata"]
// cities.push("navi mumbai") // not allowed, its readonly.

// Two dimentional arrays
const twoDArray: number[][] = [
    [2,5,6],
    [4,8,9],
]


// Tuples
let chaiTuples: [string, number, boolean, string[]] 
chaiTuples= ["Suraj", 45, true,["Suraj"]]  /// In tuples, order matter
// chaiTuples= [45, "Suraj",["Suraj"], true]  /// Not allowesd

let anotherTUples:[string, number, boolean?]  // boolean is optional - Optional values must be at the end.
anotherTUples = ["string", 45]

type OptionalType = [string] | [string, number] | [string, number, boolean]  //another way to make data optional
let t:OptionalType
t=["Suraj"] 
t=["Suraj", 45] 
t=["Suraj", 45, true] 

// Readonly Tuples - Readonly is only applicable to arrays and tuples
let readonlyTuples: readonly [number, string] = [45,"suraj"]
// readonlyTuples[0] = 89  // not allowed
// readonlyTuples.push(89)  // not allowed

// Named tuples
let namedTuples:[name:string, prices:number]
namedTuples = ["Suraj", 45]
const [name, prices] = namedTuples
console.log(name, prices)


// Enums - Always put values of ENUM in CAPS(standard practice)
enum CupSize {
    SMALL,   //typescript automatically assigned index 0
    MEDIUM,  // index - 1
    LARGE   // index - 2
}
const size = CupSize.LARGE

enum Status {
    PENDING = 100,
    COMPLETED,  // Typescript automatically assigned index 101
    FAILED // 102,
}

console.log(CupSize[1])  // Medium
console.log(Status[1])  // undefined
console.log(Status[101]) // COMPLETED

enum ChaiType {
    MASALA="masala",
    GINGER="ginger",
    GARLIC="garlic"
}

function makeChai(t:ChaiType){
    console.log(`${t}`)
}
console.log(makeChai(ChaiType.GARLIC))

// In Enums, we have to create enums in standard ways ex:
enum notRecommended {
    price = 25,  // Typescript will not throw any error, but this is not standard practice
    name = "String"
}
enum Recommended {
    FIRST_NAME = 'Suraj',
    LAST_NAME = 'Mourya'
}

console.log(notRecommended[0])
console.log(Recommended.FIRST_NAME)

// Make sure do not puss any extra values in tuples, because tuples allow us to push values even after we have defined the data type of each element.

