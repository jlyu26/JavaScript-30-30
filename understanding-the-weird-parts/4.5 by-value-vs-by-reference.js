// By value: (primitives, by copying the value)
// if variable 'a' is a primitive value 
// (number, string, boolean, null, undefined)
// then in expression 'b = a', b the new variable points to a new
// address in memory which holds a copy of the primitive value.

var a = 3;
var b;

b = a;
a = 2;

console.log(a);	// 2
console.log(b);	// 3




// By reference: (objects including functions)
// if variable 'a' is an object,
// then in 'b = a', b the new variable, instead of getting a new
// address in memory, simply points to the same location in memory
// that a does. No new or copied object is created. Two names
// point to the same address. Change one, all of them change.
// All objects interact by reference, when sending them equal to 
// each other or passing to a function.

var c = { greeting: 'hello' };
var d;

d = c;
c.greeting = 'hola';	// mutate*

console.log(c);	// { greeting: 'hola' }
console.log(d);	// { greeting: 'hola' }

function changeGreeting(obj) {	// by reference (even as parameters)
	obj.greeting = 'こんにちは';	// mutate
}

changeGreeting(d);
console.log(c);	// { greeting: 'こんにちは' }
console.log(d);	// { greeting: 'こんにちは' }

// equals operator sets up new memory space (new address):
c = { greeting: 'howdy' };
console.log(c);	// { greeting: 'howdy' }
console.log(d);	// { greeting: 'こんにちは' }
// ↑↑↑ d and c no longer point to the same address.






// *Mutate: to change something
// Innutable: means it can't be changed.