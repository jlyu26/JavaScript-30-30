console.log(1 < 2 < 3);	// true
console.log(3 < 2 < 1);	// ture


// Behind the scence: (in execution order)
console.log(3 < 2);	// false
console.log(Number(false));	// 0
console.log(0 < 1);	// true

// So back to '1 < 2 < 3', for JavaScript engine:
console.log(1 < 2);	// ture
console.log(Number(true));	// 1
console.log(1 < 3);	// ture


// Coercion (强制类型转换):

console.log('1' + 2 + 3);	// '123'
console.log(1 + 2 + '3');	// '33'


console.log(Number(true));	// 1
console.log(Number('3'));	// 3
console.log(Number(undefined));	// NaN, not a number
// NaN: Tried to convert something to a number, but there's
// no way it's a number.


console.log(Number(null));	// 0
console.log(null == 0);	// false
// ↑↑↑ makes code hard to anticipate

// How to avoid: check if 'Strict Equal (===)' (99% times...)
// '===' compares but doesn't coerce. (只比较，不转换)
// '==' evaluates equality of the value, 
// while '==='' evaluates equality of type and value.
// If the two value is not the same type, just return false.
console.log(3 == '3');	// true
console.log(3 === '3');	// false
console.log(false == 0);	// true
console.log(false === 0);	// false