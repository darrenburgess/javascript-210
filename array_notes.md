# JavaScript Basics

## Data Types
### In General
  * use the `typeof` operatator to derive the type of a value
  * `typeof 1.2;  // "number"`
  * primitive values are immutable
      * they cannot be changed once created
      * values don't change, they are replaced by a new value

### Number
  * numbers use 64 bits for storage
  * max value can be determined with Number.MAX_VALUE
  * max integer: Number_MAX_SAFE_INTEGER
  * `NaN` (not a number) is returned when a calc returns a error
      * like `19 / undefined // NaN`
      * `2 * "asdf"   // NaN`

### Boolean
  * boolean is a data type that represents the truth value of logic
  * the values are either `true` or `false`

### String
  * string is a sequence of characters enclosed in single or double quotes
  * white space characters can be represented with special escaped characters
      * `\n`  New Line
      * `\t`  Tab
      * `\r`  Carriage Return
    * `\v`  Vertical Tab
    * `\b`  Backspace
  * use single or double quotes.
  * use single if you need double in the string and vice versa.
  * character access
      * `'hello'.charAt(1);  // "e"`
      * `'hello'[1];         // "e"`
  * length:  `'string'.length;`
  * use a backslash to terminate a line for a long string

### Null

### Undefined

## Variables
  * variable names are case sensitive (JavaScript is case sensitive)
  * name must start with letter, underscore or $
  * letters, numbers and underscores in rest of name
  * use the `var` declaration to create a variable `var myVariable;`
  * assign value to variable with `=`
      * `var number`;
        number = 3;
  * JS is a dynamically typed language
      * a variable can be any type
      * and that type can be changed by assigning a new value

## Operators
### Arithmetic
  * all of the basic math operators
  * remainder (`%`) operater behaves different from modulus of other languages
  * standard arithmetic order of operations applies

### Assignment
  * assignment uses the = operator to assign a value to a variable (`a = b`)
  * shorthand operator can be used to increment as in:
      * `a += b` means `a = a + b`
      * `a *= b` means `a = a * b`
      * and like wise for the -, / and % operatros 

### Comparison
  * equal `==`
  * not equal `!=`
  * strict equal `===` (value and type equal)
  * strict not equal `!==`
  * greater than `>`
  * less than `<`
  * strings can also be compared to each other

### Logical
  * and `&&` 
  * or `||`
  * not `!`
  * logical expressions terminate when additional evaluation is not needed.
      * `a || b` stops evaluating if `a` is true
      * `a && b` stops evaluating if `a` is false
  * logical expressions return the left side in these cases, otherwise the right
      * `&&` if left can evaluate to `false` return left, otherwise return right
      * `||` if left can evaluate to `true` return left, otherwise return right

## Expressions and Statement
  * an expression is any valid code that resolves to a value
      * arithmetic
      * string
      * logical (evaluates to `true` or `false`)
  * increment and decrement
      * `a++` equivalent to `a = a + 1`
      * `b = a++` equivalent to `b = a; a++`
      * `c = ++a` equivalent to `++a; c = a`
  * a statement does not resolve to a value and generally control the execution of the program
  * a statement cannot be used as part of an expression, so this is invalid:
      * `var c = (var a = 1)`

## Input and Output
  * `prompt()` is used to get user input
      * `var name = prompt("what is your name")`
  * `alert()` throws a message to the user. in a browser this is a modal dialog
  * `console.log()` will output the result of the expression in the console

## Explicit Primitive Type Coercion
  * there are a few JS methods that can convert types, returning a new value
  * this is called explicit type conversion
  * `Number('1234'); //  1234`
  * `Number("test234"); // NaN (not a number)`
  * `parseInt('123');  // 123   handles integers only`
  * `parseFloat('123.234');  // 123.234  handles floats only`
  * `String(123); // "123"`
  * `(123.12).toString();   // "123.12"`
  * `String(true);  // "true"`
  * `true.toString();  // "true"`
  * `var a = "true"; a == 'true'  // true `
  * `Boolean(null)  // false`
  * `Boolean();` will coerce any value into its corresponding boolean based on the truthy/falsy rules
  * `!!` will also coerce the boolean equivalent as in `!!(null);  // false`
  * `truthy`:
      * true
      * any non-zero number
      * any string
      * any array [] including and empty array
      * any object {} including an empty object
  * `falsy`:
      * null
      * NaN
      * 0
      * ''
      * false
      * undefined

## Implicit Primitive Type Coercion
  * JS attempts to convert the type so that it can resolve an expression with conflicting types
  * other programming languages do not allow this and will throw errors
  * try to avoid implicit type conversions as they are difficult to debug
  * urary + will attempt to convert to a number `+('123') // 123`
  * binary + will convert to string when using mixed types `1 + "test";  // "1test" `
  * other math operators will attempt coersion to numbers (*, /, -, %) because they don't have relevance for strings
  * relational operators will coerce to numbers (<, >, <=, >=)
  * best practices:
      * always use explicit coercion
      * always use string equality (=== and !==)

