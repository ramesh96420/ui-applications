//Persion Object creation
//first way creating the object in js
function createPersion(){
	var persion = new Object();
	persion.name = "Ramesh";
	persion.designation = "Software Engineer"
	persion.phoneNum = 9632587412;
	return persion;
}
var persionData = createPersion();

//second way creating the object in js
function createRam(){
	var persionRam = {};
	persionRam.name = "Ram";
	persionRam.designation = "Software Engineer";
	persionRam.phoneNum = 8521479630;
	return persionRam;
}
var persionRam = createRam();

//third way to creating the object in js.
function createSam(){
	var persionSam = {};
	persionSam['name'] = "Sam";
	persionSam['designation'] = "Software Engineer";
	persionSam['phoneNum'] = 7402589632;
	return persionSam;
}
var persionSam = createSam();
alert("persion name : " + persionSam.name + ", designation : " + persionSam.designation + ", phoneNum : " + persionSam.phoneNum);


//fourth way to create the object in js.
function createObjectWay4(){
	var persion = { name : "Object4", designation : "Software", phoneNum : 2013654789};
	return persion
}
var objectCreWay4 = createObjectWay4();

/*
	Fifth way to creating the object for js
	like with name this is called named function
	-- creating object with Constructor function.
	-- Persion Object creation.
	-- real time we can use this type of functions.
	-- this is class type object concept.
*/
function Persion(){
	this.name = "Ramesh Babu";
	this.designation = "Sr.Software Engineer";
	this.phoneNum = 9642063263;
}
var persion = new Persion();

/*
	Seventh way to creating the object for js
	Object creation with Object.create().
*/
var Animal = {
	type : "Invertibrates",		// default value of type
	displayType : function(){ alert("type is : "+this.type);}
}
var House = Object.create(Animal);
House.type = "House - Animal type change";	//here to change the default type name of Animal.
House.displayType();


//delete the object properties with delete keyword.
var Trainer = {

			name : "ABC",
			subjects : ["Math", "physics", "chem"],
			teachers : ["F", "S"],
			age : 60
		}

var properties = "";
for(p in Trainer){
	properties += p + " : "
}
console.log(properties);

// delete the age from the Trainer object using delete keyword.
delete Trainer.age;

properties = "";
for(p in Trainer){
	properties += p + " : "
}
console.log(properties);

