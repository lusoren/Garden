$(document).ready(function(){
    addFlower();
});

function addPlant() {
    var rand= Math.floor(Math.random()*5);
    console.log(rand);
   
    if (rand==0) {
        addFern();
    } else if (rand ==1){
        addCact();
    } else if (rand ==2){
        addStr8();
    } else if (rand ==3){
        addVine();
    } else if (rand ==4){
        addFlower();
    } else {
        addStalk();
    }
}

var fernCounter=0;
function addFern() {
    
    //unique class id
    var divId = "Fern" + fernCounter;
    
    //start and subsquent skrollr data values
    var start= Math.round(Math.random() *6000);
    var second= start + 2000;
    var third= second + 1000;
    var fourth= third + 1000;
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
   
   var width= Math.round(height * .13);
   $("#" + divId).css("width", width + "px");
   
   var zindex= Math.round(Math.random() *7);
   $("#" + divId).css("z-index", zindex);
   
   var hue= Math.round(Math.random() * 360)
   $("#" + divId).css("filter", "hue-rotate("+ hue +"deg)");
    
   fernCounter++;
   
   s.refresh();
}

var cactCounter=0;
function addCact() {
    
    //unique class id
    var divId = "Cact" + cactCounter;
    
    //start and subsquent skrollr data values
    var start= Math.round(Math.random() *8000);
    var second= start + 1000;
    var third= second + 1000;
    var fourth= third+ 1000;
    
    var add="";
    
    add+= "<div class=\"plantBottom\" id=\"" + divId + "\">";
    
    add+= "<img class=\"cact\" src=\"Images/Cactus.png\" data-" + second+ "=\"width:0%;\" data-" + fourth + "=\"width:100%\">"
	add+= "<img class=\"cact\" src=\"Images/Cactus.png\" data-" + second + "=\"width:0%\"  data-"+ third + "=\"width:70%\">"
    add+= "<img class=\"cact\" src=\"Images/Cactus.png\" data-" + start + "=\"height:0%\" data-"+ second + "=\"width:40%;height:100%\">"
	
	add+= "</div>"
    
   $("body").prepend(add);
      
   var pos= Math.round(Math.random() *100);
   $("#" + divId).css("left", pos + "%");
   
   var height= Math.round(Math.random() *50) +20;
   $("#" + divId).css("height", height + "%");
   
   var width= Math.round(Math.random() *50) + 100;
   $("#" + divId).css("width", width + "px");
   
   var zindex= Math.round(Math.random() *3)
   $("#" + divId).css("z-index", zindex);
   
   var hue= Math.round(Math.random() * 360);

   $("#" + divId).css("filter", "hue-rotate("+ hue +"deg)");
    
   cactCounter++;
   
   s.refresh();
}