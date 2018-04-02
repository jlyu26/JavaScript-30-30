// Functional Programming
// Give functions to functions as parameters,
// return functions from functions, etc...
// Your functions especially the tiny ones, as you're moving
// and passing little functions around, should do their best
// not mutate data (instead just return something new).




// Implement array method 'map()' in ES6:

function mapForEach(arr, fn) {
	
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		newArr.push(
			fn(arr[i])
		);
	}

	return newArr;
}

var arr1 = [1, 2, 3];

var arr2 = mapForEach(arr1, function(item) {
	return item * 2;
});

var arr3 = mapForEach(arr1, function(item) {
	return item > 2;
});

console.log(arr1);
console.log(arr2);
console.log(arr3);

// [ 1, 2, 3 ]
// [ 2, 4, 6 ]
// [ false, false, true ]



var checkPastLimit = function(limiter, item) {
	return item > limiter;
};

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 2))	// bind 2 as limiter
console.log(arr4);
// [ false, false, true ]




// checkPastLimit() with only limiter as parameter:

var checkPastLimitSimplified = function(limiter) {
	return function(limiter, item) {
		return item > limiter;
	}.bind(this, limiter);
};

var arr5 = mapForEach(arr1, checkPastLimitSimplified(2));
console.log(arr5);
// [ false, false, true ]




// map() & forEach() Difference: (1p3a Facebook intern HR interview)

// forEach(): executes a provided function once for each array element.
// map(): creates a new array with the results of calling a provided 
// function on every element in the calling array.

// The forEach() method doesn’t actually return anything (undefined).
// It simply calls a provided function on each element in your array.
// This callback is allowed to mutate the calling array.

// Meanwhile, the map() method will also call a provided function on 
// every element in the array. The difference is that map() utilizes 
// return values and actually returns a new Array of the same size.