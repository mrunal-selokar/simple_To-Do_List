$(function(){
    $("#add").on("click",function() {
	    var val = $("input").val();
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
});