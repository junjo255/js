/** inside objects, if value is a primitive, its called a property
    if value is a function, its called a method

“this” is referred to the object when invoked as method unlike other ways where this
is referred to Window object   **/


/** "this" is the global object for these **/
function a(){
	console.log(this);
	this.newveriable = "hello";
}

var b = function(){
	console.log(this);
}

a();

console.log(newvariable);

b();


/** "this" is the object for this **/

var c = {
	name: "The c object",
	log: function(){
		console.log(this);
	}
}

c.log();

/** weird part of js.  when there is a function within a method, the this points to the 
global object  **/

var d = {
	name: "The d object",
	log: function(){
		this.name = "updated d object";
		console.log(this);

		var setname = function(newname){
			this.name = newname;
		}

		setname("updated again! the d object");
		console.log(this);
	}
}

d.log()
