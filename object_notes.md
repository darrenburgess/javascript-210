# Objects in Javascript


  * JS comes with a set of built in objects
      * String, Array, Object, Math, Date
      * JS converts primitives to objects when you us an object method on them
  * You can create custom objects:
      * using object literal notation
          ```
          var pets = {
            dog: 'milo',
            cat: 'oreo',
          };
          ```
  * Properties
      * objects contain data and behavior
      * data is name value pairs
      * these are known as properties
      * use the `.` operator to access a property: `pets.dog;`
      * or set (or create) a property using the `.` operator. `pets.bird = 'polly';`
  * Methods
      * are function and define the behavior of objects
      * methods can be called with the `.` operator, and are invoked with `()`
      * methods can receive parameters passed within the `()`
  * always use a trailing comma after the last property in object literal notation
      * this allows propertie to be moved without concern for adding or removing commas
      * `git diff` will only return one line of code difference instead of 2
  * Property Names and Values
      * property name is any valid string
      * enclosed in single quotes or not.  
      * single quote required for more than one word property names
  * Accessing Property Values
      * use the `.` operator `pets.dog;`
      * or use the computed element operator `[]` `pets['dog'];`
          * computed element operator can be an expression `pets['do'+'g'];`
      * use dot notation to access deeper properties.  `pets.dog.age;`
  * remove a property with `delete`  `delete pets.cat;`
  * inerating objects
      * use `for (someVar in objectName) { //do stuff }`
  * `object.keys()` will return an array of the name of all the properties
  * Objects vs Arrays
      * what are the use cases for when to use a object or and array
      * arrays
          * arrays are great for lists of things
          * even lists of things that are different types
          * and then performing operations on those items by iterating
          * or removing and adding items
          * arrays maintain a specific order
      * objects
          * use objects when you need to represent something that has attributes
          * access generally is not via iteration, but by keyed access
          * objects are sometimes called associative arrays
              * keys are associated with specific data
          * so use objects when access by name is required
      * now arrays are objects, but you should not really use object methods
          * array methods are more idiomatic to arrays
              * use `splice` instead of `delete`
              * use `Array.forEach` instead of `for .. in`
  * Mutability
      * js has both primitive types: number, string, boolean, null, undefined
      * and objects
      * primitive types are immutable. This means that if you change the
        value of a variable set to a primitive, a new value is created in memory
      * objects on the other hand are mutable. They can be changed and the are still
        the same object. The data (name/value pairs) can be changed.
  * Pure Functions and Side Effects
      * functions modify exteral values
          * like variables in the outer scope
          * objects can be mutated
          * this is called `function side effects`
      * pure functions have no side effects
      * pure functions use only their arguments to determine the return value
      * pure functions always resolve to the same value, give same arguments
      * consider if a functions needs to be pure or have side effects
      * pure functions return value is often set to a variable with assignment
      * when function returns a value it is a clue that it should be pure
      * side effect functions should receive as arguments the vars to mutate
      * function side effects are significant source of bugs
      * to avoid side effects, look at ways to build a new object and return that
        object from the function

## Built in objects
  * Math object
  * Date object
  * Function Arguments object
      * array-like local variable as part of function internal scope
      * contains all arguments, despite those defined and despite those provided
      * `arguments` has a `length` property
      * `arguments` can be accessed with computed element property `[]`
      * `arguments` is not an array but an be converted to one:
          * `args = Array.prototype.slice.call(arguments);`

## Javascript Style Guide
  * use airBnB https://github.com/airbnb/javascript

## Errors
  * ReferenceError
      * occurs when the variable or function does not exist
  * TypeError
      * when you attempt to access a value with properties
  * SyntaxError
      * occurs when program is loaded
      * and generally before it is run
      * but some syntax errors will not be caught until run time
  * Preventing Errors
      * watch out for assumptions. if a program assumes a certain input
        and does not receive it, that can generate an error
      * use a `guard clause` to prevent execution on data
        guarantees that data meets requirements before being used
      * use guard clause when function can't trust that values
        will always be valid
      * consider all of the edge cases and plan code accordingly
      * consider combinations of values
      * focus on the happy path and then revisit and refactor in handling
        of the edge cases
  * Catching errors
      * some methods such as `JSON.parse()` are impractical to manually cath errors
      * but they can throw an error if provided invalid inputs
      * in this case use a `try/catch/finally` block
        ```
        try {
          // do something that might fail
        } catch (error) {
          // runs when error occurs in try block
        } finally {
          // always runs regardless of error or not. optional.
        }

