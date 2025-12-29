/*

1. typescript share the same base syntax but allows to add someting like define types.
2. TypeScript uses compile time type checking. Which means it checks if the specified types match before running the code, not while running the code.
3. Create tsconfig.json file by cmd: npx tsc --init


1. Create hello.tx file
2. Write the below code inside the file
--> 
    function greet(name:string):string{
        return `Hello, ${name}`
    }
    const result:string = greet("Suraj")
    console.log(result)
3. Compile the ts code by npx tsc hello.ts
4. After compiling, hello.js file will created in the same path
5. Then run the compiled js code by node hello.js


*/