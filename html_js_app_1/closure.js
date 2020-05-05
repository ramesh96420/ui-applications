//closure examples
var add = (function(a){
	var counter = 0;
	return function(){
		return counter +=1;
	};

})();