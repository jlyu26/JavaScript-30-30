'use strict';

// Q: What does using 'strict mode' do to your code?
// What are the benefits of using 'strict mode'?

// A: Main purpose: enforce stricter parsing and error handling.
// It helps us to 'fail fast & fail loudly'.





// 1. Prevents the use of global variables

// without using var, let, const, 'city' become a global variable
city = 'boston';
console.log(city);	// ReferenceError: city is not defined




// 2. All parameter names for a function must be unique

function myFunc(a, a, b) {
	console.log(a, a, b);
}

myFunc (1, 2, 3);
// without 'use strict': 
// 2, 2, 3
// because 2nd a parameter overwrites 1st a.
// 'use strict': 
// syntaxError: Duplicate parameter name not allowed in this context




// 3. Throws an error if we try to delete any properties on
// object that are not deletable

delete Object.prototype;
// TypeError: Cannot delete property 'prototype' of function Object() { [native code] }