//objects


var object1 = new Object(); // object1 = {}

//object2 inherits object1 proprety
var object2 = object1;
object1.myCustomProperty = "Blah";

console.log(object2.myCustomProperty);

// BUILT IN TYPES

// Arrays
var items = new Array();
//the array literal notation is preferred
var items = [];
// Date
var now = new Date();
// Error
var error = new Error("something is fishy");
// Functions
var fn = new Function('console.log('function')');
// Objects
var object = new Object();
//the object literal notation is preferred
var object = {};
// regex (regular expression) - way to find different elements of text inside a string, extracting (parsing) data out of a string
var re = new RegExp("\\d+");

var myString = "foo bar";
// myString.replace(\g\sd);



