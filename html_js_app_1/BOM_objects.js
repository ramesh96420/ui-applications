//window object
function windowOp(){
	var newWindow = window.open("http://www.google.com", "newWindow", "height=100, width=200"); //open(urlName, windowName, size);
	newWindow.moveTo(200, 150);
	newWindow.close();
	window.close();
}

//BOM Navigator Object
function navigatorProp(){
		document.write("<br> appCodeName : " + navigator.appCodeName);
		document.write("<br> appName : " + navigator.appName);
		document.write("<br> platform : " + navigator.platform);
		document.write("<br> cookie is enabled : " + navigator.cookieEnabled);
		document.write("<br> product : " + navigator.product);
		document.write("<br> user agents : " + navigator.userAgent);
}
//call the navigatorProp function
navigatorProp();

//BOM Location Object
function locationProp(){
	console.log("href of location : " + location.href);
}
//calling the locationProp() method
locationProp();
