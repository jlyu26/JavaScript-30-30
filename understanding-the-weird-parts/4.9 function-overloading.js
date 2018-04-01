// Function overloading: 
// having a function of the same name that has different number of parameters.
// This is not available in JavaScript because in JS functions are objects.

// Solution from stackoverflow：

// The best way to do function overloading with parameters is NOT to check
// the argument length or the types. Checking the types will just make your 
// code slow and you have the fun of Arrays, nulls, Objects, etc.
// What most developers do is tack on an object as the last argument to their 
// methods. This object can hold anything.

function foo(a, b, opts) {

}


foo(1, 2, { "method": "add" });
foo(3, 4, { "test": "equals", "bar": "tree" });