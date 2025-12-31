"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let name = "Suraj";
let variable = Math.random() > 0.5 ? 10 : 11;
// above declared variables have not data type, but typescript autmatically assume the data type based on the value provided. This is called Type Inferencing. 
/*
Type inference in TypeScript is the compiler’s ability to automatically determine the type of a variable, function, or expression based on its usage and assigned values at compile time.

Types of type inferencing
1. Variable Inferencing
--> let name = "String"
    name = 56    // not allowed
2. Function return type inferencing
    function greet(name){
    }
    greet("Suraj")
    greet(20)  // not allowed
3. Contextual typing
    const arr = ["A","B","C"]
    arr.forEach((data)=>{
        data.toUpperCase()
    })
    arr:string
4. Object inferencing
    const obj = {
        name:"Suraj",
        age:32
    }
        obj.age = "Suraj"     // not allowed
5. array inferencing
    let numbers = [1,2,3]
    inferred --> let numbers:number[]
    let numbers = [1,"suraj",12]
    inferred --> let numbers:(string | numbers)][]


//--------Annotation-------------------

let changeName:string = "Suraj"
changeName = "Mourya"

Type of annotation
:string
:numbers
:boolean

In TypeScript, an annotation simply means:

Explicitly telling TypeScript what the type should be.

You are annotating (labeling) your code with type information instead of letting TypeScript guess.


Q. Difference between inferencing and annotation
| Aspect            | Annotation          | Inference  |
| ----------------- | ------------------- | ---------- |
| Who decides type? | Developer           | TypeScript |
| Syntax            | Explicit (`: type`) | Implicit   |
| Control           | Full control        | Automatic  |
| Verbosity         | More                | Less       |


*/
// Annotation
let names = ''; // string annotation
let arr = [1, 2, 3, 4]; // array annotation
let arr1 = [1, 2, 3, 4]; // array annotation
let num = 0; // number annotation
let bool = true; // boolean annotation
let id = []; // union annotation
//# sourceMappingURL=typesints.js.map