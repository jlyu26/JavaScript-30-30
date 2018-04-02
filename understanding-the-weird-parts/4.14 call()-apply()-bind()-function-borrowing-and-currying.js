// All functions has call(), apply() and bind() methods.

// bind() does not execute the function, it creates a copy, and takes
// an argument that appoints 'this' of the function.

// call() executes the function and can take more than one arguments.
// First argument passed into call() appoints 'this' of the function,
// the rest arguments are the arguments of the function.

// apply() does the same thing as call(). One difference is the apply()
// method wants an array of function parameters.

var person = {
	firstname: 'John',
	lastname: 'Doe',
	getFullName: function() {
		var fullName = this.firstname + ' ' + this.lastname;
		return fullName;
	}
};

var logName = function(...languages) {
	console.log('Name:', this.getFullName());
	console.log('Arguments:', languages);
}

// logName();
// TypeError: this.getFullName is not a function
// 'this' points to the global (outter) object


var logPersonName = logName.bind(person);
logPersonName('en', 'es');
// Name: John Doe
// Arguments: [ 'en', 'es' ]


logName.call(person, 'en', 'es');
// Name: John Doe
// Arguments: [ 'en', 'es' ]

logName.apply(person, ['en', 'es']);
// Name: John Doe
// Arguments: [ 'en', 'es' ]



////////////////////////////////////////////////////////////////////////

// In Practice:


// Function Borrowing:
// Grab methods from other objects and use them as long as
// you have similar property names so that function works.

var anotherPerson = {
	firstname: 'Jane',
	lastname: 'Doe'
};

var anotherName = person.getFullName.apply(anotherPerson);
console.log(anotherName);
// Jane Doe





// Function Currying:
// Very useful in mathmetical situations.

function multiply(a, b) {
	return a * b;
}

// we're not using 'this' but pass in parameters to bind()
var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(5));	// 10



// Also see 4.15 functional programming 'checkPastLimit' example