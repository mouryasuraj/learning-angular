/*

1. Basically, typescript enhance JS by adding extra layer of security of variables by defining the data type of variables
2. Typescript is an addon top of javascript
3. To run typescript file, we have to compile ts file and after compilation a js file will generate.
4. Features of typescript:
    1. Type Checking
    2. Consistency in code

// How TS Works behind the scene - https://chatgpt.com/c/6954c2e2-96cc-8321-bec4-9bba36261c19
1. TS code splitted into tokens by lexer
2. Parse used these tokens to create AST
3. AST given to binder and binders works is to create symbols tables, flow nodes
4. Symbols given to emitter and emitter remove the extra things like data types and produces .js, .d.ts, .map files and we can run js like normal JS using JS runtime.


1. In node project or react, if we use typescript then we have to install dependencies with @types/<dependencyname>


TypeScript = JavaScript + Types (ONLY for development)

Compile time: Types exist ✔️
Runtime: Types removed ❌






// W3 Schools notes
TypeScript Explicit Types and Inference

1. Explicit Type Annotations - Explicit typing means you tell TypeScript exactly what type a variable should be:
Best Practice: Use explicit types for function parameters and return types to make your code more maintainable and self-documenting.
ex: 
// Function with explicit parameter and return types
function greet(name: string): string {
return `Hello, ${name}!`;
}

// TypeScript will ensure you pass the correct argument type
greet("Alice"); // OK
greet(42);     // Error: Argument of type '42' is not assignable to parameter of type 'string'

2. Type Inference
TypeScript can automatically determine (infer) the type of a variable based on its initial value:

Note: Type inference works best when variables are initialized at declaration.
Uninitialized variables have type 'any' by default unless you enable strictNullChecks in your tsconfig.json.

Watch Out: While type inference is convenient, being explicit with types can make your code more maintainable, especially in larger codebases or public APIs.

ex: 
Explicit Type Mismatch
let username: string = "alice";
username = 42; // Error: Type 'number' is not assignable to type 'string'

Implicit Type Mismatch
let score = 100;  // TypeScript infers 'number'
score = "high";  // Error: Type 'string' is not assignable to type 'number'

---> Avoid any When Possible
        Using any disables TypeScript's type checking.

        Instead, consider these alternatives:

            1. Use type annotations
            2. Create interfaces for complex objects
            3. Use type guards for runtime type checking
            4. Enable noImplicitAny in your tsconfig.json




// Type 'any'
1. The any type is the most flexible type in TypeScript.
2. It essentially tells the compiler to skip type checking for a particular variable.
3. While this can be useful in certain situations, it should be used sparingly as it bypasses TypeScript's type safety features.

When to use any:

    When migrating JavaScript code to TypeScript
    When working with dynamic content where the type is unknown
    When you need to opt out of type checking for a specific case

Example without any:

let u = true;
u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.

// Type 'unknown'
1. The unknown type is a type-safe counterpart of any.
2. It's the type-safe way to say "this could be anything, so you must perform some type of checking before you use it".

When to use unknown:

    When working with data from external sources (APIs, user input, etc.)
    When you want to ensure type safety while still allowing flexibility
    When migrating from JavaScript to TypeScript in a type-safe way



// TYpe 'never'

When to use never:

    For functions that will never return a value
    In type guards that should never match
    For exhaustive type checking in switch statements
    In generic types to indicate certain cases are impossible



// Arrays in TS

const names: string[] = [];
names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

Readonly
The readonly keyword can prevent arrays from being changed.

const names: readonly string[] = ["Dylan"];
names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?


// Tuples in TS
1. A tuple is a typed array with a pre-defined length and types for each index.
2. Tuples are great because they allow each element in the array to be a known type of value.
3. To define a tuple, specify the type of each element in the array:
    // define our tuple
    let ourTuple: [number, boolean, string];

    // initialize correctly
    ourTuple = [5, false, 'Coding God was here'];
4. Even though we have a boolean, string, and number the order matters in our tuple and will throw an error if assigned in wrong order.

Readonly Tuple
A good practice is to make your tuple readonly.

Tuples only have strongly defined types for the initial values:





// Important Notes: 
1.Type inference works best when variables are initialized at declaration.
Uninitialized variables have type 'any' by default unless you enable strictNullChecks in your tsconfig.json.
2.While type inference is convenient, being explicit with types can make your code more maintainable, especially in larger codebases or public APIs.
3.TypeScript catches issues at compile time





*/