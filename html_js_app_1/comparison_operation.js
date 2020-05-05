// Comparison Operation
console.log("Comparison Operation");
var a = 10;
var b = 5;
var c = "5";
var d= 10;
if(b==c){
	console.log("c is string value 5 , b = 5 than c==b is true");
}
if(a==b){
	console.log("a = 10, b = 5 than a==b");
}
/*In javascript language === is equal operation, it is comparing below 
	number to number
	string to string
*/
if(a===b){	//false
	console.log("c is string value 5 , b = 5 than c==b is false");
}
if(a===10){
	console.log("a = 10 , d = 10 than a===d is ture");
}
else{
	console.log("a = 10, b = 5 than a!=b");
}

