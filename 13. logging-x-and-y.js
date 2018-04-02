// What is the value of y when it is logged out?
// What is the value of x when it is logged out?

(function() {
	var x = y = 200;
})();

console.log('y:', y);
console.log('x:', x);

// y: 200
// ReferenceError: x is not defined


// x is defined within the function scope inside of an IIFE,
// therefore we can't access x outside of IIFE on global scope.
// y was declired equals to 200 as a global variable without 'var'.
// The IIFE above equals to:

(function() {
	y = 200;
	var x = y;
})();


// To avoid accidentally create global variable, 'use strict'