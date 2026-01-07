// Generics - Generics are one of the most important TypeScript concepts. They let you write reusable, type-safe code that works with different types, without losing type information.
// One line definition - Generics allow you to write code that works with multiple types while preserving type safety.

// ex


// With single parameter
function wrapInArrya<T>(item:T):T[]{
    return [item]
}
wrapInArrya("Suraj")
wrapInArrya(45)
wrapInArrya(["String"])
wrapInArrya({flavour:45})

// with multiple parameter
function pair<A, B>(a:A, b:B):[A,B]{
    // return [b,a]  //Chaning order not allowed
    return [a,b]
}
pair("SUraj",25)
pair("SUraj",true)
pair(78,true)


// Interface generics
interface Box<T>{
    content:T,
    name:T
}
const N:Box<string> = {
    // content:45   //error - already defined in the interface generics that type of content property will be same as type of interface
    content:"New",
    name:"New",
}
const N1:Box<string | number> = {
    content:45 , 
    name:"Suraj", 
}


// API Response example with interface generic
interface promise<T>{
    status:number,
    data:T
}
const response:promise<{flavour:string}> = {
    status:400,
    data:{
        flavour:"String"
    }
}