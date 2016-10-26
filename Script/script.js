function addPlant(num) {
   
}


var fernCounter=0;
function addFern() {
    alert("jello");
    
    var start= Math.round(Math.random() *6500);
    var divId = "Fern" + fernCounter;
    
    
    $("body").append("<div class=\"plantBottom\" id=\"" + divId + "\">");
        $("body").append("<img class=\"fern\" src=\"Images/Long.png\" data-0=\"height:0%;\" data-1000=\"height:50%;\" data-1500=\"\" 					     data-2000=\"height:50%;\" 							 data-2500=\"height:100%;\">");
        $("body").append("<img class=\"fern\" src=\"Images/Long.png\" data-0=\"height:0%;\" data-1000=\"height:50%;\" data-1500=\"transform:rotate(0deg);\" data-2000=\"transform:rotate(20deg); height:50%;\"  data-3000=\"height:100%;\">");
        $("body").append("<img class=\"fern\" src=\"Images/Long.png\" data-0=\"height:0%;\" data-1000=\"height:50%;\" data-1500=\"transform:rotate(0deg);\" data-2000=\"transform:rotate(40deg); height:50%;\"	 data-3500=\"height:100%;\">");
        $("body").append("<img class=\"fern\" src=\"Images/Long.png\" data-0=\"height:0%;\" data-1000=\"height:50%;\" data-1500=\"transform:rotate(0deg);\" data-2000=\"transform:rotate(-20deg); height:50%;\" data-3000=\"height:100%;\">");
        $("body").append("<img class=\"fern\" src=\"Images/Long.png\" data-0=\"height:0%;\" data-1000=\"height:50%;\" data-1500=\"transform:rotate(0deg);\" data-2000=\"transform:rotate(-40deg); height:50%;\" data-3500=\"height:100%;\">");
    $("body").append("</div>");
    
   
   var pos= Math.round(Math.random() *100);
   $(divId).css("left", pos + "%");
   
   var height= Math.round(Math.random() *100) +200;
   $(divId).css("height", height + "px");
   
   var width= Math.round(height * 1.2);
   $(divId).css("width", width + "px");
    
    fernCounter++;
}