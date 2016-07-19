

var bike = (function() {

    // private
    var wheels = 2;
    var bellSound = "ring, ring";

    return {
        model: "monocog",

        wheelCount: function() {
            console.log( wheels );
        },

        ringBell: function() {
            console.log( bellSound );
        },

        setBell: function( newSound ) {
            bellSound = newSound;
        }
    };
})();

// console.log(bike.wheels);
// bike.wheelCount();
// bike.ringBell();
// bike.setBell("dingaling");
// bike.ringBell();


///////////////////////////////////////////

var kermit = (function(){
	// private
	var color = "green";
	var myFavoriteColor = "blue";

	// public
	return {
		myColor: 				function (){
									console.log(color);
								},
		guessMyFavoriteColor: 	function (guess){
									if (guess === myFavoriteColor){
										console.log("Correct, my favorite color is " + myFavoriteColor);	
									} else {
										console.log("Nope. Try again.");
									}
								}
	};
})();


console.log(kermit.myFavoriteColor); // will return undefined - no cheating!
kermit.guessMyFavoriteColor(""); // Guess Kermit's favorite color here

