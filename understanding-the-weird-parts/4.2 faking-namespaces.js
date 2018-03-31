// Namespace:
// A **container** of variables and funcitons, typically to
// keep variables and functions with the same name separate.
// JavaScript DOESN'T have namespaces. But we can fake it
// using container objects.

var greet = 'Hello';
var greet = 'Hola';

console.log(greet);	// 'Hola'



var english = {};
var spanish = {};

english.greet = 'Hello';
spanish.greet = 'Hola';

// Although both variables called 'greet', they don't collide
// or overwrite each other. Here 'english' and 'spanish' can be
// considered basically as containers to make sure variables
// inside them don't collide with other JavaScript files, or 
// variables in the global namespace, etc.

// keyword: 命名冲突