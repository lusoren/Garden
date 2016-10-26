function addPlant(num) {
    var rand= Math.random()*2
   if (rand<1.5) {
    addFern();
   } else{
    addCact();
   }
}

var fernCounter=0;
function addFern() {
    
    //unique class id
    var divId = "Fern" + fernCounter;
    
    //start and subsquent skrollr data values
    var start= Math.round(Math.random() *6500);
    var second= start + 1000;
    var third= second + 500;
    var fourth= third + 500;
    var fifth= Math.round(fourth + 500);
    
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

var cactCounter=0;
function addCact() {
    
    //unique class id
    var divId = "Cact" + cactCounter;
    
    //start and subsquent skrollr data values
    var start= Math.round(Math.random() *6500);
    var second= start + 1000;
    var third= second + 500;
    var fourth= third + 500;
    var fifth= Math.round(fourth + 500);
    
    var add="";
    
    add+= "<div class=\"plantBottom\" id=\"" + divId + "\">";
	add+= "<img class=\"cact\" src=\"Images/Cactus.png\" data-1000=\"transform:rotateY(90deg);\" data-2000=\"transform:rotateY(0deg)\">"
	add+= "<img class=\"cact\" src=\"Images/Cactus.png\" data-1000=\"transform:rotateY(90deg)\" data-2000=\"transform:rotateY(35deg)\">"
	add+= "<img class=\"cact\" src=\"Images/Cactus.png\" data-0=\"height:0%\" data-1000=\"transform:rotateY(60deg);height:100%\" data-2000=\"transform:rotateY(60deg)\">"
	add+= "</div>"
    
   $("body").prepend(add);
      
   var pos= Math.round(Math.random() *100);
   $("#" + divId).css("left", pos + "%");
   
   var height= Math.round(Math.random() *500) +200;
   $("#" + divId).css("height", height + "px");
   
   var width= Math.round(Math.random() *100) +100;
   $("#" + divId).css("width", width + "px");
    
   cactCounter++;
   
   s.refresh();
}