$(".dh li a").on('click',function(){
	$.get($(this).attr("class"),function(data){
		$(".content").html(data);
	});
});