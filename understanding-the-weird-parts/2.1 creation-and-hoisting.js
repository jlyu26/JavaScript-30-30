// Hoisting: (can't really trust on...)

// Not acturally moving code to the top of the page, but
// before your code begin to be executed line by line, the JavaScript engine
// has already set aside memory space for the variables that you've created 
// in that entire code, and all of the functions you've created as well. So
// those variables and funcitons exist in memory.

// The difference between variables and functions is, the function its entirety
// is placed into memory space, but when it comes to variables like 'a' below,
// it doesn't know it's value until it starts executing its code, so instead, it
// puts a placeholder called 'undefined'.
// ** All variables in JavaScript are initially set to 'undefined'.

b();	// 'called b!'
console.log(a);	// undefined

// if remove the line below, console.log(a); will return error 'a is not defined'
var a = 'hello world!';

function b() {
	console.log('called b!');
}


////////////////////////////////////////////////////////////////////////

console.log(a);
console.log(b);

var a = 'hi there';
let b = 'bye' 

// undefined
// ReferenceError: b is not defined