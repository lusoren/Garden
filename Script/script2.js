var stalkCounter=0;
function addStalk() {
    
    //unique class id
    var divId = "Stalk" + stalkCounter;
    
    //start and subsquent skrollr data values
    var start= Math.round(Math.random() *7500);
    var second= start + 1000;
    var third= second + 2000;
    
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
   
   var height= Math.round(Math.random() *40) + 50;
   $("#" + divId).css("height", height + "%");
   
   var width= 150;
   $("#" + divId).css("width", width + "px");
   
   var zindex= Math.round(Math.random() *10)
   $("#" + divId).css("z-index", zindex);
   
   var hue= Math.round(Math.random() * 360);
   $("#" + divId).css("filter", "hue-rotate("+ hue +"deg)");
    
   stalkCounter++;
   
   s.refresh();
}

var curlCounter=0;
function addCurl() {
    
    //unique class id
    var divId = "Curl" + stalkCounter;
    
    //start and subsquent skrollr data values
    var start= Math.round(Math.random() *6000);
    var second= start + 4000;
    
    var add="";
    
    add+= "<div class=\"plantBottom\" id=\"" + divId + "\">";
    add+= "<img class=\"curl\" src=\"Images/Left.png\" data-" + start + "=\"height:50%; bottom:-50%;\" data-" + second + "=\"height:100%;bottom:0%;\">";
	add+= "<img class=\"curl\" src=\"Images/Reft.png\" data-" + (start + 100) + "=\"height:50%; bottom:-50%;\" data-" + (second + 100) + "=\"height:100%;bottom:0%;\">";
    add+= "<img class=\"curl a1\" src=\"Images/Left.png\" data-" + (start + 200) + "=\"height:50%; bottom:-50%;\" data-" + (second + 200) + "=\"height:100%;bottom:0%;\">";
    add+= "<img class=\"curl a1\" src=\"Images/Reft.png\" data-" + (start + 50) + "=\"height:50%; bottom:-50%;\" data-" + (second + 50) + "=\"height:100%;bottom:0%;\">";
    add+= "</div>";
    
   $("body").prepend(add);
      
   var pos= Math.round(Math.random() *100);
   $("#" + divId).css("left", pos + "%");
   
   var height= Math.round(Math.random() *100) + 200;
   $("#" + divId).css("height", height + "px");
   
   var width= height * .5;
   $("#" + divId).css("width", width + "px");
   
   var zindex= Math.round(Math.random() *10)
   $("#" + divId).css("z-index", zindex);
   
   var hue= Math.round(Math.random() * 360);
   $("#" + divId).css("filter", "hue-rotate("+ hue +"deg)");
    
   curlCounter++;
   
   s.refresh();
}

var vineCounter=0;
function addVine() {
    
    //unique class id
    var divId = "Vine" + stalkCounter;
    
    //start and subsquent skrollr data values
    var start= Math.round(Math.random() *8000);
    var second= start + 2000;
    
    var height= Math.round(Math.random() * 50) + 200;
    var endHeight = -1 * (height - (Math.random() * height));
    
    var add="";
    
    add+= "<div class=\"plantTop\" id=\"" + divId + "\">";
    add+= "<img class=\"curl\" src=\"Images/Vine.png\" data-" + start + "=\"top:" + (-1*height) + "px;\" data-" + second + "=\"top:" + endHeight +"\">";
    add+= "</div>";
    
   $("body").prepend(add);
      
   var pos= Math.round(Math.random() *100);
   $("#" + divId).css("left", pos + "%");
  
   $("#" + divId).css("height", height + "px");
   
   var width= 400;
   $("#" + divId).css("width", width + "px");
   
   var zindex= Math.round(Math.random() *10)
   $("#" + divId).css("z-index", zindex);
   
   var hue= Math.round(Math.random() * 360);
   $("#" + divId).css("filter", "hue-rotate("+ hue +"deg)");
    
   curlCounter++;
   
   s.refresh();
}