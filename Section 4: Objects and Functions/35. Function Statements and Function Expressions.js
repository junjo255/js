/**
 * Example of your notes.
 * To run cd into the folder, and node.
 * e.g.     node 35. Function...
 */
greet() ;

function greet() {
    console.log('hi');
}

/**
 * Functions in JS are objects.
 * Here, I'm creating an object on the fly & setting it
 * equal to this variable.
 */
var anonymousGreet = function() {
    console.log('bye');
}

anonymousGreet();

/**
 * Why bother doing it this way?
 * Good code is about being clear and understandable,
 * and anonymous function is great for this.
 */
