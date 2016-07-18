// Three Ways to Instantiate and Object

var foo = {}; // anonymous - object literal - prevents Object from being overwritten
// ^^ THIS IS PREFERRED

var bar = new Object();
var baz = Object.create( null );

var fooWithProperties =  {
	aProperty: 		true,
	anotherProp: 	"property",
	myMethod: 		function method(){
						console.log("method");
	}
};

// create an object that represents a bike
// and allows us to ring a bell and define properties

