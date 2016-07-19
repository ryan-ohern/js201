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
/*
var bike = {
	make: 			"Honda",
	wheels: 		2, 
	hasBell: 		false,
	hasHandlebars: 	true,
	year: 			"2004",
	color: 			"green",
	ringBell: 		function (){
						if (this.hasBell){
							console.log("ring, ring");
						} else {
							console.log("I need a bell.");
						}
					},
	installBell:    function () {
						this.hasBell = true;
					} 		
};

bike.ringBell();
bike.installBell();
bike.ringBell();

THIS //////////////////////////////////
function ringGlobalBell (){
	console.log(this.bellSound);
}

var bike1 = {
	bellSound: "ring, ring",
	ringBell: function(){
		console.log(this.bellSound);
	}
};

var bike2 = {
	bellSound: "ding, ding",
	ringBell: function(){
		console.log(this.bellSound);
	}
};

var bellSound = "dingaling";
// ringGlobalBell();
bike1.ringBell();
bike2.ringBell();

// USING CALL() /////////////////
function ringGlobalBell ( bike ) {
	console.log( bike + ": " + this.bellSound);
}

var bike1 = {
	bellSound: "ring, ring"
};


var bike2 = {
	bellSound: "ding, ding"
};

var bellSound = "dingaling";

// call() - will accept two arguments
ringGlobalBell.call( this, "global");
// call as bike1
ringGlobalBell.call( bike1, "bike1");
// call as bike2
ringGlobalBell.call( bike2, "bike2");


// USING APPLY() //////////////////////////////////
// you can pass an array of arguments
ringGlobalBell.apply( this, ["global"]);
ringGlobalBell.apply( bike1, ["bike1"]);
ringGlobalBell.apply( bike2, ["bike2"]);

// USING BIND() ///////////////////////////////////
var ringBike1Bell = ringGlobalBell.bind(bike1);
ringBike1Bell("bike1");

var ringBike2Bell = ringGlobalBell.bind(bike2);
ringBike2Bell("bike2");

// once bound, it can't change
bike2.ringBell = ringBike1Bell;
bike2.ringBell("bike2");



// CONSTRUCTORS

function Bike(model) {
	this.model = 		model;
	this.logModel = 	function(){
							console.log(this.model);
						};
}

var bike1 = new Bike("Defy");
var mountainBike = new Bike("Monocog");

console.log(bike1 instanceof Bike);
console.log(mountainBike instanceof Bike);

console.log(bike1.model);
bike1.logModel();

// adding to a prototype
Bike.prototype.wheels = 2;
console.log(bike1.wheels);
console.log(mountainBike.wheels);
*/

//ADDING MULTIPLE METHODS/PROPERTIES TO PROTOTYPE

function Bike ( model ) {
	this.model = model;
}

Bike.prototype = {
	constructor: Bike, //tells you what the constructor is
	wheels: 	2,
	logModel: 	function (){
					console.log( this.model );
				}
};

var bike1 = new Bike("defy");
console.log(bike1.constructor);
