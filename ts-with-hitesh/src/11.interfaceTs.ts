// Interface - Main goal of terface is to give shape or blueprint to data

// Difference in type and interface
// 1. Declaration Merging

// interface - Declaration Mergning allowed
interface A {
    str: string
}
interface A {
    name: string
}
const mergingInterface: A = {
    str: "String",
    name: "Suraj"
}


// type - Mergning not allowed
type B = {
    str: string
}
// type B = {              //Duplicate identifier 'B'.
//     str:string
// }


// 2. Extending VS Intersection

// extends
interface C extends A {
    shiv: string
}
const ex: C = {
    str: "String",   // able to user str which in defined in interface A
    name: "suraj",   // able to user str which in defined in interface A
    shiv: "Suraj"
}

// intersection
type Basic = {
    name: string,
    age: number
}
type Advanced = {
    skills: string[],
    collegeName: string
}
type Person = Basic & Advanced    // & - is intersection, means both basic and advanced properties are mandatory
const person: Person = {
    name: "Suraj",
    age: 25,
    skills: ["JS", "React", "TS", "MongoDB", "Nginx", "Docker", "Git"],
    collegeName: "Khalsa College"
}


// 3. type can represents more than objects
type strOrNumber = string | number    // type can represent ANY type
// ex:
type ErrorType = string | number;
type Status = "hot" | "cold";
type Tuple = [string, number];


// interface strOrNum = string | number   // ❌ invalid - Interface can ONLY describe object shapes


// 4. Classes can implement both
// Implement type
class Tea implements Person{
    name: string
    age: number
    skills: string[]
    collegeName: string
    extra:string

    constructor(name:string, age:number, skills:string[], collegeName:string, extra:string){
        this.name = name
        this.age = age
        this.skills = skills
        this.collegeName = collegeName
        this.extra = extra
    }
}

// Implement interface
class AnotherTea implements A{
    str: string
    name: string

    constructor(str: string, name: string){
        this.str = str
        this.name = name
    }
}


// extends vs implements

// | Feature          | extends       | implements             |
// | ---------------- | ------------- | ---------------------- |
// | Used with        | class → class | class → interface/type |
// | Relationship     | IS-A          | CAN-DO                 |
// | Inherits code    | ✅ Yes         | ❌ No                   |
// | Multiple allowed | ❌ No          | ✅ Yes                  |
// | Runtime effect   | ✅ Yes         | ❌ No                   |
// | Coupling         | Tight         | Loose                  |





interface InterfaceChai {
    flavour: string,
    readonly price: number,
    size: string,
    milk?:boolean
}
const interfaceMasala: InterfaceChai = {
    flavour: "Ginger",
    price: 45,
    size: "Medium",
}
// interfaceMasala.price = 45  // Invalid - Readonly property
interfaceMasala.flavour = "Kulhad"
console.log(interfaceMasala)   // { flavour: 'Kulhad', price: 45, size: 'Medium' }


interface DiscountCalculator{
    (price:number):number     // interface defined function structure that takes one numerical argument and return numerical value
}
const apply50:DiscountCalculator = (p) => p * 0.5
apply50(546)


// functions in interface
interface BasicChai{
    getChai():void
    makeChai():void
}
class MasalaChai{
    getMasalaChai(){
        console.log("Masala Chai")
    }
}

class Suraj extends MasalaChai implements BasicChai{
    getChai(): void {
        console.log("Getting chai........")
    }

    makeChai(): void {
        console.log("Making chai......")
    }
}
const s = new Suraj()
s.getChai()
s.getMasalaChai()
s.makeChai()


// Index Signature
// 🧠 Simple analogy (best way to remember - “Any label you put on this box must contain this type of item.”
// 1. “This object can have dynamic keys, and all keys of a certain type will have values of a specific type.”

// Basic Syntax
// {[key:string]:number}   // “For any property name (string key), the value must be a number.”

interface Scores {
    [playName:string]:number
}
const scr:Scores = {
    // Suraj:"shiv"    // not allowed
    Suraj:14,
    Swati:45,
    Arpit:56,
    Prakash:78
}

// Number index signature
interface NumberIndexSignature  {
    [key:number]:string
}

const scr1:NumberIndexSignature = {
    0:"Suraj",
    1:"Mourya",
    // Suraj:"asd"  // not allowed
}

/*

If an object has both named properties and an index signature:
    All named properties must match the index signature value type.
*/

interface UserMap{
    [key:string]:string
    name:string,  // allowed
    age:string // allowed
}
interface UserMap1{
    [key:string]:string
    // name:number,  // not allowed
    // age:number // not allowed
}


// Optional index signature
interface Normal{
    [key:string]:string[] | number | boolean
}
 
// readonly index signature
interface Normal1{
    readonly [key:string]:string[] | number | boolean
}


// extends interface
interface Q{
    name:string
}
interface R{
    num:number
}
 
interface S extends Q,R{

}

const user:S = {
    name:"Suraj",
    num:56,
}



// Note
// 1. Interface always defined the structure of object
// 2. When a class extends another class, it inherits its implementation and does not need to redefine members. When a class implements an interface, it must define all properties and methods declared in the interface.
// 3. An index signature allows TypeScript to define the type of values for objects with dynamic property names.
// 4. Arrays internally use number index signatures.