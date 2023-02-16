//Empty object creation
let user = new Object(); // "object constructor" syntax
let user = {}; // "object literal" syntax

let user = {
  name: 'John',
  age: 30,
  'likes birds': true, // multiword property name must be quoted
};

//SQUARE BRACKETS
// For multiword properties, the dot access doesn’t work:
// this would give a syntax error
// user.likes birds = true

// So solution for that
// user["likes birds"] = true;

//Square brackets are powerful. they allow any property names and variables. but they are also more cumbersome to write.
