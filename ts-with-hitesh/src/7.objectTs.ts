// Object

const chai = {
    name:"Masala Chai",
    price:20,
    isHot:true
}
// We haven't explicitly defined the type of the object but Typescript infers implicitly with
// {
//     name:string;
//     price:number;
//     isHot:boolean
// }
// the above is the type that typescript automatically infers implicity.
// ex:
let tea:{
    name:string;
    price:number;
    isHot:boolean
}
tea = {
    name:"Kadak Chai",
    price:40,
    isHot:false
}


// Alias Object
type randomObj = {
    name:string,
    age:number,
    skills:Array<string>   // we can also define like this string[]
}
// We have to add the exact properties in the object as defined in the type
const newObj = {
    name:"Suraj",
    age:45,
    skills:["JS","React","Angular"],
    newPro:"qweqwe"
}

const new1Obj:randomObj = newObj   // in the current assigned object, i have added new property but TS is not giving any warning bacause all the property mentioned in type are there in the newObj, extra property can also work.



// Just an Example
type Item = {name:string, age:number}
type Address = {street:string, city:string, pincode:number, state:String}

type Order = {
    id:string,
    items:Item[],
    address:Address
}
const person:Order = {
    id:"ljhgfghjkl;kjhgfhjkl",
    items:[{name:"suraj",  age:45}],
    address:{street:"asdf",city:"sadfsdf",pincode:4546,state:"asdfsdf"}
}


// Partial - If using Partial, It Make all properties in Type optional
const person2:Partial<Order> = {
    id:"asdfsdfsdf",
}
// ex
function a(p:Partial<Order>){
    console.log(p)
}
a({id:"adsfasdf"})
a({id:"adsfasdf", items:[{name:"suraj",age:45}]})
a({})  // Disadvantange of using Partial is we can pass empty also, 


// Required - Make all properties in Type required
type Demo = {
    name?:string,
    age?:number,
    address?:string
}

function required(opt:Required<Demo>){
    console.log(opt)
}
required({name:"Suraj",age:45,address:"Mankhurd"}) // If we don't pass argument then TS will give warning because all the properties are required even we have define its optional by puting '?' in type Demo


// make properties optional
type Demo1 = {
    name?:string,
    age?:number,
    address?:string
}

function required1(opt:Demo1){
    console.log(opt)
}
required1({name:"Suraj"})



// Pick - When we used Pick, From Demo2(Type), pick a set of properties whose keys are in the union <Demo2, "age" | "role">
// Atleast one is mandatory

type Demo2 = {
    name:string,
    age:number,
    address:string,
    role:string,
    isSenior:boolean
}

const occupation:Pick<Demo2, "age" | "role"> = {
    age:25,
    role:"Software Developer",
}


// Omit - Construct a type with the properties of Demo3 except for those in type Omit<Demo3, "salary">
type Demo3 = {
    name:string,
    age:number,
    address:string,
    role:string,
    isSenior:boolean,
    salary:number
}

type PublicData = Omit<Demo3, "salary">

const occupation1:PublicData = {
    name:"string",
    age:45,
    address:"string",
    role:"string",
    isSenior:true,
    // salary:4545    // Throws error: Object literal may only specify known properties, and 'salary' does not exist in type 'PublicData'
}

