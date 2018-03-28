// IIFE: Immediately Invoked Function Expression 立即调用函数表达式
// Simply a function that is executed right after it's created.
(function() {

})();

(function doubleNumber(num) {
	return num * 2;
})(5);	// 10



// Why are they used?
// The main reason to use an IIFE is to preserve a **priviate scope**
// within your function. Inside of JS code to make sure not overriding
// any global variables.

// Wrap intire JS file inside of an big IIFE, and place all of your functionality
// inside of it.
(function() {
  
	function getTotal(a, b) {
		return a + b;
	}

	var $ = 'currency';	// not override global variable jQuery

	if (true) console.log('hello world');
  
})();