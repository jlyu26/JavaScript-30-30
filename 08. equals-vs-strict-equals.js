// What is the difference between '==' and '==='?

// '==' (equals) does not test data-type
// '===' (strict equals) tests for data-type

// What happens when using '==' to compare?
// number, string --> string is converted to a number, comparison is made
// boolean, non-boolean --> non-boolean is converted to boolean, comparison is made
// object, primitive data-type --> object is converted to primitive data-type, comparison is made

console.log(7 == '7');  // true
 
console.log(7 === '7');  // false