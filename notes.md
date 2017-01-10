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
        * like divide by 0

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
    * equal (==)
    * not equal (!=)
    * strict equal (===) (value and type equal)
    * strict not equal (!==)
    * greater than (>)
    * less than (>)
    * strings can also be compared to each other

### Logical
    * and (&&)
    * or (||)
    * not (!)
    * logical expressions terminate when additional evaluation is not needed.
        * `a || b` stops evaluating if `a` is true
        * `a && b` stops evaluating if `a` is false

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
    * `Boolean();` will coerce any value into its corresponding boolean based on the truthy/falsey rules
    * `!!` will also coerce the boolean equivalent as in `!!(null);  // false`
    * `truthy`:
        * true
        * any non-zero number
        * any string
        * any array [] including and empty array
        * any object {} including an empty object
    * `falsey`:
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
      `switch (expression) {
        case 'value1':
          // statements;
          break;
        case 'value2':
          // statements;
          break;
        default:
          // statements;
      }`

## Looping


