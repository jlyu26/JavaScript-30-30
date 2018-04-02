// Closure and Currying

function greet(whatToSay) {
	return function(name) {
		console.log(whatToSay, name);
	}
}

greet('Hi')('Jinyan');	// Hi Jinyan


var sayHi = greet('Hi');
sayHi('Jinyan');	// Hi Jinyan

// ↑↑↑ We don't have to worry if the closure's outer environment is 
// still running. The JavaScript engine will always make sure that
// whatever function we're running, it will have access to the (outer)
// variables that it's supposed to have access to. And these variables
// are called 'free variables'.

// Free Variables:
// The variables outside of a function but you have access to.


////////////////////////////////////////////////////////////////////////


// The classic for-loop closure example:

function buildFunctions() {
	var arr = [];
	for (var i = 0; i < 3; i++) {
		arr.push(
			function() {
				console.log(i);
			}
		);
	}
	return arr;
}

var fs = buildFunctions();	// create functions
fs[0]();	// invoke functions
fs[1]();
fs[2]();


// 3
// 3
// 3

// When we hit the 'return arr;' line of code, what's in memory is
// i = 3
// arr = [f0, f1, f2] 
// and when they look for i they all point at the same memory spot.
// Like ask 3 children how old is their father, they're not gonna 
// tell how old their father was when each of them was born. They
// each gonna give you the same answer: how old their father is now.