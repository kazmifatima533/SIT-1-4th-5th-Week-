# JavaScript Data Types

JavaScript provides various data types to work with, categorized into two main types: **Primitive** and **Non-Primitive** (Objects).

## 1. Primitive Data Types

Primitive data types are basic types of data that store a single value. JavaScript has 7 primitive data types:

### 1.1. **Number:**
Represents numeric values, both integers and floating-point numbers.

  ```js
  let age = 25; // Integer
  let score = 36.5; // Floating-point number
  ```

### 1.2. **String:**
Represents textual data.

  ```js
  let name = "John Doe";
  ```

### 1.3. **Boolean:**
Represents true or false values

  ```js
  let isActive = true;
  ```

### 1.4. **Undefined:**
A variable that has been declared but not assigned a value yet.

  ```js
  let notAssigned;
  console.log(notAssigned); // undefined
  ```

### 1.5. **Null**:
Represents an intentional absence of any object value.

  ```js
  let noValue = null;
  ```

### 1.6. **Symbol:**
Represents a unique and immutable value used as an identifier for object properties.

  ```js
  let sym = Symbol('unique');
  ```

### 1.7. **BigInt:**
Used for large integers beyond the safe integer limit for numbers.

  ```js
  let bigNumber = BigInt(12345678901234567890);
  ```


## 2. Non-Primitive (Reference) Data Types

Non-primitive types are mutable (changeable) and stored by reference. 

### 2.1. **Objects:**
A collection of key-value pairs.

  ```js
  let person = { name: "John", age: 30 };
  ```

### 2.2. **Arrays:**
A special type of object used to store an ordered list of values.

  ```js
  let colors = ["red", "green", "blue"];
  ```

### 2.3. **Functions:**
A block of code designed to perform a particular task.

  ```js
  function greet() {
    return "Hello!";
}
  ```



 


















