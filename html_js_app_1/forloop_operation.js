//forloop_operation.js
console.log("For loop.");
var subjects=["match", "physic"];
var marks = new Array();
var num1;
for(var i=0; i<subjects.length; i++){
	num1 = parseFloat(prompt("enter marks for subjects "+subjects[i]));
	marks[i] = num1;
	console.log(marks[i]);
}

for(m in marks){
	console.log(marks[m]);
}