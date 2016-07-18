function Human (name, age, details) {
	this.name = name;
	this.age = age;
	this.details = details;
}

Human.prototype = {
	constructor: Human,

	showAge: function() {
		console.log("I'm this many: " + this.age);
	},

	sayName: function() {
		console.log("My name is: " + this.name);
	},

	showDetails: function() {
		console.log(this.details);
	}
};

var ryan = new Human("Ryan O'Hern", 29, {
	member: "",
	music: ["needtobreathe", "Ben Rector"]
})