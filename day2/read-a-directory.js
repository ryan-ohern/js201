var fs = require('fs');
var out;

console.log(__dirname); //logs where you are accessing your file from

// real path takes two arguments, a path (__dirname) and a call back (function)
// EXAMPLE // fs.realpath(myPath, callback)
fs.realpath(__dirname, function(err, path){
	if (err) { // if there is an error we want to let people know and break out
		console.log(err);
		return;
	}

	console.log("realpath async: " + path);
});


fs.stat(__dirname, function(err, contents){
	if (err) return; // shortcut to bail out with err
	console.log(contents);
});

