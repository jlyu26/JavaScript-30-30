// What is 'this' and how is it used?

// A function's 'this' keyword refers to whatever **object**
// it is directly inside of. And the most often usage
// of this is inside of an object that we have created.


// console.log(this);
// in browser: Window

function a() {
	console.log(this);
}

// a();	// in browser: Window

// ↑↑↑ the object where function is inside of is global object


var b = {
	name: 'the b object',
	logName: function() {
		console.log(this.name);
	}
}

b.logName();	// the b object



var c = {
	name: 'the c object',
	logName: function() {
		this.name = 'the updated c object';
		console.log(this.name);
	}
}

c.logName();	// the updated c object




////////////////////////////////////////////////////////////////////////

// The bug:

var d = {
	name: 'the d object',
	logName: function() {
		this.name = 'the updated d object';
		console.log(this.name);

		var setName = function(newname) {
			this.name = newname;
		}

		setName('updated again the d object');
		console.log(this.name);
	}
}

d.logName();
// the updated d object
// the updated d object


console.log(name);
// updated again the d object

// ↑↑↑ when invoking the setName() function, the name property was
// created on the global object! Even though the setName() function
// sits inside of an object (logName anonymous function, function is object).


// To make sure we're using the right object: 
// We point 'this' to another reference 'self'. Then simply use self
// everywhere where we normally use 'this', even inside of sub-functions.

var e = {
	name: 'the e object',
	logName: function() {
		var self = this;	// self always pointing to the e object

		self.name = 'the updated e object';
		console.log(self.name);

		var setName = function(newname) {
			self.name = newname;
		}

		setName('updated again the e object');
		console.log(self.name);
	}
}

e.logName();
// the updated e object
// updated again the e object