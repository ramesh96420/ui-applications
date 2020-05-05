// Comparison Operation with boolean
console.log("Comparison Operation with boolean");
var a = 10;
var b = 5;
var c = "5";
var d = 25;
var e = 10;
if(b==c && a==e){
	console.log("c is string value 5 , b = 5 than c==b");
	console.log("a and e = 10");
}
/*In javascript language === is equal operation, it is comparing below 
	number to number
	string to string
*/
if(e==c && a===e){
	console.log("a = 10, b = 5 than a==b");
}
if(b==c && a===e){
	console.log("true");
}
if(e==c || a===e){
	console.log("e==c || a===e output is true");
}
