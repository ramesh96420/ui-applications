//Event Listener function
function paraClicked(){
	document.getElementById("abc").setAttribute("style", "color:yellow");
}

function paraMouseOver(){
	document.getElementById("abc").setAttribute("style", "color:blue");
}

//calling Event Listener function
document.getElementById("abc").addEventListener("click", paraClicked);
document.getElementById("abc").addEventListener("mouseover", paraMouseOver);

//Click on button below fuction is executed
function buttonClick(){
	document.getElementById("b").setAttribute("style", "color:blue");
}

function buttonMouseOver(){
	document.getElementById("b").setAttribute("style", "color:yellow");
}

//Form validation
//check whether name is added or not
function validateForm(){
	var name = document.getElementById("name");
	var phno = document.getElementById("phno");

	//validation of name
	if(name.value == ""){
		alert("please enter some value in Name");
	}
	//check the condition for name is not accepted the numbers
	if(!(isNaN(name.value))){
		alert("please enter text  value in name");
	}

	//check the phone number accepted only the numbers
	if(isNaN(name.value)){
		alert("please enter number value in phone number");
	}
}