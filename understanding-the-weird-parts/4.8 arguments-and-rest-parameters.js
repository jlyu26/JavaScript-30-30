// Arguments: the parameters you pass to a function (???)
// JavaScript gives a keyword of the same name 'arguments'  
// which contains them all.
// 'arguments' is an array-like thing, has .length() method
// and appears in '[]', but they're not array, which is widely
// complained as a language bug.

function greet(firstname, lastname, language) {
	console.log('enumerate parameters:', firstname, lastname, language);
	console.log('using argument:', arguments);
}

greet();	
// enumerate parameters: undefined undefined undefined
// using argument {}

// Even without parameters, JavaScript unlike other languages
// won't throw errors, because of hoisting.

greet('Jinyan');
// enumerate parameters: Jinyan undefined undefined
// using argument: { '0': 'Jinyan' }


greet('Jinyan', ,'Worcester');
// Uncaught SyntaxError: Unexpected token ,


greet('Jinyan', undefined, 'Worcester');
// enumerate parameters: Jinyan undefined Worcester
// using argument: { '0': 'Jinyan', '1': undefined, '2': 'Worcester' }



////////////////////////////////////////////////////////////////////////

// ES6 rest parameters:

function greetRest(...rest) {
	console.log('rest parameters:', rest);	// log rest arguments
	console.log('using arguments', arguments);
}

greetRest('Jinyan','Lyu');	
// rest parameters: [ 'Jinyan', 'Lyu' ]
// using arguments { '0': 'Jinyan', '1': 'Lyu' }