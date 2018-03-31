var Jinyan = {
	firstName: 'Jinyan',
	lastname: 'lyu',
	address: {
		street: '81 Park Ave',
		city: 'Worcester',
		state: 'MA'
	}
};

function greet(person) {
	console.log('Hello', person.firstName);
}

greet(Jinyan);	// Hello Jinyan