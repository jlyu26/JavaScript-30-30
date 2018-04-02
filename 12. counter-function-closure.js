// Problem:
// Write a fucntion that keeps track of how many time it was called
// and returns that number. All functionality should be inside of the
// function, none outside.


// Solution: 
// One of the best way to have a function keep track of itself is
// by using a closure.

function myFunc() {
	var count = 0;

	return function() {	// closure
		count++;
		return count;
	};
}

console.log(myFunc());	// returns a function

var instanceOne = myFunc();
var instanceTwo = myFunc();

console.log('instanceOne:', instanceOne());
console.log('instanceOne:', instanceOne());
console.log('instanceTwo:', instanceTwo());
console.log('instanceTwo:', instanceTwo());
console.log('instanceOne:', instanceOne());
console.log('instanceOne:', instanceOne());
console.log('instanceTwo:', instanceTwo());

// instanceOne: 1
// instanceOne: 2
// instanceTwo: 1
// instanceTwo: 2
// instanceOne: 3
// instanceOne: 4
// instanceTwo: 3


// In practice:

function myFunc() {
	let count = 0;
	return function() {
		// could be any checking or functionality
		if (count < 3) {
			// some computation/functionality...
		} else {
			// throw error
		}
		count++;
		return count;
	};
}

// MUST READ: (covers everything about closure)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures