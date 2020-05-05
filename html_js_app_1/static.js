console.log("static page logs.");
document.write("Hi Ramesh....");
var general;
console.log(general);
general = 10;
console.log(typeof general);
general = "Hi general";
console.log(typeof general);
general = 'hi ram';
console.log(typeof general);
general = null;
console.log(typeof general);
general = [1,5,4,3,4];
console.log(typeof general);
console.log(general.length);

// Using prompt method, prompt method will take the values form dynamically such as user interaction.
var num1 = prompt("enter the prompt value");	//like enter - 6
console.log(typeof num1);	// type - string
console.log(num1 + 3);	//output - 63
console.log(typeof (num1+3));	//type - string

/**
	While convert one type to another type, JavaScript will provide below default methods
	parseInt();
	parseFloat();
*/
console.log(parseInt(num1)+9);	// like enter num1 = 6 than output is 15
console.log(typeof (parseInt(num1)+9));	//type - number

/* 
	alert method, it is available in javascript to give the some kind of alert message to the user.
*/
alert("alert 1..");