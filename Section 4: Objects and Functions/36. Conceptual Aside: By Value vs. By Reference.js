
/** BY VALUE - if var is set to primitive value, and another var is set to first, second 
var points to a copy of the primitive value; not the first. **/

var a = 6;
var b = a;

a = 3;

console.log(a);
console.log(b)

/** BY REFERENCE - when it is an object (including functions), it points to the same object
BY REFERENCE **/

var c = { name: "david" };
var d = c;

c = { name: "eric" };

console.log(c);
console.log(d);

