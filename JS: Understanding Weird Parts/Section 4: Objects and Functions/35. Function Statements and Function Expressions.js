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



/**
 * Why bother doing it this way?
 * Good code is about being clear and understandable,
 * and anonymous function is great for this.
 */
