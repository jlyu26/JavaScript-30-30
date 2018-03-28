// curried function 函数柯里化
// currying a function is the tecnique of translating one function that takes
// multiple arguments into a **sequence of functions** that each takes a single argument

function doubleAdd(a) {
	function add(b) {
		return a + b;
	}
	return add;
}

// doubleAdd(3)(4);	// 7
// (doubleAdd(3))(4);	// 7

function tripleAdd(a) {
	return function(b) {
		return function(c) {
			return a + b + c;
		}
	}
}

// tripleAdd(1)(2)(3);	// 6

function quadrupleAdd(a) {
	return function (b) {
		return function (c, d) {
			return a + b + c + d;
		}
	}
}

// quadrupleAdd(1)(2)(3,4);	// 10