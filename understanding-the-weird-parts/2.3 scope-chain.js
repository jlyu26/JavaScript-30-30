function b() {
	console.log(myVar);
}
function a() {
	var myVar = 2;
	b();
}
var myVar = 1;
a();

// 1


// **The reference of outer environment**
// Every execution contex has a reference to its outer environment.
// The outer environment of function b is the global context.
// **The lexical environment**
// function b is sitting at the same level as where 'var myVar = 1'

// JavaScript cares about the lexical environment when it comes to the
// outer reference that every execution contex gets. When you ask a
// variable while running a line of code inside any particular execution
// context, if it can't find that variable, it will look at the 
// outer reference and look for variable there. And that outer reference
// where that point is going to depend on where the function sits lexically.

// **Scope Chain**
// Scope is where a variable is available in your code. And the chain
// is those links of outer environment references. Lexical, that is 
// where it was physically written in your code.



function a() {
	var myVar = 2;
	function b() {
		console.log(myVar);
	}
	b();
}
var myVar = 1;
a();

// 2



function a() {
	function b() {
		console.log(myVar);
	}
	b();
}
var myVar = 1;
a();

// 1


////////////////////////////////////////////////////////////////////////


// ES6: 'let' allows JavaScript engine to use 'block scoping'.
// A 'block' in general defined by '{}'.
// When that variable is declared inside that block, it's only
// available inside that block at that period of time for the
// running code.
// The variable declared with 'let' won't hoisting.
(function () {
	console.log(a);
	console.log(b);

	var a = 'hi there';
	let b = 'bye'
})();

// undefined
// ReferenceError: b is not defined