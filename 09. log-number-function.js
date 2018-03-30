var num = 50;

function logNumber() {
	console.log(num);
	var num = 100;
}

logNumber();	// undefined


////////////////////////////////////////////////////////////////////////


var num = 50;

function logNumber() {
	console.log(num);
	let num = 100;
}

logNumber();	// ReferenceError: num is not defined

// keyword: function scope, hoisting