// functions declerations

function square(number) {
	return number * number;
}

// function expression
				// anonymous function
var add = function( first, second ) {
	return first + second;	
};

console.log(square(11));
console.log(add(11, 12));

// function expression with identifier

var factorial = function insideFactorial (number) {
	if (number < 2) {
		return 1;
	}
	return number * insideFactorial (number - 1);
};

//factorial of 5 would be (5*4*3*2*1)
console.log(factorial(5));

// OR //////
var sum = function innerSum (firstNum, secondNum) {
	return firstNum + secondNum;
};

// HOISTING ///////////////////////////////////////////////////////////////////////

var result = console.log(squair( 11 ));
//function declearations are hoisted
function squair (number){
	return number * number;
}

//function expressions are NOT hoisted
// var result2 = console.log(squair2( 11 )); // ERROR!!!!!

var squair2 = function (number){
	return number * number;
};

var results2 = squair2( 11 );
// will hoist the function declaration squair up above the variable to the variable can be defined accurately
// will NOT hoist a variable
// will NOT hoise a function expression (becase it is a variable than contains a function)

/////////////////////////////////////////////////////////////////////////////////////////////

// Parameters

function echo( value ){
	return value;
}

// functions don't care what you pass them - ignored numbers
console.log( echo( "heyo"));
console.log( echo( "don't panic", 42));
console.log( echo( {firstName: "blah", lastName: "ha!"}, 1));
console.log( echo.length ); //arity - tells you how many arguments a function is expecting


// 
function echo2() {
	return arguments [0];
}

console.log( echo2( "howdy" ) );


// add any number of values together, not specifying what arguments you want
function sum2() {
	var result = 0,
		i = 0,
		len = arguments.length;

	while (i < len) {
		result += arguments[i];
		i++;
	}

	return result;
}

console.log(sum2( 1, 2));
console.log(sum2( 3, 4, 5, 6, 7));
console.log(sum2( 1, "1", 2)); //logs 112, might need to put IF statement in to stop strings


function someOtherFunction (settings) {
	if (settings.username === "cory") {
		
	}
}




