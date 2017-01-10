# JavaScript Basics

## Data Types
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
