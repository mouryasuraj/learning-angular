// Difference in JS code and TS code
// JS
// function greet(name){                // In JS, we don't have to define the data type of parameter and return of function.
//     return "Hello, ", name;
// }
// const result = greet("Suraj")        // While creating variable, we don't have to define the data type
// console.log(result)
//TS
function greet(name) {
    return "Hello, ".concat(name);
}
var result = greet("Suraj"); // Have to define the data type by putting const varname:<datatype>

console.log(result);
