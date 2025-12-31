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
*/