//Function
function addNum(a, b){
	var c = a+b;
	return c;
	
}
var sum = addNum(5, 2);
console.log("Function values "+sum);

//constructor for the function
//fuction(var 1, var 2, bodyAndReturnStatement);
// var con = new function("a","b","console.log('in constructor function'); return a+b;"); 
// console.log(con(1,2));

//self invocking function
(fuction(a,b){
	console.log("in self invocking function");
	return a+b;
})(2,5);