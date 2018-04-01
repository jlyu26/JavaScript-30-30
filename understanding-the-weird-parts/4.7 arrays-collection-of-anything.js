var arr = [
	1,
	false,
	{
		name: 'Jinyan',
		address: 'Park Ave. Worcester, MA'
	},
	function(name) {
		var greeting = 'hi ';
		console.log(greeting + name);
	},
	'bye'
];

arr[3](arr[2].name);	// hi Jinyan