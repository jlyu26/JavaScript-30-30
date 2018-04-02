// Q: Describe the JavaScript call() and apply() methods.
// Address the following:
// 1. how do they function?
// 2. what arguments do they take?
// 3. how are they different?

// call() and apply() are both native JavaScript method on
// the function prototype object. They simply give us an
// alternative way of calling the function and passing
// arguments into it. They also give us the ability to change
// the 'this' context, which we can't do if we call a function
// the normal way.

const car1 = {
	brand: 'Ford',
	getCarDescription: function(cost, year) {
		console.log(
			`This car is a ${this.brand}. The price is $${cost}. The year is ${year}.`
		);
	}
};

const car2 = {
	brand: 'Honda'
};

car1.getCarDescription(8000, 2010);
//This car is a Ford. The price is $8000. The year is 2010.


// What if we want to use getCarDescription in car2?

// Function Borrowing:

car1.getCarDescription.call(car2, 13000, 2012);
car1.getCarDescription.apply(car2, [ 13000, 2012 ]);
// This car is a Honda. The price is $13000. The year is 2012.
// This car is a Honda. The price is $13000. The year is 2012.

// See: 4.14 call()-apply()-bind()-function-borrowing-and-currying.js