## Conditional Logic
  * `if (expresion) { // statements } else { // statements }`
  * the `switch` statement will evaluate each case unless `break` is included in the cases

    ```
    switch (expression) {
      case 'value1':
        // statements;
        break;
      case 'value2':
        // statements;
        break;
      default:
        // statements;
    }
      ```

## Looping
  * `while` 
      * loops evalute an expression and passes control to the block if truthy. 
      * control is returned to the expression at the end of the block
      * if still truthy, run the block
      * continue until condition is falsy
  * `break` can be used to exit a loop immediately
  * `continue` will skip the rest of the block and return execution to the top of the loop
  * `do..while` is similar to while, but will always execute at least once

      ```
      do {
        console.log(counter);
        counter++;
      } while (counter < 5);
      ```

  * `for` loops include the initial state, condition and increment expression all at once
      * any of these elements can be ommited.
      
      ```
      for (var i = 0; i < 10; i++) {
        // do stuff
      }
      ```

## Functions and Variable Scope
### Basic Function Syntax
  * a function is a procedure that allows the developer to encapsulate code for repeated execution
  * basic syntax:

      ```
      function name(parameter) {
        doSomthing;
        doMore;
      }
      ```
  * use the `return` keyword to return a value from the function
  * a function will return `undefined` if their is no return or there is no value in the return
  * a `parameter` is the name applied to a value passed to a function
  * a `parameter` becomes availble in the function as a local variable
  * an `argument` is the actual value passed
  * when defining a function we use parameters to define it
  * when calling a function we pass arguments in place of the parameters
  * functions can be nested within other functions, to just about any depth

### Function Invocation and Arguments
  * functions are invoked by appending `()` to its name as in `functionName();`
  * function names are local variables that have a function as its value
  * calling a function with to few arguments does not raise a error
  * if you don't provide an arguument, its value is `undefined`
  * extra arguments are ignored

### Function Scopes and Lexical Scoping
## Scope
  * Global scope - the scope of the entire program, outside of functions
  * Function scope - functions can access variables in the global scope
  * Functions inherit all variables in surrounding scopes
  * variables can be added to a scope via arguments passed to it
  * variables can also be added with the var keyword
  * when a variable is assigned in a scope, JS looks for the first available declared variable
  * if JS does not find the variable, it creates a new global variable (this is generally not desirable)

## Closure
  * functions retain access to the scope in affect when it is created
  * this means that if the function is invoked out of scope, it still has access
  * if the value of a variable changes, the closure/function will see the new value

## Lexical Scoping
  * The scope of an inner function contains the scope of a parent function
  * Inner functions contain the scope of the parent function even if the parent has returned
  * scope is at the function level, but not the block level
      * so unexecuted block code (like inside a condition) will not effect scope variables
        but only if they are assigned and not declared
      * however if the variable is declared in a block, that declaration will
        be hoisted to the top of the scope  

### Hoisting
  * In JS, all variables are processed before the code executes the code in a scope.
  * note that this is only the variable declaration, not its assignment
  * JS moves the variable declarations to the top of the scope, including function declarations
  * function declarations are also moved to the top
  * to avoid confusion, declare variables and functions before they are called.

### Function Declarations and Expressions
  * a function *declaration* uses the `function` keyword to define a variable to hold the function code
  * function declarations obey scoping rules
  * in this example we create an anonymous (unnamed) function add asign it to the variable `speak`
  * `speak` can then be used to invoke the function

      ```
      function speak() {
           console.log('howdy');
        }
      ```
  * function *expressions* generally involves defining a function and assigning it to a variable
  * function expressions usually involve anonymous functions
  * anonymous function is unnamed `var foo = function() { //code }`
  * named function example `var foo = function bar() { // code }`
  * function arguments become local variables and are differnt vars from same named outer scope variables

## Arrays
  * create an array with assignment: `var a = [1,2,3]`
  * create an array with constructor: `var a = new Array(1,2,3)  // not used often`
  * arrays are 0-indexed
  * `a[0]  // 1`
  * `a[1]  // 2`
  * arrays values can be modified by accessing the index
  * items can be added by using an index `a[5] = 'hello';`
  * js will insert `undefined` values if you skip indexes
  * undefined valus are also added if you increase the length `a.length = 7;`
  * arrays are objects `typeof a // 'object'`
  * or use `Array.isArray(a)  // true`
  * typical operators `+, -, *, /` do not work well with arrays
      * arithmetic operators coerce arrays to strings
      * this is non-mutating however
  * equality operators, `==` and `===` will not return true for
    two equal valued arrays
      * this is because they are different objects
      * however `array === array   // true`
      * and `array2 = array; array === array2 // true`
      * javascript considers these the same object
  * don't ever use comparison operators `< > <= >=` with arrays
    results will be unexpected
  * arrays are objects and have a length property.  
      * this is why we can call `arr.length` without any parenthesis
      * length is not a method or function. it is a property.
  * arrays elements can be added to a negative index
      * but the length of the array does not change
      * `array[-1] = 42; array[-1]; // 42; array['-1'] // 42`
  * `array.slice()`
      * `slice` makes a shallow copy of the the array and returns it
      * primitive values are copied
      * if a value is an object, the reference to the object is copied
      * that means that if the value changes in the original array
        it will also change in the new array.
