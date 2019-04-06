javascript:(function(){
	
	var textual = ""; 
	for(var a =0; a<document.getElementsByClassName("second-line").length; a++ )
	{ 
		textual += document.getElementsByClassName("second-line")[a].textContent + "\n"; 
	}; 

	textual = textual.replace(/Explicit/g, ""); 
	textual = textual.replace(/•/g, " - "); 
	console.log(textual);

})();
