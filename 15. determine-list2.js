// Q: what will list2 contain when it is logged out to the console?

const list1 = [1, 2, 3, 4, 5];
const list2 = list1;
list1.push(6, 7, 8);

console.log(list2);



// Answer: [ 1, 2, 3, 4, 5, 6, 7, 8 ]
// Reason: array is assigned by reference. The value of a 'const'
// declared variable cannot change through re-assignment, and it 
// can't be redeclared. The trick here is as long as 'list2' 
// as a pointer always hold a **reference** to list1, it will change
// when list1 is mutated.


// what will list4 contain when logged out in code below?
const list3 = [1, 2, 3, 4, 5];
const list4 = list3;
list3 = [ 10, 20, 30 ];

console.log(list4);
// SyntaxError: Identifier 'list3' has already been declared


// what will list6 contain when logged out in code below?
let list5 = [1, 2, 3, 4, 5];
let list6 = list5;
list5 = [ 10, 20, 30 ];

console.log(list6);

// [ 1, 2, 3, 4, 5 ]
// list5 pointer set to a new array, list6 remains pointing the
// old address in memory.



////////////////////////////////////////////////////////////////////////

// Follow up question:
// How can we set list2 to the same data as list1, without actually 
// referencing the same array that list1 does? That means, we should
// update list1 without affecting the data in list2.

// A: Make a **copy** of list1 and assign it to list2 using array methods.

const list1 = [1, 2, 3, 4, 5];
const list2 = list1.slice();
const list3 = list1.concat([]);

list1.push(6, 7, 8);

console.log(list1);
console.log(list2);
console.log(list3);

// [1, 2, 3, 4, 5, 6, 7, 8]
// [1, 2, 3, 4, 5]
// [1, 2, 3, 4, 5]


// keyword: copy array