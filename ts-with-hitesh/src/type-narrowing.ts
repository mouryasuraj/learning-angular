//type narrowing

function getChai(kind: (string | number)) {
    if (typeof kind === "string") {
        return `Making ${kind} chai`
    }
    return `Chai order ${kind} `
}

// Checking truthy values
function serveChai(msg?: string) {
    if (msg) {
        return `serving ${msg} chai`
    }
    return `Serving default chai`
}


function orderChai(size: ("small" | "medium" | "large" | number)) {
    if (size === "small") {
        return `small chai is serving`
    }
    if (size === "medium" || size === "large") {
        return `medium or large chai is getting serve`
    }

    return `num of chai ${size}`
}


// instanceof examples
class KulhadChai {
    serve() {
        return 'Serving kulhad chai....'
    }
}
class CuttingChai {
    serve() {
        return 'Serving cutting chai....'
    }
}

function serve(chai: KulhadChai | CuttingChai) {
    if (chai instanceof KulhadChai) {
        return chai.serve() + "kul"
    }
    return chai.serve() + "cut"
}
const kul = new KulhadChai
const result: string = serve(kul)
console.log(result)


// We can create our own type 
type chaiOrder = {
    type: string,
    sugar: number,
    price: number
}

// Typescript typeguard
function isChaiOrder(obj: any): obj is chaiOrder {
    return typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number" &&
        typeof obj.price === "number"
}

/*
obj is chaiOrder
This is called a type predicate.
What it means:
        “If this function returns true, then TypeScript should treat obj as type chaiOrder.”
*/


function serveChaiOrder(item:chaiOrder | string):string{
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar at ${item.price} rupees`
    }
    return `Serving custom chai ${item}`
}