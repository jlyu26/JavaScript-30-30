// Describe what variable and function hoisting is
// and how it works.

// In JavaScript, variable and functions are all hoisted to
// the top of the scope that they're declared in. So hoisting
// is basically the process in which the JavaScript interpreter
// looks ahead in the code to find all of the variabe and unction
// declarations and then hoists those declarations to the top
// of the file.


// function expression:

var getProduct;

console.log(getProduct(2, 3));	// TypeError: gttProduct is not a function

var getProduct = function(num1, num2) {
	return num1 * num2;
};


////////////////////////////////////////////////////////////////////////



// function declaration: hoisted to the top of the scope

console.log(getProduct(2, 3));	// 6

function getProduct(num1, num2) {
	return num1 * num2;
}



////////////////////////////////////////////////////////////////////////


function getTotal() {
	console.log(multiplier);	// undefined
	console.log(total);	// ReferenceError: total is not defined

	let total = 0;

	for(var i = 0; i < 10; i++) {

		let valueToAdd = i;
		var multiplier = 2;
		total += valueToAdd * multiplier;
	}

	return total;
}
 
getTotal();


// var (function scoped): global scope, function scope
// const, let (block scoped): global scope, function scope, block scope
// A 'block' in general defined by '{}'.
// When we use 'const' or 'let' to declare a variable 
// in block scope, that variable declaration will only
// be hoisted to the top of that block.