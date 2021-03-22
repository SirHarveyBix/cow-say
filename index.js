// const myInformation = require('./information.js');
// myInformation();

var cowsay = require("cowsay");
let myInfos = require("./information.js");

console.log(cowsay.say({
	text : myInfos.message(),
	e : "oO",
	T : "U "
}));
