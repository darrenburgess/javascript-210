### Passing Functions as Arguments
* Functions are first class values in JS
    * can be stored in variables
    * can be passed as arguments
    * and returned as values
* Passing as arguments
    * when we pass a function as an argument, you can abstract what the function does 
      to the parameters passed to it.
    * for example you could have a function that takes an array and a function.
        * the function would iterate the array
        * the callback function would determine what gets done at each iteration
    * several built in methods also take functions as arguments
        * `forEach`
### Declarative Programming with Abstractions
* An Imperative style of programming focuses on the steps and results of functions
* Imperative programs can use function abstractions, but they are still imperative.
* The details just get moved to another function to simplify and abstract the code
* built in methods allow for a further abstracting by allowing the programmer to
  focus on the mechanics of what a function should do, rather than something like looping.(`forEach()`)
* Declarative programming
    * allows programmer to think about and solve problems in a more naturally reading way
    * imperative programming is very procedural - the human has to think like a computer
    * declarative programming allows the details to get pushed down so that programs communicate their
      intent more clearly.
### List Processing Abstractions
* `forEach` allows for iteration over an array and returns nothing
* `filter` selects a subset of an array and returns a new array
* `map` calculates a new value from each element in an array and returns a new array
* `sort` reorders the elements in an array and returns a new array
* `reduce` returns a single value computed from the result of iterating each value in a array
* `every` or `some` returns a single value after detemining if array elements meet a condition
