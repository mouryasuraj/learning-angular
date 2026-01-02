// Arrays
const colors:string[] = ["red","green","yellow"];
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
