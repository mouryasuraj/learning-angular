class Chai{
    flavour:string
    price:number

    constructor(flavour:string, price:number){
        this.flavour = flavour
        this.price = price
    }

}

const newChai =  new Chai("Ginger", 25)
newChai.flavour = "Kulhad"
// console.log(newChai)



// Access Modifier - Public and Private
class AnotherChai{
    public flavour:string = "Masala"
    private secretIngredients:string = "Secret Chai Masala" 
    
    reveal(){
        return this.secretIngredients
    }
}

const aChai = new AnotherChai()
// console.log(aChai.reveal())

// Access Modifier - Protected
class Shop {
    protected str:string = "A protected variable"  // WE can use protected variable in the same class or by inheriting
}

class Branch extends Shop {
    public newStr = this.str
}

const newShop = new Branch()
console.log(newShop.newStr)



// Another way to declare private variable in classes
class AnotherWay {
    #privateVar = "Private Variable"  // 

    getVar(){
        return this.#privateVar
    }
}

const newWay = new AnotherWay()
console.log(newWay.getVar())



// Readonly in classes
class Readonly {
    readonly newVar

    constructor(newVar:number=86){   // passed default value
        this.newVar = newVar
    }
}
const as = new Readonly(1)
console.log(as)
// as.newVar = 85  // we cannot modify readonly variables




// Controlled Gates (Getter Setter)
class ControlledGates {
    private _sugar:number = 2

    get Sugar(){
        return this._sugar
    }

    set Sugar(value:number){
        this._sugar = value
    }
}

const g = new ControlledGates()
g.Sugar = 8  // set sugar
console.log(g.Sugar)  // get sugar


// static
class EkChai{
    static varrr = "Ek Chai"

    constructor (flavour:string){

    }
}
console.log(EkChai.varrr)  // static variable are called on Class, no need to create class instance



// Abstract
abstract class NewChai {
    abstract make():void
}

class OldChai extends NewChai{
    make(): void {
        console.log("Make Chai....")
    }
}





// Composition
class Heater{
    heat(){
        console.log("jghkl;")
    }
}

class NewHeater {
    constructor(private heater:Heater){
        
    }
    make(){
        this.heater.heat()
    }
}

const heaterrr = new Heater()

console.log(new NewHeater(heaterrr).make())