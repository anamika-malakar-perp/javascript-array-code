//Add and remove items from array
//At function return the particular element from the index
const array = [5, 12, 8, 130, 44];
const atData = array.at(1);
console.log(atData);

//concat function will merge two arrays and return the new merge array, it will not manipulate the existing array
const array1 = ['a', 'b', 'c'];
const array2 = ['a', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);

// entries and copyWithin
// const array4 = ['a', 'b', 'c', 'd', 'e'];

// Copy to index 0 the element at index 3
// console.log(array4.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

let arr = ['I', 'go', 'home'];
delete arr[1];
console.log(arr);

// arr.splice(start[, deleteCount, elem1, ..., elemN])
arr = ['I', 'study', 'JavaScript'];
console.log(arr.splice(1, 1)); // splice will return the deleted element
console.log(arr); //it will manipulated the originl array

let arr1 = ['I', 'study', 'JavaScript', 'right', 'now'];

console.log(arr1.splice(0, 3, "Let's", 'dance'));
console.log(arr1);
//It is also possible to insert element without removal by keeping delete count as 0.

//arr.slice([start], [end])
//one less than last index
let arr2 = ['t', 'e', 's', 't'];
const newArray = arr2.slice(1, 3); //return the new array
console.log(newArray);

//Push
console.log(arr2.push({ a: 1 })); //return the length of the array
console.log(arr2);

//POP
console.log(arr2.pop());
console.log(arr2);

//Shift
console.log(arr2.unshift({ b: 2 }));
console.log(arr2);

//Unshift
console.log(arr2.shift());
console.log(arr2);

//Iterate
//foreach
// The arr.forEach method allows to run a function for every element of the array.

//Searching an array
//indexOf - arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1. searching start from starting
let arr3 = [1, 0, false];

console.log(arr3.indexOf(0)); // 1
console.log(arr3.indexOf(false)); // 2
console.log(arr3.indexOf(null)); // -1

//includes - arr.includes(item, from) – looks for item starting from index from, returns true if found.
//if u want to find element exist in th
console.log(arr3.includes(1));

// The method arr.lastIndexOf is the same as indexOf, but looks for from right to left.
console.log('last-index-of', arr3.lastIndexOf(0));


// find - usecase(Imagine we have an array of objects. How do we find an object with the specific condition?)
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);
console.log('find',user) // return only that matched element

// The arr.findIndex method has the same syntax, but returns the index where the element was found instead of the element itself. The value of -1 is returned if nothing is found.

let users1 = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"}
];

// Find the index of the first John
console.log(users1.findIndex(user => user.name == 'John')); // 0
console.log(users1.findLastIndex(user => user.name == 'John')) //3
