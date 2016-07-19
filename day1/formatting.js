// use tools like jshint

// formatting and style guides
// https://contribute.jquery.org/style-guide/js/
// https://github.com/rwaldron/idiomatic.js/


//be consistent, use spaces for readability
var condition = true;

if ( condition ) {
	console.log( "foo" );
} else {
	console.log( "bar" );
}


var myThing = $("selector");

//better
var len = myThing.length;

for (var i = 0;  < len; i++ ) {
	myThing.hide();
}


