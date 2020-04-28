/** arguments are parameters you pass to a function.  Execution context creats an 
"arguments" variable which contains all arguments   OLD WAY OF DOING IT**/

function greet(firstname, lastname, language){
	language = language || 'en';

	if(arguments.length === 0){
		console.log('missing parameters!');
		console.log('---------');
		return;
	}

	console.log(firstname);
	console.log(lastname);
	console.log(language);
	console.log(arguments);
	console.log('---------');

}

greet('John', 'Doe', 'es');


/** new way of doing it is using spread. all extra arguments passed in are wrapped 
in an array **/

function greet(firstname, lastname, language, ...other){
	language = language || 'en';

	if(arguments.length === 0){
		console.log('missing parameters!');
		console.log('---------');
		return;
	}

	console.log(other);

}

greet('John', 'Doe', 'es', '111 main st', 'new york');











