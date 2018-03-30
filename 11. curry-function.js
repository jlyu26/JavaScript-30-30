// Curry the given function:
function getProduct(num1, num2) {
	return num1 * num2;
}

// To curry a function, we must take our single function that
// takes nultiple arguments and change it into a sequence of
// functions that each take one or part of the arguments.

function curriedGetProduct(num1) {
	return function(num2) {
		return num1 * num2;
	};
}






// Without currying, if we only want to calculate the travel 
// time between bos and nyc, we have to write the distance '400'
// everytime we invoke the function.

function getTravelTime(distance, speed) {
	return distance / speed;
}

getTravelTime(400, 50);
getTravelTime(400, 80);
getTravelTime(400, 120);



// In practice, we use currying to apply a more general function
// 'getTravelTime()' to a specific use case 'travelTimeBosNyc',

 
function getTravelTime(distance) {
	return function(speed) {
		return distance / speed;
	};
}
 
const travelTimeBosNyc = getTravelTime(400);	// returns a function
const travelTimeMiamiAtlanta = getTravelTime(600);
console.log(travelTimeBosNyc(100));