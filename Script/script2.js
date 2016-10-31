var stalkCounter=o;
function addStalk() {
    
    //unique class id
    var divId = "Stalk" + stalkCounter;
    
    //start and subsquent skrollr data values
    var start= Math.round(Math.random() *7500);
    var second= start + 300;
    var third= second + 1200;
    
    var add="";
    
    add+= "<div class=\"plantBottom\" id=\"" + divId + "\">";
    add+= "<img class=\"stem\" src=\"Images/Stem.png\"    data-" + start + "=\"height:0%\"            data-" + second + "=\"height:0%;\"	                     data-" + third + "=\"height:105%\">";
	add+= "<img class=\"lef\" src=\"Images/PairLeaf.png\" data-" + start + "=\"height:0px;width:0%;\" data-" + second + "=\"height:75px;width:100%;bottom:0%;\" data-" + third + "=\"bottom:20%\">";
    add+= "<img class=\"lef\" src=\"Images/PairLeaf.png\" data-" + start + "=\"height:0px;width:0%;\" data-" + second + "=\"height:75px;width:100%;bottom:0%;\" data-" + third + "=\"bottom:40%\">";
    add+= "<img class=\"lef\" src=\"Images/PairLeaf.png\" data-" + start + "=\"height:0px;width:0%;\" data-" + second + "=\"height:75px;width:100%;bottom:0%;\" data-" + third + "=\"bottom:60%\">";
    add+= "<img class=\"lef\" src=\"Images/PairLeaf.png\" data-" + start + "=\"height:0px;width:0%;\" data-" + second + "=\"height:75px;width:100%;bottom:0%;\" data-" + third + "=\"bottom:80%\">";
    add+= "<img class=\"lef\" src=\"Images/PairLeaf.png\" data-" + start + "=\"height:0px;width:0%;\" data-" + second + "=\"height:75px;width:100%;bottom:0%;\" data-" + third + "=\"bottom:100%\">";
    add+= "</div>";
    
   $("body").prepend(add);
      
   var pos= Math.round(Math.random() *100);
   $("#" + divId).css("left", pos + "%");
   
   var height= Math.round(Math.random() *40) + 60;
   $("#" + divId).css("height", height + "%");
   
   var width= 150;
   $("#" + divId).css("width", width + "px");
   
   var zindex= Math.round(Math.random() *10)
   $("#" + divId).css("z-index", zindex);
   
   var hue= Math.round(Math.random() * 360)
   $("#" + divId).css("filter", "hue-rotate("+ hue +"deg)");
    
   stalkCounter++;
   
   s.refresh();
}