function greet(name) {
	console.log('hello', name);
}

greet();	// 'hello undefined'



// ES5:
function greet(name) {
	name = name || 'there';
	console.log('hello', name);
}

greet();	// hello there

// because '||' returns the first value that can be coerced to 'true'
console.log(undefined || 'hi');	// 'hi'
console.log('hi' || 'there');	// 'hi'

// In practice: to solve name conflict
// e.g more than one .js file loaded: lib1.js, lib2.js
window.libraryName = window.libraryName || 'lib 2';
// This will have side effects but won't overwrite or conflict code




// ES6:
function greet(name = 'there') {
	console.log('hello', name);
}

greet();	// hello there