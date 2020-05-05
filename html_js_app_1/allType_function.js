//Calculation Function using all type of functions.

//named function
function nCalSquare(a){
	return a*a;
}
console.log("calling named fuctions : "+nCalSquare(5));

//anonymous function
var aCal = function(b){
	return b+b;
}
console.log("calling anonymous function : " + aCal(6));

//constructor function
//new Function(var 1, var 2, ....., "bodyOfFunction");
/*var cCal = new Function("c","return a*a;");
console.log("calling constructor function : " + cCal(7));*/

//self invocking fuction
(function(a){ 
	console.log("calling self invocking function:");
	return a*a;
})(9);