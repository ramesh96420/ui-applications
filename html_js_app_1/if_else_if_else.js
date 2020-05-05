// if, else if, else conditions
console.log("if else if else conditions");
var age = prompt("Enter you age");
if((age >18 || age == 18) && age <60){
	document.write("your age is 18 or above 18 so you are elgible for vote.");
}
else if(age > 60 && age < 90){
	document.write("your age is below 90 so that not elgible for 100");
}
else if(age >90 && age < 120){
	document.write("your age is above 90 so that elgible for 100");
}
else{
	document.write("your age is below 18");
}