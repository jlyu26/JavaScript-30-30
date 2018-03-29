this.color = 'Red';

var myCar = {
	color: 'Blue',
	logColor: function() {
		var self = this;
		console.log('In logColor - this.color:', this.color);
		console.log('In logColor - self.color:', self.color);
		(function() {
			console.log('In IIFE - this.color:', this.color);
			console.log('In IIFE - self.color:', self.color);
		})();
	}
}

myCar.logColor();


// In logColor - this.color: Blue
// In logColor - self.color: Blue
// In IIFE - this.color: Red
// In IIFE - self.color: Blue




// A function's 'this' keyword refers to whatever **object**
// it is directly inside of. In line 4 we store the reference
// to myCar object inside of a variable called 'self'.
// Setting a variable called 'self' equal to 'this' is a very
// common practice in JavaScript to help solve scope and referencing
// issues. It's purpose is to store a reference to a certain
// scope or context that you'll need to use later on.

// In the IIFE, it's not a method of myCar object, the 'this' keyword
// has lost reference to myCar object, and instead it's now only
// referencing the **global** object (outer reference)**.

// It's important to know that if using 'this' inside of a nested 
// functions you're more than likely to lose reference to the object
// that you're inside of. And your 'this' keyword will end up
// referencing the global object.

// ** When you ask a variable while running a line of code inside any 
// particular executioncontext, if it can't find that variable, it will 
// look at the outer reference and look for variable there.