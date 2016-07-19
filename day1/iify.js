//IIFY

//Immediately Invoked Functions

var Car = (function() {
	var wheels = 4;

	function InsideCar( make ) {
		this.make = make;	
	}

	InsideCar.prototype.wheelCount = function() {
		console.log( wheels );
	};

	InsideCar.prototype.showMake = function() {
		console.log( this.make );
	};

	return InsideCar;

})();

var Hyundai = new Car("Hyundai");
var Ford = new Car("Ford");
Hyundai.showMake();
Ford.showMake();



// pass in jQuery and undefined
// keeps foo hidden from window object

(function( $, undefined){
	var foo = $("selector");
	foo.show();
})(jQuery);