var mod1 = require("./module-one.js");
var mod2 = require("./module-two.js");

console.log(mod1.describe());
console.log(mod1.sayName());

mod2.log();
mod2.logPrivate();
console.log(mod2.myName);
// console.log(mod2.animals[1]);

for (var animal in mod2.animals){
	console.log(mod2.animals[animal]);	
}


