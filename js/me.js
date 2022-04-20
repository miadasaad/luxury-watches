$("a#button, img").hover(function(){
    $("img.imgClass").animate({opacity:1},300);
}).mouseout(function(){
    $("img.imgClass").animate({opacity:0.6},300);;
});