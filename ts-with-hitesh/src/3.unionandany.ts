//Union
let subscriber:(number | string) = 10 // Can accept string also "1M" 

// Use of union in real life

let apiResStatus:('pending' | 'success' | "error") = "error"
apiResStatus = "error";
// We can define our own annotations, its like options. we cannot assigned the value other than defined one. even when modifying the status, i'have to give only 'pending, success, error' 

// Any,
const orders = ["12","56","78","25"]
let currentOrder:(string|undefined); 
for(let order of orders){
    if(order==="78"){
        currentOrder = order
    }
}
console.log(currentOrder)
/*

1️⃣ If a variable is declared without an initial value and without a type annotation, TypeScript infers its type as any.
This removes type safety and allows the variable to hold any value, which can lead to runtime issues.
2️⃣ In this example, currentOrder is explicitly annotated as string | undefined because:
    The variable is declared without an initial value
    It is assigned conditionally inside the loop
    There is a possibility that the condition (order === "78") may never be satisfied
3️⃣ TypeScript correctly warns that currentOrder can be undefined when it is accessed (for example, during logging or further operations), ensuring safer code.
4️⃣ Using an explicit union type (string | undefined) makes the code predictable and type-safe, preventing accidental misuse of the variable.
5️⃣ Best practice:
    Always explicitly define types for:
    Variables declared without initialization
    Function parameters
    Function return values
    Complex objects and data structures
    This helps avoid unintended any types and improves maintainability and reliability.

*/