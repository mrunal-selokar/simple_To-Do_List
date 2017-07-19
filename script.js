$(function(){
    $("#plus").on("click",function() {
		var val = $("input").val();
		val = val.toUpperCase();
	    if (val != '') {
	        var el = $("<li></li>").text(val);
	        $(el).append("<button class='rem'>X</button>");
	        $("#mylist").append(el);
	        $("input").val("");
	    }
	    $(".rem").on("click",function(){
       	$(this).parent().remove();
    });
    });
    var rcircle = $("#rcircle");
    rcircle.animate({width:'+=100px',height:'+=100px',top:'+=100px',lineHeight: '+=100px',fontSize:'+=8px'},500);
    rcircle.animate({width:'-=100px',height:'-=100px',top:'-=100px',lineHeight: '-=100px',fontSize:'-=8px'},500);
});