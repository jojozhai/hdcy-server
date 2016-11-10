$(function(){
	$.ajax({
		type:"get",
		url:"/app2/video/633112",
		dataType: "json",
		success: function(obj) {
			console.log(obj)
		}
	});
})
