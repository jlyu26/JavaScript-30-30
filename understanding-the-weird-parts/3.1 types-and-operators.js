// Dynamic Typing:
// You don't tell the engine what type of data a variable
// holds, it figures it out while your code is running.
// Variables can hold different types of values because
// it's all figured out during execution.

// Primitive Type (原始类型):
// A type of data that represents a single value, not an object.
// An object is a collection of name-value pairs.
// 6 Primitive Types:
// undefined; null; boolean; number; string; symbol (ES6)




// Operators:
// Operators are functions.

var a = 4 - 3;	// 1
var b = 4 > 3;	// true


// Operator Precedence:
// Which operator function gts called first. Higher precedence wins.
// Operator Assciativity:
// left to right / right to left
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table

var x = 1, y = 2, z = 3;

x = y = z;

console.log(x, y, z);	// 3, 3, 3