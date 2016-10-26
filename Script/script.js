function addPlant(num) {
   
}


var fernCounter=0;
function addFern() {

    
    var start= Math.round(Math.random() *6500);
    var second= start + 1000;
    var third= second + 500;
    var fourth= third + 500;
    var fifth= Math.round(fourth + 500);
    
    var divId = "Fern" + fernCounter;
    
    var add="";
    
    add+= "<div class=\"plantBottom\" id=\"" + divId + "\">";
    add+= "<img class=\"fern\" src=\"Images/Long.png\" data-" + start + "=\"height:0%;\" data-" + second + "=\"height:50%;\"              					                data-" + fourth + "=\"height:50%;\" 			                data-" + fifth + "=\"height:100%;\">";
    add+= "<img class=\"fern\" src=\"Images/Long.png\" data-" + start + "=\"height:0%;\" data-" + second + "=\"height:50%;\" data-" + third + "=\"transform:rotate(0deg);\" data-" + fourth + "=\"transform:rotate(20deg); height:50%;\"    data-" + (fifth + 500) +"=\"height:100%;\">";
    add+= "<img class=\"fern\" src=\"Images/Long.png\" data-" + start + "=\"height:0%;\" data-" + second + "=\"height:50%;\" data-" + third + "=\"transform:rotate(0deg);\" data-" + fourth + "=\"transform:rotate(40deg); height:50%;\"	data-" + (fifth + 1000) + "=\"height:100%;\">";
    add+= "<img class=\"fern\" src=\"Images/Long.png\" data-" + start + "=\"height:0%;\" data-" + second + "=\"height:50%;\" data-" + third + "=\"transform:rotate(0deg);\" data-" + fourth + "=\"transform:rotate(-20deg); height:50%;\"   data-" + (fifth + 500) + "=\"height:100%;\">";
    add+= "<img class=\"fern\" src=\"Images/Long.png\" data-" + start + "=\"height:0%;\" data-" + second + "=\"height:50%;\" data-" + third + "=\"transform:rotate(0deg);\" data-" + fourth + "=\"transform:rotate(-40deg); height:50%;\"   data-" + (fifth + 1000) + "=\"height:100%;\">";
    add+= "</div>";
    
   $("body").prepend(add);
   
   var pos= Math.round(Math.random() *100);
   $("#" + divId).css("left", pos + "%");
   
   var height= Math.round(Math.random() *100) +200;
   $("#" + divId).css("height", height + "px");
   
   var width= Math.round(height * .15);
   $("#" + divId).css("width", width + "px");
    
   fernCounter++;
   
   s.refresh();
}