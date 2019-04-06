var NamesAndColors =
{
	"Open":"#7b7b7b", 
	"BLOCKED":"#c12d19", 
	"Sprint":"#e0d900", 
	"In Progress":"#00c2e0", 
	"To Test":"#60ad30", 
	"Testing":"#ffab2e", 
	"Done":"#51e898", 
	"Confirming":"#ff78cb",  
	"Past":"#b57fca", 
	"PC O":"#000", 
};

var listString = "#board .js-list";
var cardElementName = ".js-list-content";
var cardTitleName = ".list-header-name-assist";

for(var a = 0; a< $(listString).length-1; a++)
{
	var cardElement = $($(listString).get(a)).find(cardElementName);
	var cardTitle = $($(listString).get(a)).find(cardTitleName).text();

	for (var key in NamesAndColors) 
	{
	    if (NamesAndColors.hasOwnProperty(key)) 
	    {
	    	if(key == cardTitle) cardElement.css("background-color", NamesAndColors[key]);
	    }
	}
}