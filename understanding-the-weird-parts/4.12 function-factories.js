// Closures: Framework Aside

function makeGreeting(language) {
	return function(firstname, lastname) {
		if (language === 'en') {
			console.log('hello', firstname, lastname);
		}

		if (language === 'es') {
			console.log('hola', firstname, lastname);
		}
	}
}

var greetingEnglish = makeGreeting('en');
var greetingSpanish = makeGreeting('es');
// the two calls above each creates it's own closure

greetingEnglish('jinyan', 'lyu');	// hello jinyan lyu
greetingSpanish('jinyan', 'lyu');	// hola jinyan lyu