// Q: What will be alerted when clicking on button 5?
function createButtons() {
	for (var i = 1; i <= 5; i++) {
		var body = document.getElementsByTagName("BODY")[0];
		var button = document.createElement("BUTTON");
		button.innerHTML = 'Button ' + i;
		button.onclick = function() {
			alert('This is button ' + i);
		}
		body.appendChild(button);
	}
}

createButtons();
// A: 'This is button 6'
// In fact click on any other buttons they'll alert the same message above.
// Because by the time we click on the buttons, the For Loop has already ran
// all the way through, so variable i equals to 6.




// Q: How to fix this:

// Solution 1:
// One solution is by using an IIFE to preserve the value of i of each iteration 
// in the scope of IIFE.
function createButtons() {
	for (var i = 1; i <= 5; i++) {
		var body = document.getElementsByTagName("BODY")[0];
		var button = document.createElement("BUTTON");
		button.innerHTML = 'Button ' + i;
		(function(num) {
			button.onclick = function() {
				alert('This is button ' + num);
			}
		})(i);	
		body.appendChild(button);
	}
}
// The key point is passing i in as parameter to IIFE, and in each iteration of
// For Loop, we pass the current value of i into IIFE, so on loop 1 we pass value 1, 
// loop 2 pass value 2, etc. The value of i is then being stored as 'num' parameter
// and encapsulated in the scope of IIFE, so the 'num' parameter will never change.
// Even though our For Loop will move on to the next iteration and IIFE will be
// executed again, that is a different instance of our IIFE, and that has nothing to do
// with the instance of IIFE that was executed in the previous loop.


// Solution 2:
// Another solution to clean the code above is to define a function which is to
// add onclick functionality to buttons.
function addClickFunctionality(button, num) {
	button.onclick = function() {
		alert('This is button ' + num);
	}
}

function createButtons() {
	for (var i = 1; i <= 5; i++) {
		var body = document.getElementsByTagName("BODY")[0];
		var button = document.createElement("BUTTON");
		button.innerHTML = 'Button ' + i;
		addClickFunctionality(button, i);
		body.appendChild(button);
	}
}

createButtons();


// Solution 3:
// There's another alternative keyword using ES6 'let' keyword:
function createButtons() {
	for (let i = 1; i <= 5; i++) {	// changing 'var' to 'let'
		var body = document.getElementsByTagName("BODY")[0];
		var button = document.createElement("BUTTON");
		button.innerHTML = 'Button ' + i;
		button.onclick = function() {
			alert('This is button ' + i);
		}
		body.appendChild(button);
	}
}

createButtons();
// The 'let' keyword is block-scoped instead of function-scoped like 'var'.