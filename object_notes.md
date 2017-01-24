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
