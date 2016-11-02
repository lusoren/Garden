var str8Counter=0;
function addStr8() {
    
    //unique class id
    var divId = "str8" + str8Counter;
    
    //start and subsquent skrollr data values
    var start= Math.round(Math.random() *8000);
    var second= start + 2000;
    
    var height= Math.round(Math.random() * 30) + 20;
    var endHeight = -1 * (height - (Math.random() * height));
    
    var add="";
    
    add+= "<div class=\"plantTop\" id=\"" + divId + "\">";
    add+= "<img class=\"str8\" src=\"Images/Stem.png\" data-" + start + "=\"height:" + 0 + "%;\" data-" + second + "=\"height:" + height +"%\">";
    add+= "</div>";
    
    $("body").prepend(add);
       
    var pos= Math.round(Math.random() *100);
    $("#" + divId).css("left", pos + "%");
   
    $("#" + divId).css("height", "100%");
    
    var width= 12;
    $("#" + divId).css("width", width + "px");
    
    var zindex= Math.round(Math.random() *10)
    $("#" + divId).css("z-index", zindex);
    
    var hue= Math.round(Math.random() * 360);
    $("#" + divId).css("filter", "hue-rotate("+ hue +"deg)");
     
    str8Counter++;
    
    s.refresh();
}


    
var flowerCounter=0;
function addFlower() {
    
    //unique class id
    var divId = "flower" + flowerCounter;
    
    //start and subsquent skrollr data values
    var start= Math.round(Math.random() *8000);
    var second= start + 2000;

    
    var add="";
    
    add+= "<div class=\"plantBottom\" id=\"" + divId + "\">";
        add+= "<img class=\"stem\" src=\"Images/Stem.png\"         data-0=\"height:0%;\"		    data-1200=\"height:105%\">";
            add+= "<div id=\"flower\"                              data-0=\"bottom:0%;\"            data-1200=\"bottom:100%;\">";
        
            add+= "<img class=\"ped\" src=\"Images/Pedal.png\" data-0=\"height:0%;\"     	   			     data-500=\"height:50%\" data-1200=\"height:50%;\" 							  data-3500=\"height:100%;\">";
            add+= "<img class=\"ped\" src=\"Images/Pedal.png\" data-0=\"height:0%;transform:rotate(0deg);\"  data-500=\"height:50%\" data-1200=\"transform:rotate(20deg); height:50%;\"   data-3500=\"height:100%;\">";
            add+= "<img class=\"ped\" src=\"Images/Pedal.png\" data-0=\"height:0%;transform:rotate(0deg);\"  data-500=\"height:50%\" data-1200=\"transform:rotate(40deg); height:50%;\"	  data-3500=\"height:100%;\">";
            add+= "<img class=\"ped\" src=\"Images/Pedal.png\" data-0=\"height:0%;transform:rotate(0deg);\"  data-500=\"height:50%\" data-1200=\"transform:rotate(-20deg); height:50%;\"  data-3500=\"height:100%;\">";
            add+= "<img class=\"ped\" src=\"Images/Pedal.png\" data-0=\"height:0%;transform:rotate(0deg);\"  data-500=\"height:50%\" data-1200=\"transform:rotate(-40deg); height:50%;\"  data-3500=\"height:100%;\">";
            
        add+="</div>";
	add+="</div>";
    
    $("body").prepend(add);
       
    var pos= Math.round(Math.random() *100);
    $("#" + divId).css("left", pos + "%");
    
    var height= Math.round(Math.random() * 50) + 30;
    $("#" + divId).css("height", height + "%");
    
    var width= 100;
    $("#" + divId).css("width", width + "px");
    
    var zindex= Math.round(Math.random() *10)
    $("#" + divId).css("z-index", zindex);
    
    var hue= Math.round(Math.random() * 360);
    $("#" + divId).css("filter", "hue-rotate("+ hue +"deg)");
     
    flowerCounter++;
    
    s.refresh();
}