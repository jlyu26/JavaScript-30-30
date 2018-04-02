// Implement a 'getTotal' function that could be both singly (two parameters)
// and doubly (one parameter each) invoked. They should return the same value.
// getTotal(10)(20), getTotal(10, 20);

// Firstly, store values of arguments object in an array. (from MDN example)
// arguments object is an array-like object, which has some array methods but 
// is not actually an array...

function getTotal() {
	var args = Array.prototype.slice.call(arguments);
	if (arg.length === 1) {
		return function(num) {
			return arg[0] + num;
		}
	} else if (arg.length === 2) {
		return arg[0] + arg[1];
	}
}

console.log(getTotal(10, 20));	// 30
console.log(getTotal(10)(20));	// 30


// 'var args = Array.prototype.slice.call(arguments);' can't be omitted,
// because when inner function invoked, instead of keep track of the outer
// scope, arguments[0] will be the arguments[0] of the inner function,
// which is num itself.
function getTotal() {
	if (arguments.length === 1) {
		return function(num) {
			return arguments[0] + num;
		}
	} else if (arguments.length === 2) {
		return arguments[0] + arguments[1];
	}
}

console.log(getTotal(10, 20));	// 30
console.log(getTotal(10)(20));	// 40

// To fix this, we need to store outer arguments[0] in another variable.
// And the closure will still have access to that variable when invoked.

function getTotal() {
	if (arguments.length === 1) {
		var num1 = arguments[0];
		return function(num2) {
			return num1 + num2;
		}
	} else if (arguments.length === 2) {
		return arguments[0] + arguments[1];
	}
}

console.log(getTotal(10, 20));	// 30
console.log(getTotal(10)(20));	// 30 



// ES6
function getTotal(...rest) {
	if (rest.length === 1) {
		return function(num) {
			return rest[0] + num;
		}
	} else if (rest.length=== 2) {
		return rest[0] + rest[1];
	}
}

console.log(getTotal(10, 20));	// 30
console.log(getTotal(10)(20));	// 30