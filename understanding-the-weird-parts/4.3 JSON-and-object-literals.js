// JSON: JavaScript Object Notation
// It's technically a subset of the object literal syntax.
// Meaning that anything that is JSON valid is also valid
// JavaScript literal syntax. Properties have to be wrapped
// in double quotes in JSON.

var objectLiteral = {
	firstName: 'Mary',
	isAProgrammer: true
}

{
	"firstName": "Mary",
	"isAProgrammer": true
}

// JSON isn't really a part of JavaScript. But JavaScript
// does come with some built-in functionality to transfer
// between the two.

console.log(JSON.stringify(objectLiteral));
// {"firstName":"Mary","isAProgrammer":true}


console.log(JSON.parse('{ "firstName": "Mary", "isAProgrammer": true }'));
// { firstName: 'Mary', isAProgrammer: true }