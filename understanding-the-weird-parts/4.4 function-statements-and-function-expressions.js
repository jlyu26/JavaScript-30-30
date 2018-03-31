// In JavaScript, functions are objects.

function greet() {
	console.log('hi');
}

greet.language = 'english';
console.log(greet.language);	// english


// Expression: a unit of code that results in a value.
// It doesn't have to save to a variable. Any 'expression'
// in JavaScript ends up creating a value, and that value
// doesn't have to save inside a variable.

var a;

if (a === 3) {
	//
}

// Inside () of if statement, 'a === 3' is a expression, 
// because it returns a value (true or false). But the 
// if statment itself is just a statement.

// And because in JavaScript functions are objects, we have
// both functions statements and function expressions.

// Examples:

// function statement:
function greet() {
	console.log('hi');
}

// function expression:
var anonymousGreet = function() {
	console.log('hi');
};

// ↑↑↑ is an anonymous function, which means the function object
// created in memory doesn't have a 'name' property. But it's ok
// since the variable 'anonymousGreet' pointing to its address 
// in memory. When 'var anonymousGreet = function() {' get executed,
// it returns an function object. So it's a function expression.
// A function expression creates an object on the fly.

// Anonymous Function:
// is a function that doesn't have a name in it's name property.
// What's a typical use case for anonymous functions?
// Pass it as a parameter in another function, only need to use 
// it once, callback function, IIFE.



// How we invoke a function? By putting () after it.

greet();	// function statement
anonymousGreet();	// function expression (examples above)
(function(){})();	// IIFE




////////////////////////////////////////////////////////////////////////

// And function expression and statements behave different in hoisting.

a();	// hi
b();	// TypeError: b is not a function

function a() {
	console.log('hi');
}

var b = function() {
	console.log('bye');
}





// When to use function expression?
// It's usually helpful when creating a constructor.

var cat = function() {
	console.log('Meow');
}

var kitty = new cat;

cat();	// Meow
kitty;	// Meow