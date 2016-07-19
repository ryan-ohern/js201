myFunc = (function(){

	var private = "I'm a secret";

	function doSomething(){
		console.log('something is happening');
	}

	doSomething();

	return {
		log: function (){
			console.log("I'm another module");
		},

		logPrivate: function (){
			console.log(private);
		},
		myName: "Ryan",

		animals: ["Turle", "Monkey", "Snake"]
	};
})();

module.exports = myFunc;