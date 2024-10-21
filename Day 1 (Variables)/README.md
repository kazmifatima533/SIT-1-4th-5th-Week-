# JavaScript Variables - Day 1

In JavaScript, there are three ways to declare variables: `const`, `let`, and `var`. Each has different scoping rules and behaviors, which are important to understand for writing clean, efficient code.

### 1. **`const` - Constant Variable**

- **Usage**: Use `const` to declare variables whose value should not be reassigned after they are initialized. It cannot be redeclared or updated.
  
- **Behavior**:
  - **`Block-scoped:`** The variable is only accessible within the block (e.g., inside functions, loops, or conditionals) where it is declared.
  - **`Immutable Reference:`** The reference to the value is immutable, but the value itself (if it's an object or array) can still be modified (updated).

```js
const PI = 3.14159;    // Constant value (cannot be reassigned)
PI = 3.14;             // Error: Assignment to constant variable

const person = { name: 'John' };
person.name = 'Jane';  // Allowed, object properties can be modified
console.log(person.name); // "Jane"
```

-**Important:** You cannot reassign the variable after it has been initialized. However, the contents of the object or array assigned to the `const` variable can still change/updated.


### 2. **`let` - Block-scoped Variable**

- **Usage**: Use `let` when the variable's value is expected to change during the program's execution. It can be updated but not redeclared in the same scope.

- **Behavior**:
  - **`Block-scoped:`** Like `const`, `let` is limited to the block in which it is declared (e.g., inside loops or conditionals).
  - **`Mutable:`** You can reassign (update) the value of the variable.

```js  
let counter = 0;
counter = 5;    // Allowed, the value can be changed
console.log(counter); // 5

if (true) {
    let message = 'Hello, World!';
    console.log(message); // "Hello, World!"
}
console.log(message); // Error: message is not defined outside the block
```

**Important:** You can reassign the variable, but the variable will only exist within its block scope.
### 3. **`var` - Function-scoped Variable**

- **Usage**: `var` is the traditional way of declaring variables, but it has some quirks, especially around scope. It is generally not recommended to use `var` in modern JavaScript development.

- **Behavior**:
  - **`Function-scoped:`** Variables declared with `var` are accessible within the entire function (or globally if declared outside a function), regardless of where in the function they are declared.

```js 
function testVar() {
    console.log(x);   // undefined (due to hoisting)
    var x = 10;
    console.log(x);   // 10
}

testVar();
```

**Important:** Avoid using var in favor of let and const unless working with older codebases. It’s generally more prone to errors due to its function-scoping.



## Key Differences:


|   Feature |      const    |            let        |             var |
|   ----------------|-------------|-----------------------|------------------|
|   Scope    |    Block-scoped      | Block-scoped  | Function-scoped |
|   Reassignable| No (constant reference)       | Yes (can be reassigned/updated)|Yes (can be reassigned)|
| Best Use     | For values that should not change        | For variables that may change          |	Not recommended




