// Immediately Invoked Functions Expressions (IIFEs)

// () invokes the function immediately after it's created:
var greeting = function(name) {
	return 'hello ' + name;
}('lyu');	

console.log(greeting);	// hello lyu
// returns a string and appoint it to variable 'greeting'

console.log(greeting());
// TypeError: greeting is not a function


// Code below will throw an error, because of the syntax parser
// saw 'function' as the beginning of a new line and expecting
// a function statement (instead of a function expression).
function(name) {
	return 'hello ' + name;
}

// To trick the syntax parser, we should put something beyound the 
// word 'function'.
(function() {

});

// That's why IIFEs always looks like this:
(function() {

})();

// And this also works:
(function() {

}());



////////////////////////////////////////////////////////////////////////

// Why are they used?

// The main reason to use an IIFE is to preserve a **priviate scope**
// within your function. Inside of JS code to make sure not overriding
// any global variables. (Because variables created inside an IIFE go
// into that function's execution context variable environment, not into
// the global.)

// In practice, when we're using frameworks or cooperate with other
// developers, IIFEs make sure our code don't collide with others.