type CommonResumeStructure = {
    role:string; 
    experience:number; 
    skills:Array<string>
}

function makeResume(resume:CommonResumeStructure){
    console.log(resume)
}

function makeBio(bio:CommonResumeStructure){
    console.log(bio)
}

// Create a common type stucture if its needed many times in our projects as shown example.


// Interface - use interface to implement in class, type can also used 

// Class with type
type Chai = {
    type:string,
    price:number
}

class makeChai implements Chai{
    type= "kulhad";
    price= 0;
}

// class with interface

interface AnotherChai {
    cupSize:"small" | "medium" | "large" 
}

class serverChai implements AnotherChai{
    cupSize: "small" | "medium" | "large" = "small" 
}

// Below example shows that we have to create interface cause type is working
// type Response = {ok:true} | {ok:false}
// class GetResponse implements Response{
//     ok:boolean = true
// }

// fixed
interface Response  {
    ok:true | false
}
class GetResponse implements Response{
    ok:boolean = true
}



// Union ( | ) - It works like 'OR' condition (true, false => true)
type chaiType = "kulhad" | "ginger" | "cutting"   // literal type

function getChai(t:chaiType){

}

// Intersection ( & ) - It works like "AND" condition (true, true => true      false, true => false)
type baseChai = {chaiPatti:number}
type extra = {sugar:number, milk:number}

type MasalaChai = baseChai & extra

const cup:MasalaChai = {
    chaiPatti:45,
    sugar:2,
    milk:200
}


// Optional ( ? )
type User = {
    username:string,
    bio?:string
}
const user1:User = {
    username:"Suraj"
}
const user2:User = {
    username:"Shiv",
    bio:"Software Developer",
}



