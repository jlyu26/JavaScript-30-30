// What is closure? Give an example?

// A closure is an inner function that has access to the
// scope of an enclosing function.
// A closure has access to variables in 3 separate scopes:
// 1. Variables in its own scope
// 2. Variables in the scope of the outer function
// 3. Variables in the global scope
// The closure also has access to:
// 1. Its own parameters
// 2. Parameters of outer function(s)

const globalVariable = 'global var';
 
function outterFunc(param1) {
	const variable1 = 'var one';

	function innerFunc(param2) {
		const variable2 = 'var two';

		console.log('globalVariable: ', globalVariable);
		console.log('variable1: ', variable1);
		console.log('variable2: ', variable2);
		console.log('param1: ', param1);
		console.log('param2: ', param2);
	}

	innerFunc('param one');
}
 
outterFunc('param two');

// globalVariable:  global var
// variable1:  var one
// variable2:  var two
// param1:  param two
// param2:  param one


// Similar to IIFEs, closure is another great option to 
// protect variables from being on the global scope.


// Where to use closure? (1p3a面经)

// Situations where you might want to do this are particularly common 
// on the web. Much of the code we write in web JavaScript is event-based 
// — we define some behavior, then attach it to an event that is 
// triggered by the user (such as a click or a keypress). Our code is generally 
// attached as a callback: a single function which is executed in response 
// to the event. Closures for events and callbacks. This is where closures 
// are the most useful. 