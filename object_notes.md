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

