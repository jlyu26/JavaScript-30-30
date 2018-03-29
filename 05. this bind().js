// What is 'this' and how is it used?

// A function's 'this' keyword refers to whatever **object**
// it is directly inside of. And the most often usage
// of this is inside of an object that we have created.

var house = {
	price: 100000,
	squareFeet: 2000,
	owner: 'Taylor',
	getPricePerSquareFoot: function() {
		return this.price / this.squareFeet;
	}
};
 
console.log(house.price);
console.log(house.getPricePerSquareFoot());

// 100000
// 50



// bind()?
// The bind() method creates a new function that, when called, 
// has its 'this' keyword set to the provided value, with a given 
// sequence of arguments preceding any provided when the new 
// function is called.

// MDN example:

var module = {
	x: 42,
	getX: function() {
		return this.x;
	}
}

var retrieveX = module.getX;
console.log(retrieveX()); // The function gets invoked at the global scope
// expected output: undefined

var boundGetX = retrieveX.bind(module);
console.log(boundGetX());
// expected output: 42